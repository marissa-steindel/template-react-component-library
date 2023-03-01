import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";
import { TextProps } from "./Text.types";


// export interface TextProps {
//   content: string;
// }

// details for the Storybook sidebar
export default {
  title: "Marissa/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: 'color' }
   },
} as ComponentMeta<typeof Text>;

// build a template for the story
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

// bind values to the story template
export const Visibility = Template.bind({});
Visibility.args = {
  content: "This is a line of text!",
};
