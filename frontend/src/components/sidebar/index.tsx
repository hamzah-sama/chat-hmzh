import { useState } from "react";
import { SidebarHeader } from "./sidebar-header";
import { NewChatButton } from "./new-chat-button";
import { RecentChat } from "./recent-chat";
import { SidebarFooter } from "./sidebar-footer";

export const Sidebar = () => {
  const [collapse, setCollpase] = useState(false);

  return (
    <div className="fixed inset-y-0 left-0 z-50 h-screen w-65 shrink-0 border-r border-white/6 bg-[#0d0f14] lg:static">
      <div className="flex h-full min-h-0 flex-col">
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
          <div className="sticky top-0 z-10 shrink-0 bg-[#0d0f14]">
            <SidebarHeader setCollpase={setCollpase} />
            <div className="px-4 pt-4">
              <NewChatButton />
            </div>
          </div>
          <RecentChat />
        </div>
        <SidebarFooter />
      </div>
    </div>
  );
};
