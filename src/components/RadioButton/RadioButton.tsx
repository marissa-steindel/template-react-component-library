import React,{FC} from "react";
import Label from "../Label";
// import { RadioButtonProps } from "./RadioButton.types";

export interface RadioButtonProps {
  inputID: string;
  name: string;
  values: string[];
  legend: string;
}

const RadioButton: FC<RadioButtonProps> = ({inputID,name,values,legend}) => {

  return(
    <form>
        <fieldset>
          <legend>{legend}</legend>
          {values.map( (value) =>
            <>
              <input type="radio" id={inputID} name={name} value={value} />
              <Label inputID={inputID} text={value}/>
              <br/>
            </>
          )}
          <input type="submit" value="Click Me!"/>
        </fieldset>
      </form>
  );

};

export default RadioButton;