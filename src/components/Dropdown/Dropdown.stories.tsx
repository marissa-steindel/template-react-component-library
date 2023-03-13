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
  labelText: "Which is the best ear worm?:",
  name: "earworms",
  selectID: "earworms",
  backgroundColor: "#8080e4",
  fontColor:"#6bedb5",
  optionValues: [
    "Time Warp",
    "Gangnam Style",
    "Who Let the Dogs Out",
    "I'm Gonna Be 500 Miles",
    "99 Bottles of Beer on the Wall",
    "Peanut Butter Jelly Time",
    "Final Countdown",
    "YMCA",
  ],
  disabled: false,
};
