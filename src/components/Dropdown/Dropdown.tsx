import React, {FC} from "react";
import styled from 'styled-components';
import { DropdownProps } from "./Dropdown.types";
import Label from "../Label/Label";

// define the styles of the HTML tags of the component
const StyledSelect = styled.select<DropdownProps>`
  background-color: ${props => props.disabled ? "lightgrey": props.backgroundColor};
  color: ${props => props.disabled ? "#747474": props.fontColor? props.fontColor : "black"};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  padding: 2px 10px;
  border-radius: .5rem;
  display: block;
  cursor: ${props => props.disabled ? "not-allowed" : "default"};
`;

const StyledOption = styled.option<DropdownProps>`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  padding: 2px 10px;
  border-radius: .5rem;
`;

// <Label for={props.selectID} text={props.labelText}/>
// <select name={props.name} id={props.selectID}>
//    {props.optionValues.map((option)=>
//      <option value={option}>{option}</option>
//    )}
// </select>

const Dropdown: FC<DropdownProps> = ({ name, selectID, labelText, optionValues, ...props}) => {
    return(
    <>
      <Label inputID={selectID} text={labelText}/>
      <StyledSelect name={name} selectID={selectID} labelText={labelText} optionValues={optionValues} {...props}>
        {optionValues.map((option,i)=>
            <StyledOption name={name} selectID={selectID} labelText={labelText} optionValues={optionValues} key={i} {...props}>{option}</StyledOption>
          )}
      </StyledSelect>
    </>
  );
};

export default Dropdown;