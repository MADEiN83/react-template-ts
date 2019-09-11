import React from "react";
import { IDefaultProps } from "../../core/interface";

import Debug from "./components/Debug";
import "./style.scss";

interface IProps extends IDefaultProps {}

const Footer: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <footer>FOOTER</footer>
      <Debug />
    </>
  );
};

export default Footer;
