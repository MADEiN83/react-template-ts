import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import Home from "./scenes/Home";
import "./assets/css/index.scss";

ReactDOM.render(<Home />, document.getElementById("root"));

serviceWorker.unregister();
