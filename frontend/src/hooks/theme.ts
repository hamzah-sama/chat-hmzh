import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { useEffect } from "react";

export const Theme = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return null;
};
