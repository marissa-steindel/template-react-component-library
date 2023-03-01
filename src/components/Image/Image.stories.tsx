import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";
import { ImageProps } from "./Image.types";


export default {
  title: "Marissa/Image",
  component: Image,
} as ComponentMeta<typeof Image>;


const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  src:"https://source.unsplash.com/random/500x200",
  alt: "I am some alt text.",
};
