import React from "react";
// import './Img.css';

export interface ImgProps {
  srcString: string;
  altText: string;
}

const Img = (props: ImgProps) => {
  return <img src={props.srcString} alt={props.altText}></img>;
};

export default Img;