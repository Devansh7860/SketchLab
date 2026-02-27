"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
  useOrganizationList,
} from "@clerk/nextjs";
import { Building2, Hash, LayoutDashboard, Menu, Plus, Star } from "lucide-react";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

import { InviteButton } from "./invite-button";
import { SearchInput } from "./search-input";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export const Navbar = () => {
  const { organization, membership } = useOrganization();
  const { userMemberships, setActive } = useOrganizationList({
    userMemberships: { infinite: true },
  });
  const searchParams = useSearchParams();
  const favourites = searchParams.get("favourites");

  return (
    <div className="flex items-center gap-x-4 p-4 border-b bg-white">
      {/* Mobile menu trigger */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon-sm">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[280px] p-0 flex flex-col">
            <SheetTitle className="sr-only">Navigation</SheetTitle>

            {/* Header with current org */}
            <div className="p-4 pb-3">
              <div className="flex items-center gap-x-2">
                {organization?.imageUrl && (
                  <Image
                    src={organization.imageUrl}
                    alt={organization.name}
                    width={28}
                    height={28}
                    className="rounded-md"
                  />
                )}
                <span className="font-semibold text-sm truncate">
                  {organization?.name ?? "Select Organization"}
                </span>
              </div>
            </div>

            <Separator />

            {/* Navigation links */}
            <div className="px-2 py-3 space-y-0.5">
              <Link
                href="/dashboard"
                className={cn(
                  "flex items-center gap-x-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-neutral-100 hover:text-foreground transition-colors",
                  !favourites && "bg-violet-50 text-violet-700 font-medium",
                )}
              >
                <LayoutDashboard className="size-4" />
                Team boards
              </Link>
              <Link
                href={{ pathname: "/dashboard", query: { favourites: true } }}
                className={cn(
                  "flex items-center gap-x-2 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-neutral-100 hover:text-foreground transition-colors",
                  favourites && "bg-violet-50 text-violet-700 font-medium",
                )}
              >
                <Star className="size-4" />
                Favourite boards
              </Link>
            </div>

            <Separator />

            {/* Discord-style org list */}
            <div className="px-3 py-3 flex-1 overflow-y-auto">
              <p className="text-[11px] font-semibold uppercase text-muted-foreground tracking-wider px-1 mb-2">
                Organizations
              </p>
              <div className="space-y-0.5">
                {userMemberships.data?.map((mem) => {
                  const isActive = organization?.id === mem.organization.id;
                  return (
                    <button
                      key={mem.organization.id}
                      onClick={() => setActive?.({ organization: mem.organization.id })}
                      className={cn(
                        "flex items-center gap-x-2.5 w-full px-2 py-1.5 rounded-md text-sm transition-colors text-left",
                        isActive
                          ? "bg-violet-50 text-violet-700 font-medium"
                          : "text-muted-foreground hover:bg-neutral-100 hover:text-foreground",
                      )}
                    >
                      <Image
                        src={mem.organization.imageUrl}
                        alt={mem.organization.name}
                        width={24}
                        height={24}
                        className="rounded-md shrink-0"
                      />
                      <span className="truncate">{mem.organization.name}</span>
                      {isActive && (
                        <div className="ml-auto size-1.5 rounded-full bg-violet-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Logo — visible on mobile, hidden on desktop (shown in OrgSidebar) */}
      <Link href="/dashboard" className="lg:hidden flex items-center gap-x-2 shrink-0">
        <Image src="/logo.svg" alt="SketchLab" height={28} width={28} />
        <span className={cn("font-semibold text-lg hidden sm:inline", font.className)}>
          SketchLab
        </span>
      </Link>

      {/* Search — always visible */}
      <div className="flex-1">
        <SearchInput />
      </div>

      {!!organization && membership?.role === "org:admin" && <InviteButton />}
      <UserButton />
    </div>
  );
};