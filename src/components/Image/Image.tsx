import React from "react";

export interface ImageProps {
  src: string;
  alt: string;
}

const Image = (props: ImageProps) => {

  return <img src={props.src} alt={props.alt}/>;

};

export default Image;