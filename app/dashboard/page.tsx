"use client";

import { useOrganization } from "@clerk/nextjs";
import { use } from "react";

import EmptyOrg from "./empty-org";
import { BoardList } from "./_components/board-list";

interface DashboardPageProps {
  searchParams: Promise<{
    search?: string,
    favourites?: string
  }>
}

export default function Home({ searchParams }: DashboardPageProps) {
  const { organization } = useOrganization();
  const searchparams = use(searchParams);

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {!organization ? <EmptyOrg /> : (
        <BoardList orgId={organization.id} query={searchparams} />
      )}
    </div>
  );
}
