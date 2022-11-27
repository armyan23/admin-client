import React, { useState } from "react";
import { TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import dayjs, { Dayjs } from "dayjs";

const DateCustomField = ({ handleChange, handleBlur, values }: any) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const handleChangeValues = (createdDate: Dayjs | null) => {
    setValue(createdDate);
    values.createdDate = dayjs(createdDate).format("DD/MM/YYYY");
  };

  return (
    <DesktopDatePicker
      label="Date desktop"
      inputFormat="dd/MM/yyyy"
      value={value}
      onChange={handleChangeValues}
      renderInput={(params) => (
        <TextField
          {...params}
          id="createdDate"
          name="createdDate"
          label="Created company date"
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
