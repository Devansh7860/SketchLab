"use client";

import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";

type NewBoardButtonProps = {
  orgId: string;
  disabled?: boolean;
};

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);

  const onClick = () => {
    mutate({
      orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created.");
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error("Failed to create board."));
  };

  return (
    <button
      disabled={pending || disabled}
      aria-disabled={pending || disabled}
      onClick={onClick}
      className={cn(
        "col-span-1 aspect-100/127 bg-linear-to-br from-violet-600 to-indigo-600 rounded-2xl flex flex-col items-center justify-center py-6 transition-all duration-300 shadow-md",
        pending || disabled
          ? "opacity-75 cursor-not-allowed"
          : "hover:shadow-xl hover:-translate-y-0.5 hover:from-violet-500 hover:to-indigo-500",
      )}
    >
      <div aria-hidden />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light">New board</p>
    </button>
  );
};