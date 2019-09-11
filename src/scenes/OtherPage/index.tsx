import React from "react";
import { Link } from "react-router-dom";

import withTemplate from "../../components/withTemplate";
import { ROUTE_PATHES } from "../../core/routing/routes.config";
import { IDefaultProps } from "../../core/interface";

interface IProps extends IDefaultProps {}

const OtherPage: React.FC<IProps> = (props: IProps) => {
  console.log("other page update");
  return (
    <div>
      OtherPage
      <Link to={ROUTE_PATHES.HOME}>Go to home page</Link>
    </div>
  );
};

export default withTemplate(OtherPage);
