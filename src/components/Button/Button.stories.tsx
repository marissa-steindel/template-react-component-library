import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import { buildQueries } from "@testing-library/react";

export default {
  title: "Marissa/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Visibility = Template.bind({});
Visibility.args = {
  text:"Click Me",
  disabled: false,
  color: "#6bedb5",
  fontColor: "#070f0b",
};


