import React from "react";
import { BrowserRouter, Route, RouteProps } from "react-router-dom";

import routes from "./routes.config";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      {routes.map((routeProps: RouteProps) => (
        <Route {...routeProps} />
      ))}
    </BrowserRouter>
  );
};

export default Router;
