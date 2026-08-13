import { PanelLeftCloseIcon } from "lucide-react";
import { iconStyling } from "../styling";

interface Props {
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CollapseButton = ({ setCollapse }: Props) => {
  return (
    <button
      type="button"
      onClick={() => setCollapse((prev) => !prev)}
      className={iconStyling}
    >
      <PanelLeftCloseIcon size={17} />
    </button>
  );
};
