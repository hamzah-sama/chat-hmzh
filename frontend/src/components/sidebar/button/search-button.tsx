import { iconStyling } from "../styling";
import { SearchIcon } from "lucide-react";

export const SearchButton = () => {
  return (
    <button
      type="button"
      className={`
          ${iconStyling}
          shrink-0
          transition-all duration-300
          "scale-100 opacity-100"
        `}
      aria-label="Search conversations"
    >
      <SearchIcon size={17} />
    </button>
  );
};
