import React from "react";
import Label from "../Label";
import { RadioButtonProps } from "./RadioButton.types";


const RadioButton = (props: RadioButtonProps) => {

  return(
    <>
      <input type="radio" id={props.inputID} name={props.name} value={props.value}></input>
      <Label inputID={props.inputID} text={props.value}/>
    </>
  );
};

export default RadioButton;