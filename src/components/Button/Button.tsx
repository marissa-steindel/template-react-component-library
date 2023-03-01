// import the React module from the node_modules directory
import React, {FC} from "react";
// import the styled-components module
import styled from 'styled-components';
// import the CSS from this directory
// import './Button.css';
// import the properties for the Button component
import {ButtonProps} from './Button.types';

const StyledButton = styled.button<ButtonProps>`
    background-color: ${props => props.disabled ? "grey" : "#6bedb5" };
`;

// instantiate the Button object that takes an argument of type ButtonProps
// (functional component)
// const Button = (props: ButtonProps) => {
//   return <button>{props.text ? `${props.text}`:"Default Text"}</button>;
// };

const Button: FC<ButtonProps> = ({text, disabled, ...props}) => {
  return (
      <StyledButton
        type="button"
        disabled={disabled}
        {...props}
      >
        {text}
      </StyledButton>
  )
}

// export the button object as a default module so that it can be imported elsewhere: index,stories,test, etc.
export default Button;