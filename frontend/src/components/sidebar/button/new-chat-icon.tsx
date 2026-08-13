import { PenBoxIcon } from "lucide-react";
import { iconStyling } from "../styling";

export const NewChatIcon = () => {
  return (
    <button
      type="button"
      className={`${iconStyling}
              shrink-0
              transition-all duration-300`}
      aria-label="New chat"
    >
      <PenBoxIcon size={17} />
    </button>
  );
};
