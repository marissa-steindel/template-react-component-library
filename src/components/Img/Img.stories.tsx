import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Img from "./Img";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Img",
  component: Img,
} as ComponentMeta<typeof Img>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Img> = (args) => <Img {...args} />;

export const ImgStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ImgStory.args = {
  srcString: "This is a img story!",
  altText:"This is alt text."
};

