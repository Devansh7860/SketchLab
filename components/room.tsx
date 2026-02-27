"use client";

import { ReactNode, Component } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveMap , LiveList, LiveObject } from "@liveblocks/client";
import {Layer} from "@/types/canvas";

interface RoomProps {
  children: ReactNode;
  roomId: string;
  fallback : NonNullable<ReactNode> | null;
}

class RoomErrorBoundary extends Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="h-full w-full relative bg-neutral-100 flex flex-col items-center justify-center gap-y-4">
          <div className="text-center space-y-2">
            <h2 className="text-xl font-semibold">Unable to load board</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              You may not have access to this board, or the board may have been deleted.
            </p>
            <a href="/dashboard" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Return to boards
            </a>
          </div>
        </main>
      );
    }
    return this.props.children;
  }
}

export function Room({ children, roomId , fallback }: RoomProps) {
  return (
    <RoomErrorBoundary>
      <LiveblocksProvider throttle={16} authEndpoint="/api/liveblocks-auth">
        <RoomProvider 
          id={roomId} 
          initialPresence={{
          cursor: null,
          selection: [],
          pencilDraft: null,
          penColor: null,
        }} 
          initialStorage={{ 
            layers : new LiveMap<string , LiveObject<Layer>>(),
            layerIds : new LiveList<string>([])
          }}  >
          <ClientSideSuspense fallback={fallback}>
            {() => children}
          </ClientSideSuspense>
        </RoomProvider>
      </LiveblocksProvider>
    </RoomErrorBoundary>
  );
}