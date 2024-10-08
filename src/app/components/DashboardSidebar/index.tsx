import React from "react";
import {
  LucideIcon,
  Store,
  Bot,
  MessageSquare,
  Folder,
  SquareUserRound,
  PlaneLanding,
  TextCursorInput,
  NotebookText,
  LayoutDashboard,
} from "lucide-react";
import Link from "next/link";

interface SidebarLinkProps {
  link: string;
  label: string;
  icon?: LucideIcon;
}

const SidebarLink = ({ link, label, icon: Icon }: SidebarLinkProps) => {
  return (
    <li>
      <Link href={link}>
        {" "}
        {Icon ? <Icon className="w-4 h-4" /> : <></>} {label}
      </Link>
    </li>
  );
};

const DashboardSidebar = () => {
  return (
    <div className="fixed flex flex-col items-center transition-all duration-200 h-full overflow-hidden w-0 md:w-52 bg-base-300">
      <h1 className="text-4xl font-extrabold text-primary">SWIFT</h1>
      <h1 className="text-4xl font-extrabold text-primary">LAUNCH</h1>
      <ul className="menu rounded-box w-full">
        <SidebarLink
          link={"/dashboard"}
          label={"Dashboard"}
          icon={LayoutDashboard}
        />
        <li className="disabled">
          <a>Apps</a>
        </li>
        <ul className="menu p-0">
          <li>
            <details open>
              <summary>
                <Store size={12} /> Store
              </summary>
              <ul>
                <SidebarLink
                  link={"/dashboard/inventory"}
                  label={"Inventory"}
                />
              </ul>
            </details>
          </li>
        </ul>

        <SidebarLink link={"/dashboard"} label={"Chat"} icon={MessageSquare} />
        <SidebarLink link={"/dashboard"} label={"AI Bot"} icon={Bot} />
        <SidebarLink link={"/dashboard"} label={"Files"} icon={Folder} />
        <SidebarLink
          link={"/dashboard"}
          label={"Portfolio"}
          icon={SquareUserRound}
        />
        <SidebarLink
          link={"/dashboard"}
          label={"Documentation"}
          icon={NotebookText}
        />
        <li className="disabled">
          <a>Pages</a>
        </li>
        <SidebarLink
          link={"/dashboard"}
          label={"Landing Page"}
          icon={PlaneLanding}
        />
        <SidebarLink
          link={"/dashboard"}
          label={"Forms"}
          icon={TextCursorInput}
        />
        <li className="disabled">
          <a>UI Showcase</a>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidebar;
