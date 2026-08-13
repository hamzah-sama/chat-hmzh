import HomeLayout from "./components/home-layout";
import { AuthCard } from "./components/auth/auth-card";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./redux/store";
import { ChatApp } from "./components/chat-app";
import { useEffect, useState } from "react";
import api from "../utils/axios";
import { setUserData } from "./redux/user-slice";
import { FaSpinner } from "react-icons/fa";

const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await api.get(`/getUserdata`);
        dispatch(setUserData(data));
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    getUserData();
  }, []);
  const { userData } = useSelector((state: RootState) => state.user);

  if (loading) {
    return (
      <HomeLayout>
        <div className="flex justify-center items-center h-screen">
          <FaSpinner />
        </div>
      </HomeLayout>
    );
  }

  return <HomeLayout>{userData ? <ChatApp /> : <AuthCard />}</HomeLayout>;
};

export default App;
