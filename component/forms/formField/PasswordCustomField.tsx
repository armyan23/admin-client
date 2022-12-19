import React from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const PasswordCustomField = ({
  name,
  label,
  handleChange,
  value,
  errors,
  touched,
}: any) => {
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  return (
    <FormControl fullWidth variant="outlined">
      <InputLabel htmlFor={name} error={!!(errors[name] && touched[name])}>{label}</InputLabel>
      <OutlinedInput
        id={name}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        label={label}
        autoComplete={name}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        error={!!(errors[name] && touched[name])}
      />
      {errors[name] && touched[name] ? (
        <FormHelperText error>{errors[name]}</FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default PasswordCustomField;
