import { TextField } from "@mui/material";
import React from "react";

const Input = ({
  id,
  type,
  label,
  name,
  autocomplete,
  action,
  value,
  placeholder,
}) => {
  return (
    <TextField
      className="textfield"
      margin="normal"
      required
      fullWidth
      type={type}
      id={id}
      label={label}
      name={name}
      autoComplete={autocomplete}
      onChange={action}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
