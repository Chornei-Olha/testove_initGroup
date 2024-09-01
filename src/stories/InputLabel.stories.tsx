import type { Meta, StoryObj } from "@storybook/react";
import InputLabel from "../components/atoms/InputLabel/InputLabel";

const meta: Meta<typeof InputLabel> = {
  title: "Atoms/InputLabel",
  component: InputLabel,
  tags: ["autodocs"],
  argTypes: {
    htmlFor: { control: "text" },
    label: { control: "text" },
    isRequired: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof InputLabel>;

export const Default: Story = {
  args: {
    htmlFor: "input-id",
    label: "Label Text",
    isRequired: false,
  },
};

export const Required: Story = {
  args: {
    htmlFor: "input-id",
    label: "Label Text",
    isRequired: true,
  },
};
