import Image from "next/image";

export const EmptySearch = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-center size-20 rounded-2xl bg-neutral-100 mb-4">
        <Image src="/empty-search.svg" alt="Empty" height={48} width={48} />
      </div>
      <h2 className="text-xl font-semibold">No results found</h2>
      <p className="text-muted-foreground text-sm mt-1.5 text-center max-w-xs">
        Try a different search term or check for typos.
      </p>
    </div>
  );
};