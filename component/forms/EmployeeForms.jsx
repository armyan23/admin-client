import React from "react";
import Router from "next/router";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

import { typeGender, typeRole } from "util/utils";
import { initialEmployeeForm } from "util/Initial/InitialValue";
import DateCustomField from "component/forms/formField/DateCustomField";
import PasswordCustomField from "./formField/PasswordCustomField";
import { useSelector } from "react-redux";

const EmployeeForms = ({
  children,
  onFinish,
  loading,
  cancelText = false,
  submitText = "Create employee",
  initialState = initialEmployeeForm,
}) => {
  const { profileData } = useSelector((state) => state.profile);

  const onCancel = () => {
    Router.push("/dashboard/employees");
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={Yup.object().shape({
        email: Yup.string().email("Invalid email address").required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        patronymic: Yup.string().required("Required"),
        role: Yup.string().required("Required"),
        skills: Yup.string().required("Required"),
        password: Yup.string().min(8, "Password must be at least 8 characters"),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password"), null],
          "Passwords must match"
        ),
        salary: Yup.string().required("Required"),
        phoneNumber: Yup.string().required("Required"),
        gender: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        birthDate: Yup.string().required("Required"),
        startWork: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        streetAddress: Yup.string().required("Required"),
      })}
      onSubmit={(values) => onFinish(values)}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Box sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Employee info
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="email"
                  name="email"
                  autoComplete="email"
                  label="Email Address"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  helperText={
                    errors.email && touched.email ? errors.email : null
                  }
                  error={!!(errors.email && touched.email)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone number"
                  autoComplete="phone"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  helperText={
                    errors.phoneNumber && touched.phoneNumber
                      ? errors.phoneNumber
                      : null
                  }
                  error={!!(errors.phoneNumber && touched.phoneNumber)}
                />
              </Grid>
              {/*User info*/}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  autoComplete="firstName"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  helperText={
                    errors.firstName && touched.firstName
                      ? errors.firstName
                      : null
                  }
                  error={!!(errors.firstName && touched.firstName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={!!(errors.gender && touched.gender)}
                >
                  <InputLabel id="type-gender-select-label">Gender</InputLabel>
                  <Select
                    labelId="type-gender-select-label"
                    id="gender"
                    name="gender"
                    label="Gender"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gender}
                  >
                    {typeGender.map((item) => (
                      <MenuItem key={item.key} value={item.name}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.gender && touched.gender ? (
                    <FormHelperText error>{errors.gender}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  autoComplete="lastName"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  helperText={
                    errors.lastName && touched.lastName ? errors.lastName : null
                  }
                  error={!!(errors.lastName && touched.lastName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DateCustomField
                  name="birthDate"
                  label="Birth date"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  values={values}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="patronymic"
                  name="patronymic"
                  label="Patronymic"
                  autoComplete="patronymic"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.patronymic}
                  helperText={
                    errors.patronymic && touched.patronymic
                      ? errors.patronymic
                      : null
                  }
                  error={!!(errors.patronymic && touched.patronymic)}
                />
              </Grid>
              {/* Country, street, city */}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  autoComplete="country"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.country}
                  onChange={handleChange}
                  helperText={
                    errors.country && touched.country ? errors.country : null
                  }
                  error={!!(errors.country && touched.country)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  autoComplete="city"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  helperText={errors.city && touched.city ? errors.city : null}
                  error={!!(errors.city && touched.city)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="streetAddress"
                  name="streetAddress"
                  label="Street address"
                  autoComplete="Street address"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.streetAddress}
                  helperText={
                    errors.streetAddress && touched.streetAddress
                      ? errors.streetAddress
                      : null
                  }
                  error={!!(errors.streetAddress && touched.streetAddress)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle2" gutterBottom>
                  Work info
                </Typography>
              </Grid>
              {profileData?.role === "owner" &&
              initialState.role !== "admin" ? (
                <>
                  <Grid item xs={12}>
                    <Grid item sm={6}>
                      <FormControl
                        fullWidth
                        error={!!(errors.role && touched.role)}
                      >
                        <InputLabel id="type-role-select-label">
                          Role
                        </InputLabel>
                        <Select
                          labelId="type-gender-select-label"
                          id="role"
                          name="role"
                          label="Role"
                          fullWidth
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.role}
                        >
                          {typeRole.map((item) => (
                            <MenuItem key={item.key} value={item.value}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                        {errors.role && touched.role ? (
                          <FormHelperText error>{errors.role}</FormHelperText>
                        ) : null}
                      </FormControl>
                    </Grid>
                  </Grid>
                  {values.role === "admin" ? (
                    <>
                      <Grid item xs={12} sm={6}>
                        <PasswordCustomField
                          name="password"
                          label="Password"
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                          errors={errors}
                          touched={touched}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <PasswordCustomField
                          name="confirmPassword"
                          label="Confirm password"
                          handleChange={handleChange}
                          onBlur={handleBlur}
                          value={values.confirmPassword}
                          errors={errors}
                          touched={touched}
                        />
                      </Grid>
                    </>
                  ) : null}
                </>
              ) : null}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="skills"
                  name="skills"
                  label="Skills"
                  autoComplete="skills"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.skills}
                  helperText={
                    errors.skills && touched.skills ? errors.skills : null
                  }
                  error={!!(errors.skills && touched.skills)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="salary"
                  name="salary"
                  label="Salary"
                  autoComplete="salary"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.salary}
                  helperText={
                    errors.salary && touched.salary ? errors.salary : null
                  }
                  error={!!(errors.salary && touched.salary)}
                />
              </Grid>
              {/* Date */}
              <Grid item xs={12} sm={6}>
                <DateCustomField
                  name="startWork"
                  label="Start work"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  values={values}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DateCustomField
                  name="endWork"
                  label="End work"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                />
              </Grid>
            </Grid>
            {children}
            <Grid item xs={12} className="d-flex j-end">
              {cancelText && (
                <Button sx={{ mt: 3, mb: 2, mr: 2 }} onClick={onCancel}>
                  Cancel
                </Button>
              )}
              <LoadingButton
                loading={loading}
                type="submit"
                startIcon={<SendIcon />}
                loadingPosition="start"
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
              >
                {submitText}
              </LoadingButton>
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default EmployeeForms;
