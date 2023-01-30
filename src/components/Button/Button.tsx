// import the React module from the node_modules directory
import React from "react";
// import the CSS from this directory
import './Button.css';

// interface specifies the properties or fields required of objects that implement it
// this is a typescript thing?
export interface ButtonProps {
  label: string;
}

// instantiate the Button object that takes an argument of type ButtonProps
// (functional component)
const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>;
};

// export the button object as a default module so that it can be imported elsewhere: index,stories,test, etc.
export default Button;