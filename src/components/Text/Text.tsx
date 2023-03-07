import React, {FC} from "react";
import styled from 'styled-components';
import { TextProps } from "./Text.types";

// define the styles of the HTML tags of the component
const StyledText = styled.p<TextProps>`
  background-color: ${props => props.disabled ? "lightgrey":"#8080e4"};
  color: ${props => props.disabled ? "#747474":"#6bedb5"};
  font-family: Arial, Helvetica, sans-serif;
`;

// define the component
// pass it the React props constrained by the interface
// return the component with the styledcomponents wrapper
const Text: FC<TextProps> = (props: TextProps) => {
  return(
    <StyledText {...props}>
      {props.content}
    </StyledText>
  )
}

export default Text;