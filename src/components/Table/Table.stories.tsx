import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Table from "./Table";


export default {
  title: "Marissa/Table",
  component: Table,
} as ComponentMeta<typeof Table>;


const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;


export const Visbility = Template.bind({});
Visbility.args = {
  headings: ['A', 'B', 'C'],
  rows: [
    ['A1', 'B1', 'C1'],
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3'],
  ],
};