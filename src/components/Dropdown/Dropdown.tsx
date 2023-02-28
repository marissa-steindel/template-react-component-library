import React from "react";
import Label from "../Label";

export interface DropdownProps {
  name: string;
  selectID: string;
  labelText: string;
  optionValues: string[];
}

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