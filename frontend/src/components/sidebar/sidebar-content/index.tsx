import { CollapseContent } from "./collapse-content";
import { Contentexpand } from "./content-expand";

interface Props {
  collapse: boolean;
}

export const SidebarContent = ({ collapse }: Props) => {
  return (
    <div className="min-h-0 flex-1 overflow-hidden">
      {collapse ? <CollapseContent /> : <Contentexpand />}
    </div>
  );
};
