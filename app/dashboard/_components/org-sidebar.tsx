"use client";

import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const OrgSidebar = () => {
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5 border-r border-neutral-100 bg-neutral-50/50">
      <Link href="/dashboard">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="SketchLab Logo" height={36} width={36} />
          <span className={cn("font-semibold text-xl", font.className)}>
            SketchLab
          </span>
        </div>
      </Link>

      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            },
            organizationSwitcherTrigger: {
              padding: "6px",
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #E5E7EB",
              justifyContent: "space-between",
              backgroundColor: "white",
            },
            organizationSwitcherPopoverActionButton__createOrganization: {
              display: "none",
            },
          },
        }}
        afterLeaveOrganizationUrl="/dashboard"
        afterSelectOrganizationUrl="/dashboard"
      />

      <div className="space-y-0.5 w-full">
        <Link
          href="/dashboard"
          className={cn(
            "flex items-center gap-x-2 px-2 py-2 rounded-lg text-sm transition-colors",
            !favourites
              ? "bg-violet-50 text-violet-700 font-medium"
              : "text-muted-foreground hover:bg-neutral-100 hover:text-foreground",
          )}
        >
          <LayoutDashboard className="size-4" />
          Team boards
        </Link>
        <Link
          href={{ pathname: "/dashboard", query: { favourites: true } }}
          className={cn(
            "flex items-center gap-x-2 px-2 py-2 rounded-lg text-sm transition-colors",
            favourites
              ? "bg-violet-50 text-violet-700 font-medium"
              : "text-muted-foreground hover:bg-neutral-100 hover:text-foreground",
          )}
        >
          <Star className="size-4" />
          Favourite boards
        </Link>
      </div>
    </div>
  );
};