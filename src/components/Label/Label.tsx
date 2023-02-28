import React from "react";
// import './Label.css';

export interface LabelProps {
  text: string;
  inputID?: string;
}

const Label = (props: LabelProps) => {
  return(<label htmlFor={props.inputID}>{props.text}</label>);
};

export default Label;