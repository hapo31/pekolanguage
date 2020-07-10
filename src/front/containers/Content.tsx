import React from "react";
import { atom, useSetRecoilState } from "recoil";
import Form from "../components/Form";

const pekolangState = atom({
  key: "PekolangState",
  default: {
    code: "",
  },
});

export default () => {
  const setState = useSetRecoilState(pekolangState);

  return (
    <Form
      onChange={value => {
        setState({
          code: value,
        });
      }}
      label="コード"
    />
  );
};
