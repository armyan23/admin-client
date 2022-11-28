import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { Dayjs } from "dayjs";

const DateCustomField = ({
  handleChange,
  handleBlur,
  values,
  name,
  label,
}: any) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleChangeValues = (createdDate: Dayjs | null) => {
    setValue(createdDate);
    values.createdDate = createdDate;
  };

  return (
    <DesktopDatePicker
      inputFormat="dd/MM/yyyy"
      value={value}
      onChange={handleChangeValues}
      renderInput={(params) => (
        <TextField
          {...params}
          id={name}
          name={name}
          label={label}
          fullWidth
          required
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.createdDate}
        />
      )}
    />
  );
};

export default DateCustomField;
