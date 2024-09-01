import React from "react";
import InputLabel from "../../atoms/InputLabel/InputLabel";
import InputText from "../../atoms/InputText/InputText";
import InputAnnotation from "../../atoms/InputAnnotation/InputAnnotation";
import "./InputGroup.css";
import "../../styles/GlobalStyles.css";

interface InputGroupProps {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: "small" | "medium" | "large" | "extra-large";
  isRequired?: boolean;
  quiet?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  hint?: string;
  infoText?: string;
  helpText?: string;
  description?: string;
}

const InputGroup: React.FC<InputGroupProps> = ({
  id,
  label,
  placeholder,
  value,
  onChange,
  size,
  isRequired,
  quiet,
  disabled,
  hasError,
  hint,
  infoText,
  helpText,
  description,
}) => {
  return (
    <div className="input-group-wrapper">
      <div className="input-group">
        <InputLabel
          htmlFor={id}
          label={label}
          isRequired={isRequired}
          hint={hint}
          infoText={infoText}
        />
        <InputText
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          size={size}
          quiet={quiet}
          disabled={disabled}
          hasError={hasError}
        />
        <InputAnnotation
          helpText={helpText}
          description={description}
          hasError={hasError}
        />
      </div>
    </div>
  );
};

export default InputGroup;
