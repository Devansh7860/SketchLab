import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

type FooterProps = {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavourite: boolean;
  onClick: () => void;
  disabled: boolean;
};

export const Footer = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavourite,
  onClick,
  disabled,
}: FooterProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    e.preventDefault();

    onClick();
  };

  return (
    <div className="relative bg-white px-3.5 py-3">
      <p className="text-[13px] font-medium truncate max-w-[calc(100%-20px)]">{title}</p>
      <p className="opacity-0 group-hover:opacity-100 transition-opacity text-[11px] text-muted-foreground truncate">
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        disabled={disabled}
        aria-disabled={disabled}
        onClick={handleClick}
        className={cn(
          "opacity-0 group-hover:opacity-100 transition absolute top-3 right-3 text-muted-foreground hover:text-violet-600",
          disabled && "cursor-not-allowed opacity-75",
          isFavourite && "opacity-100",
        )}
      >
        <Star
          className={cn(
            "h-4 w-4",
            isFavourite && "fill-violet-600 text-violet-600",
          )}
        />
      </button>
    </div>
  );
};