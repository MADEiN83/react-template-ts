import React from "react";
import { Link } from "react-router-dom";

import withTemplate from "../../components/withTemplate";
import { IDefaultProps } from "../../core/interface";
import { ROUTE_PATHES } from "../../core/routing/routes.config";

interface IProps extends IDefaultProps {}

const Home: React.FC<IProps> = (props: IProps) => {
  return (
    <>
      Home page goes here
      <Link to={ROUTE_PATHES.TEST}>Go to other page</Link>
    </>
  );
};

export default withTemplate(Home);
