import { Sidebar } from "../sidebar";
import { Outlet } from "react-router-dom";

export const ChatApp = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex min-w-0 flex-1">
        <Outlet />
      </main>
    </div>
  );
};
