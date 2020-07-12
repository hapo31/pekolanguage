import React from "react";
import { render } from "react-dom";

import "regenerator-runtime/runtime";
import AppContainer from "./containers/App/AppContainer";

render(<AppContainer />, document.getElementById("app"));
