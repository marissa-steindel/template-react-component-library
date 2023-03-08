import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";
// import { ImageProps } from "./Image.types";


export default {
  title: "Marissa/Image",
  component: Image,
} as ComponentMeta<typeof Image>;


const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  width: 250,
  height: 250,
  // src:"https://source.unsplash.com/random/800x500",
  src:"https://source.unsplash.com/random",
  alt: "Alt text description of the image.",
  disabled: false,
};
