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
  // label: "Which is the best ear worm?:"
  name: "earworms",
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
};
