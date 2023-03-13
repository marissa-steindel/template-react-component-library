import React,{FC} from "react";
import styled from 'styled-components';
import { CardProps } from "./Card.types";

// define the styles of the HTML tags of the component
const StyledCardDiv = styled.div<CardProps>`
  border: 3px solid black;
  width: ${props => props.cardWidth};
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
`;

const StyledImage = styled.img<CardProps>`
  width: 100%;
`;

const StyledCardHeading = styled.h4<CardProps>`
  text-align: center;
  font-weight: bold;
`;

const StyledCardText = styled.p<CardProps>`
  text-align: center;
`;


const Card: FC<CardProps> = (props: CardProps) => {

  // return(
  //   <div className="card" style={{border: "3px solid black", width: "300px"}}>
  //     <img src={props.src} alt={props.alt} style={{width: "100%"}}/>
  //     <div className="container">
  //       <h4 style={{textAlign: "center"}}><b>{props.title}</b></h4>
  //       <p style={{textAlign: "center"}}>{props.text}</p>
  //     </div>
  //   </div>
  // );

  return(
    <StyledCardDiv {...props}>
      <StyledImage {...props}/>
      <div>
        <StyledCardHeading {...props}>{props.title}</StyledCardHeading>
        <StyledCardText {...props}>{props.text}</StyledCardText>
      </div>
    </StyledCardDiv>
  );

};

export default Card;