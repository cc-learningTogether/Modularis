import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";

import { Icon } from "./Icon";

const meta = {
  title: "Icon",
  component: Icon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

const IconWithHooks = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Icon
      icon="Checkbox"
      size="24"
      onClick={() => handleOnClick()}
      className={isChecked ? "tw:fill-primary" : "tw:fill-gray-300"}
    />
  );
};

export const Checkbox = {
  render: () => <IconWithHooks />,
};
