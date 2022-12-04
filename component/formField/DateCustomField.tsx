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
  errors,
  touched,
}: any) => {
  const [value, setValue] = useState<Dayjs | null>(null);
  const handleChangeValues = (createdDate: Dayjs | null) => {
    setValue(createdDate);
    values[name] = createdDate;
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
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.createdDate}
          helperText={
            errors?.streetAddress &&
            touched?.streetAddress &&
            errors?.streetAddress
              ? errors?.streetAddress
              : null
          }
          error={
            !!(
              errors?.streetAddress &&
              touched?.streetAddress &&
              errors?.streetAddress
            )
          }
        />
      )}
    />
  );
};

export default DateCustomField;
