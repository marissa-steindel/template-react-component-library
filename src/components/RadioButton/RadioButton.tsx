import React from "react";
import Label from "../Label";

export interface RadioButtonProps {
  inputID: string;
  name: string;
  value: string;
}

const RadioButton = (props: RadioButtonProps) => {

  return(
    <>
      <input type="radio" id={props.inputID} name={props.name} value={props.value}></input>
      <Label inputID={props.inputID} text={props.value}/>
    </>
  );
};

export default RadioButton;