import { RouteProps } from "react-router-dom";

import Home from "../../scenes/Home";
import OtherPage from "../../scenes/OtherPage";

export const ROUTE_PATHES = {
  HOME: "/",
  TEST: "/test"
};

const routes: RouteProps[] = [
  { path: ROUTE_PATHES.HOME, exact: true, component: Home },
  { path: ROUTE_PATHES.TEST, exact: true, component: OtherPage }
];

export default routes;
