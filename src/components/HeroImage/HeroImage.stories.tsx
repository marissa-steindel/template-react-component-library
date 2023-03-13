import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImage from "./HeroImage";
import { HeroImageProps } from "./HeroImage.types";


export default {
  title: "Marissa/HeroImage",
  component: HeroImage,
} as ComponentMeta<typeof HeroImage>;


const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  src:"https://source.unsplash.com/random/800x200",
  alt: "I am some alt text.",
  title: "Mary Had",
  subtitle:"A Little Lamb",
};
