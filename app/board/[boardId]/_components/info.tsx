"use client";

import { useQuery } from "convex/react";
import { Menu } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { Actions } from "@/components/actions";
import { Hint } from "@/components/hint";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { cn } from "@/lib/utils";
import { useRenameModal } from "@/store/use-rename-modal";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

type InfoProps = {
  boardId: string;
};

export const Info = ({ boardId }: InfoProps) => {
  const { onOpen } = useRenameModal();
  const data = useQuery(api.board.get, {
    id: boardId as Id<"boards">,
  });

  if (!data) return <InfoSkeleton />;

  return (
    <div className="absolute top-3 left-3 bg-white rounded-xl px-2 h-11 flex items-center shadow-lg border border-neutral-200/60 z-10">
      <Hint label="Go to boards" side="bottom" sideOffset={10}>
        <Button variant="ghost" className="px-1.5 h-8" asChild>
          <Link href="/dashboard">
            <Image
              src="/logo.svg"
              alt="SketchLab Logo"
              height={28}
              width={28}
            />
            <span
              className={cn(
                "font-semibold text-base ml-1 text-foreground hidden sm:inline",
                font.className,
              )}
            >
              SketchLab
            </span>
          </Link>
        </Button>
      </Hint>

      <Separator orientation="vertical" className="h-6 mx-1.5" />

      <Hint label="Edit title" side="bottom" sideOffset={10}>
        <Button
          onClick={() => onOpen(data._id, data.title)}
          variant="ghost"
          className="text-sm font-normal px-2 h-8 max-w-40 truncate"
        >
          {data.title}
        </Button>
      </Hint>

      <Separator orientation="vertical" className="h-6 mx-1.5" />

      <Actions id={data._id} title={data.title} side="bottom" sideOffset={10}>
        <div>
          <Hint label="Main menu" side="bottom" sideOffset={10}>
            <Button size="icon-sm" variant="ghost">
              <Menu className="size-4" />
            </Button>
          </Hint>
        </div>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div
      className="w-60 absolute top-3 left-3 bg-white rounded-xl h-11 flex items-center shadow-lg border border-neutral-200/60"
      aria-hidden
    />
  );
};