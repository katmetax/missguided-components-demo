import React from "react";
import { CategoryItem } from "./index";

export default {
  title: "Components/CategoryItem",
  component: CategoryItem,
  argTypes: {},
};

const Template = (args) => <CategoryItem {...args} />;
export const Primary = Template.bind({});
Primary.args = {
    title: "Petite",
    categoryLink: "#petite",
    image: {
      defaultHost: "media.missguided.com",
      endpoint: "missguided",
      name: "Plus_27_04_categories",
    },
    buttonText: "shop petite",
};
