"use client";

import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const RoomError = () => {
  return (
    <main className="h-full w-full relative bg-neutral-100 flex flex-col items-center justify-center gap-y-4">
      <AlertTriangle className="h-12 w-12 text-red-500" />
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Unable to load board</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          You may not have access to this board, or the board may have been deleted.
        </p>
      </div>
      <Button asChild variant="default">
        <Link href="/">
          Return to boards
        </Link>
      </Button>
    </main>
  );
};
