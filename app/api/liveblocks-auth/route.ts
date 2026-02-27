import { Liveblocks } from "@liveblocks/node";
import {auth, currentUser, clerkClient} from "@clerk/nextjs/server";
import { api } from "@/convex/_generated/api";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET_KEY!,

});

export async function POST(request: Request) {
 
    const authorization = await auth();
    const user = await currentUser();

    if (!authorization.userId || !user) {
        return new Response("Unauthorized", { status: 401 });
    }
 
    const {room} = await request.json();

    const board = await convex.query(api.board.get , {id: room }) ;

    if (!board) {
        return new Response("Board not found", { status: 404 });
    }

    // Check if user is a member of the board's organization
    const client = await clerkClient();
    const orgMemberships = await client.users.getOrganizationMembershipList({
        userId: user.id,
    });

    const userOrgIds = orgMemberships.data.map((membership) => membership.organization.id);

    if (!userOrgIds.includes(board.orgId)) {
        return new Response("Unauthorized - You are not a member of this board's organization", { status: 403 });
    }

    const userInfo = {
        name : user.firstName || "Unknown",
        picture : user.imageUrl || "",
    };
    const session =  liveblocks.prepareSession(
        user.id,
        {userInfo}
    );
    if(room){
        session.allow(room , session.FULL_ACCESS)
    }
    const {status , body} = await session.authorize()

    return new Response(body, { status });
}