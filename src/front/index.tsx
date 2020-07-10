import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import Content from "./containers/Content";
import { Container } from "@material-ui/core";

const app = (
  <Container>
    <RecoilRoot>
      <Content />
    </RecoilRoot>
  </Container>
);

render(app, document.getElementById("app"));
