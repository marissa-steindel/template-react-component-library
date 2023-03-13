import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
// import { CardProps } from "./Card.types";


export default {
  title: "Marissa/Card",
  component: Card,
} as ComponentMeta<typeof Card>;


const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  src: "https://source.unsplash.com/random/200x200",
  alt: "dummy alt text",
  title: "Marissa Steindel",
  text: "Marissa is the coolest person in the entire world.",
  // cardHeight: 200,
  cardWidth: "200px",
  disabled: false,
};


