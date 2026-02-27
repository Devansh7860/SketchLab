"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

import { LayoutDashboard, Star } from "lucide-react";

import { BoardCard } from "./board-card";
import { EmptyBoards } from "./empty-boards";
import { EmptyFavourites } from "./empty-favorites";
import { EmptySearch } from "./empty-search";
import { NewBoardButton } from "./new-board-button";

type BoardListProps = {
  orgId: string;
  query: {
    search?: string;
    favourites?: string;
  };
};

export const BoardList = ({ orgId, query }: BoardListProps) => {
  const data = useQuery(api.boards.get, { orgId, ...query });

  const icon = query.favourites ? (
    <Star className="size-5 text-violet-600" />
  ) : (
    <LayoutDashboard className="size-5 text-violet-600" />
  );
  const heading = query.favourites ? "Favourite boards" : "Team boards";

  if (data === undefined)
    return (
      <div>
        <div className="flex items-center gap-x-3 mb-6">
          <div className="flex items-center justify-center size-10 rounded-lg bg-violet-100">
            {icon}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{heading}</h2>
            <p className="text-sm text-muted-foreground">Loading your boards…</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pb-10">
          <NewBoardButton orgId={orgId} disabled />
          {Array.from({ length: 4 }).map((_, i) => (
            <BoardCard.Skeleton key={i} />
          ))}
        </div>
      </div>
    );

  if (!data?.length && query.search) return <EmptySearch />;
  if (!data.length && query.favourites) return <EmptyFavourites />;
  if (!data?.length) return <EmptyBoards />;

  return (
    <div>
      <div className="flex items-center gap-x-3 mb-6">
        <div className="flex items-center justify-center size-10 rounded-lg bg-violet-100">
          {icon}
        </div>
        <div>
          <h2 className="text-xl font-semibold">{heading}</h2>
          <p className="text-sm text-muted-foreground">
            {data.length} board{data.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 pb-10">
        <NewBoardButton orgId={orgId} />
        {data?.map((board) => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={board.orgId}
            isFavourite={board.isFavourite}
          />
        ))}
      </div>
    </div>
  );
};