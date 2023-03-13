import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Label from "./Label";
import { LabelProps } from "./Label.types";


export default {
  title: "Marissa/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const LabelStory = Template.bind({});
LabelStory.args = {
  text: "I am a <label> tag that accompanies form elements:",
};

