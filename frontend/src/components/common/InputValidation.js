import React, { useState } from "react";

const InputValidation = ({
  value,
  name,
  label,
  type,
  required,
  minLength,
  maxLength,
  pattern,
  onChange,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (event) => {
    onChange(event);
    validateInput(event.target.value);
  };

  const validateInput = (value) => {
    if (required && !value) {
      setErrorMessage(`${label} is required.`);
    } else if (type === "email" && !/\S+@\S+\.\S+/.test(value)) {
      setErrorMessage(`Invalid email address.`);
    } else if (minLength && value.length < minLength) {
      setErrorMessage(`${label} must be at least ${minLength} characters long.`);
    } else if (maxLength && value.length > maxLength) {
      setErrorMessage(`${label} must not exceed ${maxLength} characters.`);
    } else if (pattern && !value.match(pattern)) {
      setErrorMessage(`${label} is invalid.`);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="input-validation">
      <label htmlFor={name}>{label}:</label>
      <input
        type={type}
        value={value}
        id={name}
        name={name}
        onChange={handleInputChange}
        autoComplete="new-password"
        placeholder={label}
      />
      {errorMessage && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};

export default InputValidation;
