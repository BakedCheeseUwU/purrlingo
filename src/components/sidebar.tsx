"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const { isSignedIn, user } = useUser();
  return (
    <div
      className={cn(
        "lg:w-[256px] h-full lg:fixed flex left-0 top-0 px-4 border-r-2 flex-col",
        className,
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" alt="logo" height={40} width={40} />
          <h1 className="font-extrabold text-2xl tracking-wide text-green-600">
            WeiLingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1 ">
        <SidebarItem label="Learn" imgSrc="/learn.svg" href="/learn" />
        <SidebarItem
          label="Leaderboard"
          imgSrc="/leaderboard.svg"
          href="/leaderboard"
        />
        <SidebarItem label="Quests" imgSrc="/quests.svg" href="/quests" />
        <SidebarItem label="Shop" imgSrc="/shop.svg" href="/shop" />
      </div>
      <div className="p-4 flex items-center gap-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
          {isSignedIn && <div>{user.fullName}</div>}
        </ClerkLoaded>
      </div>
    </div>
  );
};
