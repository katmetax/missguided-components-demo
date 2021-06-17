import React from "react";
import { CategoriesGrid } from "./index";

export default {
  title: "Components/CategoriesGrid",
  component: CategoriesGrid,
  argTypes: {},
};

const Template = (args) => <CategoriesGrid {...args} />;
export const Primary = Template.bind({});
Primary.args = {
  0: {
    title: "Plus",
    categoryLink: "#plus-size",
    image: {
      defaultHost: "media.missguided.com",
      endpoint: "missguided",
      name: "Plus_27_04_categories",
    },
    buttonText: "shop plus",
  },
  1: {
    title: "Petite",
    categoryLink: "#petite",
    image: {
      defaultHost: "media.missguided.com",
      endpoint: "missguided",
      name: "Plus_27_04_categories",
    },
    buttonText: "shop petite",
  },
};
