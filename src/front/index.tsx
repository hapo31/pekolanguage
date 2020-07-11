import React from "react";
import { render } from "react-dom";
import { RecoilRoot } from "recoil";
import { Container } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";

import Content from "./containers/Content";
import Header from "./containers/Header";
import Footer from "./containers/Footer";

import "regenerator-runtime/runtime";

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#61ddea",
//     },
//     secondary: {
//       light: "",
//       main: "",
//     },
//   },
// });

const app = (
  <Container>
    <RecoilRoot>
      <Header />
      <Content />
      <Footer />
    </RecoilRoot>
  </Container>
);

render(app, document.getElementById("app"));
