"use client";

import { BringToFront, SendToBack, Trash2 } from "lucide-react";
import { memo } from "react";

import { Hint } from "@/components/hint";
import { Separator } from "@/components/ui/separator";
import { useDeleteLayers } from "@/hooks/use-delete-layers";
import { useSelectionBounds } from "@/hooks/use-selection-bounds";
import { useMutation, useSelf } from "@liveblocks/react/suspense";
import type { Camera, Color } from "@/types/canvas";
import { cn } from "@/lib/utils";

import { ColorPicker } from "./color-picker";

type SelectionToolsProps = {
  camera: Camera;
  setLastUsedColor: (color: Color) => void;
};

const ActionButton = ({
  onClick,
  label,
  icon: Icon,
  side = "top",
  destructive = false,
}: {
  onClick: () => void;
  label: string;
  icon: React.ElementType;
  side?: "top" | "bottom";
  destructive?: boolean;
}) => (
  <Hint label={label} side={side} sideOffset={10}>
    <button
      onClick={onClick}
      className={cn(
        "flex items-center justify-center size-8 rounded-lg transition-colors",
        "hover:bg-accent text-muted-foreground hover:text-foreground",
        destructive && "hover:bg-red-50 hover:text-red-600",
      )}
    >
      <Icon className="size-4" />
    </button>
  </Hint>
);

export const SelectionTools = memo(
  ({ camera, setLastUsedColor }: SelectionToolsProps) => {
    const selection = useSelf((me) => me.presence.selection);

    const moveToFront = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) indices.push(i);
        }

        for (let i = indices.length - 1; i >= 0; i--) {
          liveLayerIds.move(
            indices[i],
            arr.length - 1 - (indices.length - 1 - i),
          );
        }
      },
      [selection],
    );

    const moveToBack = useMutation(
      ({ storage }) => {
        const liveLayerIds = storage.get("layerIds");
        const indices: number[] = [];

        const arr = liveLayerIds.toImmutable();

        for (let i = 0; i < arr.length; i++) {
          if (selection.includes(arr[i])) indices.push(i);
        }

        for (let i = 0; i < indices.length; i++) {
          liveLayerIds.move(indices[i], i);
        }
      },
      [selection],
    );

    const setFill = useMutation(
      ({ storage }, fill: Color) => {
        const liveLayers = storage.get("layers");
        setLastUsedColor(fill);

        selection.forEach((id) => {
          liveLayers.get(id)?.set("fill", fill);
        });
      },
      [selection, setLastUsedColor],
    );

    const deleteLayers = useDeleteLayers();

    const selectionBounds = useSelectionBounds();

    if (!selectionBounds) return null;

    const x = selectionBounds.width / 2 + selectionBounds.x + camera.x;
    const y = selectionBounds.y + camera.y;

    return (
      <div
        className="absolute p-1.5 rounded-xl bg-white shadow-lg border border-neutral-200/60 flex items-center gap-x-1 select-none z-10"
        style={{
          transform: `translate(
            calc(${x}px - 50%),
            calc(${y - 16}px - 100%)
        )`,
        }}
      >
        <ColorPicker onChange={setFill} />

        <Separator orientation="vertical" className="h-6 mx-0.5" />

        <ActionButton onClick={moveToFront} label="Bring to front" icon={BringToFront} />
        <ActionButton onClick={moveToBack} label="Bring to back" icon={SendToBack} />

        <Separator orientation="vertical" className="h-6 mx-0.5" />

        <ActionButton onClick={deleteLayers} label="Delete" icon={Trash2} destructive />
      </div>
    );
  },
);

SelectionTools.displayName = "SelectionTools";