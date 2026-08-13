import { useSelector } from "react-redux";

import type { RootState } from "../../../redux/store";
import { FooterCollapse } from "./footer-collapse";
import { FooterExpand } from "./footer-expand";

interface Props {
  collapse: boolean;
}

export const SidebarFooter = ({ collapse }: Props) => {
  const { userData } = useSelector((state: RootState) => state.user);

  return collapse ? (
    <FooterCollapse avatar={userData?.avatar} />
  ) : (
    <FooterExpand avatar={userData?.avatar} name={userData?.name} />
  );
};
