import "./styles.scss";

import React from "react";
type Props = {
  value: string;
  type: string;
  placeholder: string;
  onChange: any;
};
const Input = ({ type, value, placeholder, onChange }: Props) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Input;
