import { FcGoogle } from "react-icons/fc";
import api from "../../utils/axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../../utils/firebase";

export const GoogleButton = () => {
  const handleLogin = async (token: string) => {
    try {
      await api.post("/auth/login", { token });
    } catch {
      console.error("Handle login failed");
    }
  };
  const googleLogin = async () => {
    try {
      const { user } = await signInWithPopup(auth, googleProvider);
      const token = await user.getIdToken();
      await handleLogin(token);
    } catch {
      console.error("google login failed");
    }
  };
  return (
    <button
      className="w-full flex items-center justify-center gap-3 py-2.5 rounded text-sm font-medium text-black  bg-white hover:bg-gray-200 transition-all cursor-pointer"
      onClick={googleLogin}
    >
      <FcGoogle size={15} />
      Continue with Google
    </button>
  );
};
