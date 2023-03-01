import React from "react";
import styled from 'styled-components';

// define the props of the component
export interface TextProps {
  content: string;
}

// define the styles of the HTML tags of the component
const StyledText = styled.p`
  background-color: aliceblue;
`;

// define the component
// pass it the React props constrained by the interface
// return the component with the styledcomponents wrapper
const Text = (props: TextProps) => {
  return(
    <StyledText>
      {props.content}
    </StyledText>
  );
};

export default Text;