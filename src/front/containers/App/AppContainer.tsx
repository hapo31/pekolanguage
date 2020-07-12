import React from "react";
import Header from "./Header";
import { Container, makeStyles, createStyles } from "@material-ui/core";
import { RecoilRoot } from "recoil";
import Content from "./MainContant/Content";
import Footer from "./Footer";

const useStyles = makeStyles(() =>
  createStyles({
    rootContainer: {
      marginTop: "-11px",
    },
  })
);

export default () => {
  const classes = useStyles();
  return (
    <RecoilRoot>
      <Container className={classes.rootContainer}>
        <Header />
        <Content />
        <Footer />
      </Container>
    </RecoilRoot>
  );
};
