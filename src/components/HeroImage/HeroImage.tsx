import React from "react";
import { HeroImageProps } from "./HeroImage.types";

const HeroImage = (props: HeroImageProps) => {

  return(
    <div className="hero-image">
      <div className="hero-text">
        <img src={props.url} alt={props.alt} style={{width: "100%"}}/>
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
    </div>
  </div>
  );
};

export default HeroImage;