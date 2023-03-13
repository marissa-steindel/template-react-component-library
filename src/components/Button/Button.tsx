import React, {FC} from "react";
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.disabled ? "lightgrey" : props.color };
    color: ${props => props.disabled ? "#747474": props.fontColor};
    border: none;
    border-radius: 2em;
    font-size: 20px;
    padding: 10px 15px;
    /* font-family: Arial, Helvetica, sans-serif; */
    cursor: ${props => props.disabled ? "not-allowed" : "default"};
`;

// instantiate the Button object that takes an argument of type ButtonProps
// (functional component)
// const Button = (props: ButtonProps) => {
//   return <button> { props.text ? `${props.text}` : "Default Text" } </button>;
// };

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  return (
      <StyledButton {...props}>
        {props.text}
      </StyledButton>
  )
}

// export the button object as a default module so that it can be imported elsewhere: index,stories,test, etc.
export default Button;