import React from "react";
import { IDefaultProps } from "../../core/interface";

import "./style.scss";

interface IProps extends IDefaultProps {}

const Footer: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      <footer>FOOTER</footer>
      <span className="visible-xs">XS</span>
      <span className="visible-sm">SM</span>
      <span className="visible-md">MD</span>
      <span className="visible-lg">LG</span>
      <span className="visible-xl">XL</span>
      <span className="hidden-xs">hidden XS</span>&nbsp;|&nbsp;
      <span className="hidden-sm">hidden SM</span>&nbsp;|&nbsp;
      <span className="hidden-md">hidden MD</span>&nbsp;|&nbsp;
      <span className="hidden-lg">hidden LG</span>&nbsp;|&nbsp;
      <span className="hidden-xl">hidden XL</span>
    </>
  );
};

export default Footer;
