import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Button, { type ButtonVariant, ButtonSize } from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    variant: {
      options: ["primary", "secondary", "warning"],
      control: { type: "radio" },
      description:
        "ボタンのスタイルを、塗りボタン（`primary` or `secondary`）、アウトラインボタン（`warning`）、の3種類から選択します。",
      table: {
        defaultValue: { summary: "pimary" },
        type: { summary: "'primary' | 'secondary' | 'warning'" },
      },
    },
    size: {
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
      description: "ボタンのサイズを以下から選択します。",
      table: {
        type: { summary: "'lg' | 'md' | 'sm' 'xs'" },
      },
    },
    "aria-disabled": {
      description:
        "無効化する必要がある場合は `disabled` 属性ではなく `aria-disabled` 属性を使用します。",
      control: { type: "boolean" },
      table: {
        defaultValue: { summary: "false" },
        type: { summary: "boolean" },
      },
    },
  }, // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

const variants: ButtonVariant[] = ["primary", "secondary", "warning"];
const sizes: ButtonSize[] = ["lg", "md", "sm", "xs"];

export const Playground: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
    'aria-disabled': false,
    onClick: fn(),
    className: "",
  },
};

export const Default: Story = {
  args: {
    size: "md",
    children: "Button",
    onClick: fn(),
  },
};

export const All: Story = {
  render: () => {
    return (
      <div className="flex flex-col gap-5">
        {variants.map((variant) => {
          return sizes.map((size) => {
            return (
              <div>
                <Button variant={variant} size={size}>
                  {variant}
                </Button>
              </div>
            );
          });
        })}
      </div>
    );
  },
};