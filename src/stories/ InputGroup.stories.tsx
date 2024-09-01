import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import InputGroup from "../components/molecules/InputGroup/InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "Components/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputGroup>;

// Пример истории по умолчанию
export const Default: Story = {
  args: {
    id: "input-default",
    label: "Email address",
    placeholder: "e.g. johndoe@gmail.com",
    value: "",
    onChange: () => {},
    size: "medium",
    isRequired: true,
    quiet: false,
    disabled: false,
    hasError: false,
    hint: "required",
    infoText: "Please enter your work email address",
    helpText: "Invalid input. Try again",
    description: "Passwords must be at least 8 characters",
  },
};

// Пример истории Hover
export const Hover: Story = {
  args: {
    id: "input-default",
    label: "Email address",
    placeholder: "e.g. johndoe@gmail.com",
    value: "",
    onChange: () => {},
    size: "medium",
    isRequired: true,
    quiet: false,
    disabled: false,
    hasError: false,
    hint: "required",
    infoText: "Please enter your work email address",
    helpText: "Invalid input. Try again",
    description: "Passwords must be at least 8 characters",
  },
};

// Пример истории с ошибкой
export const Error: Story = {
  args: {
    id: "input-error",
    label: "Email address",
    placeholder: "e.g. johndoe@gmail.com",
    value: "",
    onChange: () => {},
    size: "medium",
    isRequired: true,
    quiet: false,
    disabled: false,
    hasError: true,
    hint: "required",
    infoText: "Please enter your work email address",
    helpText: "Invalid input. Try again",
    description: "Passwords must be at least 8 characters",
  },
};

// Пример истории с отключенным вводом
export const Disabled: Story = {
  args: {
    id: "input-disabled",
    label: "Email address",
    placeholder: "e.g. johndoe@gmail.com",
    value: "",
    onChange: () => {},
    size: "medium",
    isRequired: true,
    quiet: false,
    disabled: true,
    hasError: false,
    hint: "required",
    infoText: "Please enter your work email address",
    helpText: "Invalid input. Try again",
    description: "Passwords must be at least 8 characters",
  },
};

// Пример истории для размера small
export const Small: Story = {
  args: {
    id: "input-small",
    label: "Email address",
    placeholder: "e.g. johndoe@gmail.com",
    value: "",
    onChange: () => {},
    size: "small",
    isRequired: true,
    quiet: false,
    disabled: false,
    hasError: false,
    hint: "required",
    infoText: "Please enter your work email address",
    helpText: "Invalid input. Try again",
    description: "Passwords must be at least 8 characters",
  },
};

// Пример истории для состояния ошибки с размером small
export const SmallError: Story = {
  args: {
    id: "input-small-error",
    label: "Email address",
    placeholder: "e.g. johndoe@gmail.com",
    value: "",
    onChange: () => {},
    size: "small",
    isRequired: true,
    quiet: false,
    disabled: false,
    hasError: true,
    hint: "required",
    infoText: "Please enter your work email address",
    helpText: "Invalid input. Try again",
    description: "Passwords must be at least 8 characters",
  },
};
