import React, { useState } from "react";
import InputGroup from "../src/components/molecules/InputGroup/InputGroup";
import "./components/styles/GlobalStyles.css";
import "./App.css";

export const App: React.FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const toggleTheme = () => {
    const currentTheme = document.body.getAttribute("data-theme");
    if (currentTheme === "dark") {
      document.body.setAttribute("data-theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
    }
  };

  const helpText = "Invalid input. Try again";
  const description = "Passwords must be at least 8 characters";

  return (
    <div className="App">
      <div className="toggle-button-container">
        <button className="toggle-button" onClick={toggleTheme}>
          Toggle Theme
        </button>
      </div>
      <InputGroup
        id="your-input-id"
        label="Email address"
        placeholder="e.g. johndoe@gmail.com"
        value={inputValue}
        onChange={handleChange}
        size="large"
        isRequired={true}
        quiet={false}
        disabled={false}
        hasError={false}
        hint="required"
        infoText="Please enter your work email address"
        helpText={helpText}
        description={description}
      />
    </div>
  );
};
