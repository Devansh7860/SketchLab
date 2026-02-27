"use client";

import type { LucideIcon } from "lucide-react";

import { Hint } from "@/components/hint";
import { cn } from "@/lib/utils";

type ToolButtonProps = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  isDisabled?: boolean;
};

export const ToolButton = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  isDisabled,
}: ToolButtonProps) => {
  return (
    <Hint label={label} side="top" sideOffset={12}>
      <button
        disabled={isDisabled}
        aria-disabled={isDisabled}
        onClick={onClick}
        className={cn(
          "flex items-center justify-center size-9 rounded-lg transition-colors",
          "hover:bg-accent text-muted-foreground hover:text-foreground",
          "disabled:opacity-40 disabled:pointer-events-none",
          isActive && "bg-violet-500/15 text-violet-700",
        )}
      >
        <Icon className="size-[18px]" />
      </button>
    </Hint>
  );
};