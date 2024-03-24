import { cn } from "@/lib/utils";
import { SidebarItem } from "./sidebar-item";
import Image from "next/image";

type Props = {
    className?: string;
};

export const Sidebar = ({ className }: Props) => {
    return (
        <div className={cn(
            "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
            className,
        )}>
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <h1 className="text-2xl font-extrabold text-orange-500 tracking-wide">
            LayseirasDev
              </h1>
            </div>
            <div className="flex flex-col gap-y-2 flex-1">
            <SidebarItem 
                label="Sobre mim" 
                href="/pt-br"
                iconSrc="/user.svg"
            />
            <SidebarItem 
                label="Projetos" 
                href="/leaderboard"
                iconSrc="/project.svg"
            />
            <SidebarItem 
                label="Ferramentas" 
                href="/quests"
                iconSrc="/skills.svg"
            />
            <SidebarItem 
                label="Extras" 
                href="/shop"
                iconSrc="/star.svg"
            />
            </div>
        </div>
    );
};