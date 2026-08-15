import { useState } from "react";
import { SearchModal } from "../../search-modal";
import { SearchIcon } from "lucide-react";
import { Hint } from "../../hint";
import { Button } from "../../ui/button";

export const SearchButton = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Hint label="Search conversations">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen(true)}
        >
          <SearchIcon size={17} />
        </Button>
      </Hint>
      <SearchModal open={open} onOpenChange={setOpen} />
    </>
  );
};
