import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Content from "./containers/Content";

const app = (
  <RecoilRoot>
    <Content />
  </RecoilRoot>
);

render(app, document.getElementById("app"));
