import React from "react";
import styled from "styled-components";
import { atom, useSetRecoilState } from "recoil";
import Form from "../components/Form";
import { Box } from "@material-ui/core";

const pekolangState = atom({
  key: "PekolangState",
  default: {
    code: "",
  },
});

export default () => {
  const setState = useSetRecoilState(pekolangState);

  return (
    <Box>
      <Form
        onChange={value => {
          setState({
            code: value,
          });
        }}
        label="コード"
      />
    </Box>
  );
};
