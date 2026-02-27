import Image from "next/image";

export const EmptyFavourites = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center size-20 rounded-2xl bg-amber-100 mb-4">
        <Image src="/empty-favourites.svg" alt="Empty" height={48} width={48} />
      </div>
      <h2 className="text-xl font-semibold">No favourite boards</h2>
      <p className="text-muted-foreground text-sm mt-1.5 text-center max-w-xs">
        Star the boards you use most to find them here.
      </p>
    </div>
  );
};