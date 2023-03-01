import React from "react";
import { ImageProps } from "./Image.types";


const Image = (props: ImageProps) => {

  return <img src={props.src} alt={props.alt}/>;

};

export default Image;