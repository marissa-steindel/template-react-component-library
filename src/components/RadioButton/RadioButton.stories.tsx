import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioButton from "./RadioButton";


export default {
  title: "Marissa/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;


const Template: ComponentStory<typeof RadioButton> = (args) => <RadioButton {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  inputID:"some input id",
  name: "name property",
  value: "some value",
};
