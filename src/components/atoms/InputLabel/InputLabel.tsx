import React from "react";
import "./InputLabel.css";
import "../../styles/GlobalStyles.css";

interface InputLabelProps {
  htmlFor: string;
  label: string;
  size?: "small" | "medium" | "large";
  isRequired?: boolean;
  hint?: string;
  infoText?: string;
}

const InputLabel: React.FC<InputLabelProps> = ({
  htmlFor,
  label,
  size,
  isRequired,
  hint,
  infoText,
}) => {
  return (
    <div className={`input-label-container ${size}`}>
      <label className="input-label" htmlFor={htmlFor}>
        {label}{" "}
        <div className="info-icon">
          i<span className="tooltip-text">{infoText}</span>
        </div>
        {isRequired && (
          <span className="required" title={hint}>
            *
          </span>
        )}
      </label>
    </div>
  );
};

export default InputLabel;
