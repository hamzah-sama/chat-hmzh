import { useEffect, useState } from "react";
import { SidebarContent } from "./sidebar-content";
import { SidebarHeader } from "./sidebar-header";
import { SidebarFooter } from "./sidebar-footer";
import { useIsMobile } from "../../hooks/use-is-mobile";

export const Sidebar = () => {
  const [collapse, setCollapse] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) {
      setCollapse(true);
    }
  }, [isMobile]);

  return (
    <aside
      className={`
        relative z-50
        h-screen shrink-0
        border-r border-white/6
        bg-[#0d0f14]
        transition-[width] duration-300 ease-in-out
        ${collapse ? "w-12" : "w-65"}
      `}
    >
      <div className="flex h-full min-h-0 flex-col overflow-hidden">
        {/* Header */}
        <SidebarHeader collapse={collapse} setCollapse={setCollapse} />

        {/* Content */}
        <SidebarContent collapse={collapse} />

        {/* Footer */}
        <SidebarFooter collapse={collapse} />
      </div>
    </aside>
  );
};
