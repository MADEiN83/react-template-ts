import React from "react";
import { Link } from "react-router-dom";

import withTemplate from "../../components/withTemplate";
import { IDefaultProps } from "../../core/interface";
import { ROUTE_PATHES } from "../../core/routing/routes.config";
import { BREAKPOINT_LABELS } from "../../utils";
import PersonService from "../../services/person";

interface IProps extends IDefaultProps {}

const Home: React.FC<IProps> = (props: IProps) => {
  PersonService.fetchPersonByLicence("06060606").then(r =>
    console.log("là", r)
  );
  return (
    <>
      Home page goes here
      {props.screen.breakpoint === BREAKPOINT_LABELS.LG && (
        <Link to={ROUTE_PATHES.TEST}>Go to other page</Link>
      )}
    </>
  );
};

export default withTemplate(Home, { withBreakpoint: false });
