import { HeaderCollapse } from "./header-collapse";
import { HeaderExpand } from "./header-expand";

interface Props {
  collapse: boolean;
  setCollapse: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarHeader = ({ collapse, setCollapse }: Props) => {
  return collapse ? (
    <HeaderCollapse setCollapse={setCollapse} />
  ) : (
    <HeaderExpand setCollapse={setCollapse} />
  );
};
