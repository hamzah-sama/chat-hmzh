import { useState } from "react";
import { SearchModal } from "../../search-modal";
import { iconStyling } from "../styling";
import { SearchIcon } from "lucide-react";

export const SearchButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className={`
        ${iconStyling}
        shrink-0
        transition-all duration-300
        "scale-100 opacity-100"
        `}
        aria-label="Search conversations"
        onClick={() => setOpen(true)}
      >
        <SearchIcon size={17} />
      </button>
      <SearchModal open={open} onOpenChange={setOpen} />
    </>
  );
};
