import HomeLayout from "./components/home-layout";
import { AuthCard } from "./components/auth/auth-card";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { Sidebar } from "./components/sidebar";
import { ChatContainer } from "./components/chat-container";
import { Artifact } from "./components/artifact";

const App = () => {
  const { userData } = useSelector((state: RootState) => state.user);

  return (
    <HomeLayout>
      {userData ? (
        <div className="flex h-full">
          <Sidebar />
          <ChatContainer />
          <Artifact />
        </div>
      ) : (
        <AuthCard />
      )}
    </HomeLayout>
  );
};

export default App;
