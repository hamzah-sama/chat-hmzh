import { ChatContainer } from "../chat-container";
import { Artifact } from "../artifact";
import { Sidebar } from "../sidebar";

export const ChatApp = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />

      <main className="flex min-w-0 flex-1">
        <ChatContainer />
        <Artifact />
      </main>
    </div>
  );
};
