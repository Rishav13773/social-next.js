
import React, { useMemo, useState } from "react";

import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface ISubItem {
  name: string;
  path: string;
  icon: LucideIcon;
}

const SubItem = ({ item }: { item: ISubItem }) => {
    const { name, path, icon: Icon} = item;
    const [expanded, setExpanded] = useState(false);
    const router = useRouter();
    const pathName = usePathname();
  
    const onClick = () => {

  
      router.push(path);
    };
  
    const isActive = useMemo(() => {
      return path === pathName;
    }, [path, pathName]);

return (
    <>
      <div
         className={`flex pl-3 items-center rounded-3xl
         hover:bg-purple-950 hover:underline hover:scale-110 cursor-pointer justify-between 
         ${isActive && "text-sidebar-active bg-purple-950"}`}
            onClick={onClick}
      >
        <div className="flex items-center space-x-7 ">
          <Icon size={30} />

          <p className="text-sm font-semibold">{name}</p>
        </div>
        </div>
    </>
  );

};

export default SubItem;
