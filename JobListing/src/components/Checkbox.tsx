import React from "react";
import "../scss/components/_checkbox.scss";
type CheckBoxProps = {
  value: string;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox: React.FC<CheckBoxProps> = ({ value, handleInput }) => {
  return (
    <label className="container">
      {value}
      <input
        className="checkBox"
        type="checkbox"
        value={value}
        onChange={handleInput}
      />
    </label>
  );
};
