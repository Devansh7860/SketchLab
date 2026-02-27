"use client";

import { colorToCSS } from "@/lib/utils";
import type { Color } from "@/types/canvas";

type ColorPickerProps = {
  onChange: (color: Color) => void;
};

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
  return (
    <div className="flex items-center gap-1 px-1">
      <ColorButton color={{ r: 243, g: 82, b: 35 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 249, b: 177 }} onClick={onChange} />
      <ColorButton color={{ r: 68, g: 202, b: 99 }} onClick={onChange} />
      <ColorButton color={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
      <ColorButton color={{ r: 155, g: 105, b: 245 }} onClick={onChange} />
      <ColorButton color={{ r: 252, g: 142, b: 42 }} onClick={onChange} />
      <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />
      <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
    </div>
  );
};

type ColorButtonProps = {
  onClick: (color: Color) => void;
  color: Color;
};

const ColorButton = ({ color, onClick }: ColorButtonProps) => {
  return (
    <button
      className="size-6 rounded-full border border-neutral-200 hover:scale-110 active:scale-95 transition-transform shadow-sm"
      onClick={() => onClick(color)}
      style={{ background: colorToCSS(color) }}
      aria-label={`Color ${colorToCSS(color)}`}
    />
  );
};