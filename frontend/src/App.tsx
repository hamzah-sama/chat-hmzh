import HomeLayout from "./components/home-layout";
import { AuthCard } from "./components/auth-card";
import { useEffect } from "react";
import { test } from "./test";
import { useDispatch } from "react-redux";
import { setUserData } from "./redux/userSlice";
import { useSelector } from "react-redux";
import type { RootState } from "./redux/store";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getUser = async () => {
      const data = await test();
      dispatch(setUserData(data));
    };

    getUser();
  }, []);

  const { userData } = useSelector((state: RootState) => state.user);

  return (
    <HomeLayout>
      {userData ? (
        <div>
          <h1>{userData.email}</h1>
        </div>
      ) : (
        <AuthCard />
      )}
    </HomeLayout>
  );
};

export default App;
