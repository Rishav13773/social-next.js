"use client";

import React, { useMemo, useState } from "react";

import { ChevronRight, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import SubItem from "./SubItem";

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

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const { name, path, icon: Icon, items } = item;
  const [expanded, setExpanded] = useState(false);
  const router = useRouter();
  const pathName = usePathname();

  const onClick = () => {
    if (items && items.length > 0) {
      return setExpanded(!expanded);
    }

    router.push(path);
  };

  const isActive = useMemo(() => {
    return path === pathName;
  }, [path, pathName]);

  return (
    <>
      <div
        className={`flex pl-10 items-center bg-purple-400 rounded-3xl
     hover:bg-purple-950 hover:underline hover:scale-105 cursor-pointer justify-between 
     ${isActive && "text-sidebar-active bg-purple-950"}`}
        onClick={onClick}
      >
        <div className="flex items-center space-x-7 ">
          <Icon size={30} />

          <p className="text-sm font-semibold">{name}</p>
        </div>

        {items && items.length >= 0 && (
          <ChevronRight
            size={20}
            className={expanded ? "rotate-90 duration-200" : ""}
          />
        )}
         <div>
      </div>
      </div>

        {expanded &&
          items &&
          items.length > 0 && (
            <div className="flex flex-col ml-16 mr-10">
              {items.map((item) => <SubItem key={item.path} item={item}/>)}
            </div>
          )
          }
    </>
  );
};

export default SidebarItem;
