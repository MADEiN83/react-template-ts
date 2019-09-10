import React from "react";
import withTemplate from "../../components/withTemplate";
import { IDefaultProps } from "../../core/interface";
import { Link } from "react-router-dom";
import { ROUTE_PATHES } from "../../core/routing/routes.config";

interface IProps extends IDefaultProps {}

const Home: React.FC<IProps> = (props: IProps) => {
  console.log("Home props", props);
  return (
    <div>
      Home page goes here
      <Link to={ROUTE_PATHES.TEST}>Go to other page</Link>
    </div>
  );
};

export default withTemplate(Home);
