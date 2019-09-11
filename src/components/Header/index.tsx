import React from "react";
import { IDefaultProps } from "../../core/interface";

import "./style.scss";
import { BREAKPOINT_LABELS } from "../../utils";
import MobileMenu from "./components/MobileMenu";
import DesktopMenu from "./components/DesktopMenu";

interface IProps extends IDefaultProps {}

const Header: React.FC<IProps> = (props: IProps) => {
  let Menu = DesktopMenu;

  if (props.screen.breakpoint === BREAKPOINT_LABELS.XS) {
    Menu = MobileMenu;
  }

  return (
    <>
      <header>HEADER HERE</header>
      <Menu />
    </>
  );
};

export default Header;
