import { RouteProps } from "react-router-dom";

import Home from "../../scenes/Home";

export const ROUTE_PATHES = {
  HOME: "/"
};

const routes: RouteProps[] = [
  { path: ROUTE_PATHES.HOME, exact: true, component: Home }
];

export default routes;
