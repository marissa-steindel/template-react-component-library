import React,{FC} from "react";
import { LabelProps } from "./Label.types";

const Label: FC<LabelProps> = ({inputID, text}) => {
  return(
    <label htmlFor={inputID}>{text}</label>
  );
};

export default Label;