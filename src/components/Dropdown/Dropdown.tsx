import React from "react";
// import Label from "../Label";
import { DropdownProps } from "./Dropdown.types";

const Dropdown = (props: DropdownProps) => {
  return(
    <>
      {/* <Label for={props.selectID} text={props.labelText}/> */}
      <select name={props.name} id={props.selectID}>
      {props.optionValues.map((option)=>
        <option value={option}>{option}</option>
      )}
      </select>
    </>
  );
};

export default Dropdown;