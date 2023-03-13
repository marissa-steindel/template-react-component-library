import React, {FC} from "react";
import styled from 'styled-components';
import { ImageProps } from "./Image.types";

// define the styles of the HTML tags of the component
const StyledImage = styled.img<ImageProps>`
  width: ${props => props.width};
  height: ${props => props.height};
`;

const Image: FC<ImageProps> = (props: ImageProps) => {

  // return <img src={props.src} alt={props.alt}/>;
  return <StyledImage {...props}/>;

};

export default Image;