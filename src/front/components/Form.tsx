import React, { useState } from "react";
import { TextField } from "@material-ui/core";

type Props = {
  label: string;
  onChange: (value: string) => void;
};

export default (props: Props) => (
  <TextField
    label={props.label}
    variant="outlined"
    style={{ width: "100%", height: "100%" }}
    multiline
    onChange={e => {
      const newValue = e.target as HTMLInputElement;
      props.onChange(newValue.value);
    }}
  />
);
