import { PenBoxIcon } from "lucide-react";
import { iconStyling } from "../styling";
import { useNavigate } from "react-router-dom";

export const NewChatIcon = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`${iconStyling}
              shrink-0
              transition-all duration-300`}
      aria-label="New chat"
      onClick={() => navigate("/")}
    >
      <PenBoxIcon size={17} />
    </button>
  );
};
