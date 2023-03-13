import React,{FC} from "react";
import styled from 'styled-components';
// import { HeroImageProps } from "./HeroImage.types";
// import { ImageProps } from "../Image/Image.types";
// import StyledImage from "../Image/Image";

export interface HeroImageProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

// define the styles of the HTML tags of the component
const StyledHeroImageDiv = styled.div`
  width: 100%;
  position: relative;
  text-align: center;
`;

const StyledHeroTextDiv = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-shadow: -1px 0 10px white, 0 1px 10px white, 1px 0 10px white, 0 -1px 10px white;
`;

const StyledTitle = styled.h1`
  font-size:50px;
`;

const StyledSubtitle = styled.h3`
  font-size:40px;
  padding:0px;
  margin:0px;
`;

const StyledHeroImage = styled.img`
  width: 100%;
  height:300px;
`;

const HeroImage: FC<HeroImageProps> = ({src,alt,title,subtitle,...props}) => {

  return(
      <StyledHeroImageDiv>
        <StyledHeroImage src={src} alt={alt} {...props}/>
        <StyledHeroTextDiv>
          <StyledTitle>{title}</StyledTitle>
          <StyledSubtitle>{subtitle}</StyledSubtitle>
        </StyledHeroTextDiv>
    </StyledHeroImageDiv>
  );

  // return(
  //   <div className="hero-image">
  //     <div className="hero-text">
  //       <img src={src} alt={alt} style={{width: "100%"}}/>
  //       <h1>{title}</h1>
  //       <h3>{subtitle}</h3>
  //   </div>
  // </div>
  // );


};

export default HeroImage;