"use client";

import { useOrganization } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";

export const EmptyBoards = () => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);
  const { organization } = useOrganization();

  const onClick = () => {
    if (!organization) return;

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created.");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board."));
  };
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center size-20 rounded-2xl bg-violet-100 mb-4">
        <Image src="/empty-boards.svg" alt="Empty" height={48} width={48} />
      </div>
      <h2 className="text-xl font-semibold">Create your first board</h2>
      <p className="text-muted-foreground text-sm mt-1.5 text-center max-w-xs">
        Start by creating a board for your organization to collaborate in real time.
      </p>
      <div className="mt-5">
        <Button
          disabled={pending}
          aria-disabled={pending}
          onClick={onClick}
          size="lg"
          className="bg-linear-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white shadow-md"
        >
          Create board
        </Button>
      </div>
    </div>
  );
};