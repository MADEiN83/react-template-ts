import React from "react";
import { IDefaultProps } from "../../core/interface";

import "./style.scss";

interface IProps extends IDefaultProps {}

const Header: React.FC<IProps> = (props: IProps) => {
  return <header>HEADER</header>;
};

export default Header;
