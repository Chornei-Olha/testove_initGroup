import React from "react";
import "./InputAnnotation.css";
import "../../styles/GlobalStyles.css";

interface InputAnnotationProps {
  helpText?: string;
  description?: string;
  hasError?: boolean;
}

const InputAnnotation: React.FC<InputAnnotationProps> = ({
  helpText,
  description,
  hasError,
}) => {
  console.log({ helpText, description, hasError });

  return (
    <div className="input-annotation">
      {hasError ? (
        <span className="helpText">{helpText}</span>
      ) : (
        <span className="description">{description}</span>
      )}
    </div>
  );
};

export default InputAnnotation;
