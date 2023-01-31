import React from "react";
// import './Label.css';

export interface LabelProps {
  content: string;
}

const Label = (props: LabelProps) => {
  return <label>{props.content}</label>;
};

export default Label;