import React from "react";
// import './Label.css';

export interface LabelProps {
  label: string;
}

const Label = (props: LabelProps) => {
  return <label>{props.label}</label>;
};

export default Label;