import React from "react";
import "./InputText.css";
import "../../styles/GlobalStyles.css";
import { FaSearch } from "react-icons/fa";

interface InputTextProps {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large" | "extra-large";
  quiet?: boolean;
  disabled?: boolean;
  hasError?: boolean;
}

const InputText: React.FC<InputTextProps> = ({
  id,
  placeholder,
  value,
  onChange,
  size,
  quiet,
  disabled,
  hasError,
}) => {
  return (
    <div className="input-text-container">
      <div className="input-icon">
        <FaSearch />
      </div>
      <input
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`input-text ${size} ${quiet ? "quiet" : ""} ${hasError ? "error" : ""}`}
        disabled={disabled}
      />
      <div className="input-info">
        <span className="question-icon">? </span>
        <span className="command-key">⌘K</span>
      </div>
    </div>
  );
};

export default InputText;
