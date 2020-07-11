import React from "react";
import { TextField } from "@material-ui/core";

type Props = {
  label: string;
  defaultValue?: string;
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
    onBlur={e => {
      const newValue = e.target as HTMLInputElement;
      props.onChange(newValue.value);
    }}
    defaultValue={props.defaultValue}
  />
);
