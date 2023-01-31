import React from "react";
// import './Text.css';

export interface TextProps {
  content: string;
}

const Text = (props: TextProps) => {
  return <p>{props.content}</p>;
};

export default Text;