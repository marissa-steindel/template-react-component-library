import React, {FC} from "react";
import styled from 'styled-components';
import { DropdownProps } from "./Dropdown.types";
import Label from "../Label/Label";
import { LabelProps } from "../Label/Label.types";

// define the styles of the HTML tags of the component
const StyledSelect = styled.select`
  background-color: ${props => props.disabled ? "lightgrey":"#8080e4"};
  color: ${props => props.disabled ? "#747474":"#6bedb5"};
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  padding: 2px 10px;
  border-radius: .5rem;
  display: block;
`;

const StyledOption = styled.option`
  background-color: ${props => props.disabled ? "lightgrey":"#8080e4"};
  color: ${props => props.disabled ? "#747474":"#6bedb5"};
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

// const Dropdown: FC<DropdownProps> = (props: DropdownProps, labelProps: LabelProps) => {
const Dropdown: FC<DropdownProps> = ({ name, selectID, labelText, optionValues, disabled, ...props}) => {
    return(
    <>
      <Label inputID={selectID} text={labelText}/>
      <StyledSelect>
        {optionValues.map((option)=>
            <StyledOption>{option}</StyledOption>
          )}
      </StyledSelect>
    </>
  );
};

export default Dropdown;