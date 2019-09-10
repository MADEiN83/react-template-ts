import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Router from "./core/routing";

import "./assets/css/index.scss";

ReactDOM.render(<Router />, document.getElementById("root"));

serviceWorker.unregister();
