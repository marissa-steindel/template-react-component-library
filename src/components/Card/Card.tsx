import React from "react";

export interface CardProps {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const Card = (props: CardProps) => {
  return(
    <div className="card" style={{border: "3px solid black", width: "300px"}}>
      <img src={props.src} alt={props.alt} style={{width: "100%"}}/>
      <div className="container">
        <h4 style={{textAlign: "center"}}><b>{props.title}</b></h4>
        <p style={{textAlign: "center"}}>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;