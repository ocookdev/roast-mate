import React from "react";
import TextField from "@mui/material/TextField";

interface TimeInputProps {
  label?: string;
  value: string;
  onChange: (newValue: string) => void;
}

const TimeInput: React.FC<TimeInputProps> = ({
  label = "Select Time",
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      label={label}
      type="time"
      value={value}
      onChange={handleChange}
      variant="filled"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        step: 300, // 5 minutes
      }}
      fullWidth
    />
  );
};

export default TimeInput;
