import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";


export default {
  title: "Marissa/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;


const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  name: "cars",
  optionValues: ["venza", "camry", "mitsubishi"],
};
