"use client";

import React from "react";
import SidebarItem from "./SidebarItem";

import {
  Sticker,
  UserRoundSearch,
  GanttChart,
  MessageCircleHeart,
  BellPlus,
  BookImage,
  SquareUserRound,
  UserCog,
  UserRound,
  AlertOctagon,
  LucideIcon,
} from "lucide-react";

interface ISidebarItem {
  name: string;
  path: string;
  icon: LucideIcon;
  items?: ISubItem[];
}

interface ISubItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const items: ISidebarItem[] = [
  {
    name: "Feeds",
    path: "/feeds",
    icon: Sticker,
  },
  {
    name: "Search",
    path: "/search",
    icon: UserRoundSearch,
  },
  {
    name: "Explore",
    path: "/explore",
    icon: GanttChart,
  },
  {
    name: "Messages",
    path: "/message",
    icon: MessageCircleHeart,
  },
  {
    name: "Notification",
    path: "/notification",
    icon: BellPlus,
  },
  {
    name: "Post",
    path: "/post",
    icon: BookImage,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: SquareUserRound,
  },
  {
    name: "Setting",
    path: "/setting",
    icon: UserCog,
    items: [
      {
        name: "Account",
        path: "/setting/account",
        icon: UserRound,
      },
      {
        name: "Privacy",
        path: "/setting/privacy",
        icon: AlertOctagon,
      },
    ],
  },
];

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-[17%] shadow-lg z-10 p-4 bg-purple-700">
      <div className="flex flex-col space-y-12 w-full">
        <img className="h-10 w-fit" src="/vercel.svg" alt="logo"></img>

        <div className="flex flex-col space-y-2">
          {items.map((item) => (
            <SidebarItem key={item.path} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
