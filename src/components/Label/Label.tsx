import React from "react";
import { LabelProps } from "./Label.types";

const Label = (props: LabelProps) => {
  return(<label htmlFor={props.inputID}>{props.text}</label>);
};

export default Label;