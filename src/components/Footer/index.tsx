import React from "react";
import { IDefaultProps } from "../../core/interface";

import "./index.scss";

interface IProps extends IDefaultProps {}

const Footer: React.FC<IProps> = (props: IProps) => {
  return <header>FOOTER</header>;
};

export default Footer;
