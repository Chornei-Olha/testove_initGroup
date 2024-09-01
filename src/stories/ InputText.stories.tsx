import type { Meta, StoryObj } from "@storybook/react";
import InputText from "../components/atoms/InputText/InputText";

const meta: Meta<typeof InputText> = {
  title: "Atoms/InputText",
  component: InputText,
  tags: ["autodocs"],
  argTypes: {
    id: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
    quiet: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    id: "input-id",
    placeholder: "Enter text...",
    value: "",
    onChange: () => {},
    quiet: false,
    disabled: false,
  },
};

export const Quiet: Story = {
  args: {
    id: "input-id",
    placeholder: "Enter text",
    value: "",
    onChange: () => {},
    quiet: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    id: "input-id",
    placeholder: "Enter text",
    value: "",
    onChange: () => {},
    quiet: false,
    disabled: true,
  },
};
