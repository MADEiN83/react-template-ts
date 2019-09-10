import React from "react";
import { IDefaultProps } from "../../core/interface";

import "./style.scss";
import Debug from "./components/Debug";

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
