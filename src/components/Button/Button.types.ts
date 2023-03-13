
// interface specifies the properties or fields required of objects that implement it
// storybook functionality:
// default text and background colour
// default and disabled state

export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  color: string;
  fontColor: string;
}