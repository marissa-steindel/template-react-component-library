import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HeroImage from "./HeroImage";


export default {
  title: "Marissa/HeroImage",
  component: HeroImage,
} as ComponentMeta<typeof HeroImage>;


const Template: ComponentStory<typeof HeroImage> = (args) => <HeroImage {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  url:"https://source.unsplash.com/random/500x200",
  alt: "I am some alt text.",
  title: "Mary Had",
  subtitle:"A Little Lamb",
};
