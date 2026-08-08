import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../utils/firebase";
import api from "../utils/axios";

const App = () => {
  const handleLogin = async (token) => {
    try {
      const { data } = await api.post("/auth/login", { token });
    } catch (error) {
      console.log(error);
    }
  };
  const googleLogin = async () => {
    try {
      const data = await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.log(error);
    }
    const token = await data.user.getIdToken();
    await handleLogin(token);
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <button
        className="w-50 h-24 bg-white cursor-pointer"
        onClick={googleLogin}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default App;
