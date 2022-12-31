import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";

import {
  Avatar,
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { useSnackbar } from "notistack";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { RootState } from "types/iReducer";
import { IRegister } from "types/iForm";
import { postRegisterRequest } from "store/auth/action";
import PasswordCustomField from "component/forms/formField/PasswordCustomField";
import AuthLayout from "component/layout/AuthLayout";

const initialLogin: IRegister = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    registerRequest,
    registerSuccess,
    successMessage,
    registerFailure,
    errorMessage,
  } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (registerSuccess) {
      enqueueSnackbar(successMessage, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      Router.push("/auth/verify");
    }
  }, [registerSuccess, successMessage, enqueueSnackbar]);

  useEffect(() => {
    if (registerFailure) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  }, [enqueueSnackbar, errorMessage, registerFailure]);

  const onFinish = (values: FormikValues) => {
    localStorage.setItem("user", JSON.stringify({ email: values.email }));
    const payload = {
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
      userDetails: {
        firstName: values.firstName,
        lastName: values.lastName,
        phoneNumber: values.phoneNumber,
      },
    };

    dispatch(postRegisterRequest(payload));
  };

  // TODO: CREATE SMALL TODO FOR TASK ON MY PAGE
  // TODO: ADD A  FEW FIELDS FOR REGISTER
  // TODO: CHECK FIELDS FOR COMPANY, EMPLOYEE, USER PROFILE
  // TODO: ADD COMPANY PAGE BY ID
  // TODO: PUT THE LOGO IN IT'S PLACE

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialLogin}
          validationSchema={Yup.object().shape({
            firstName: Yup.string().required("Required"),
            lastName: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
              .required("Required"),
            phoneNumber: Yup.string().required("Required"),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Passwords must match")
              .required("Required"),
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      fullWidth
                      id="firstName"
                      label="First Name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                      helperText={
                        errors.firstName &&
                        touched.firstName &&
                        errors.firstName
                          ? errors.firstName
                          : null
                      }
                      error={
                        !!(
                          errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="family-name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                      helperText={
                        errors.lastName && touched.lastName && errors.lastName
                          ? errors.lastName
                          : null
                      }
                      error={
                        !!(
                          errors.lastName &&
                          touched.lastName &&
                          errors.lastName
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                        errors.phoneNumber &&
                        touched.phoneNumber &&
                        errors.phoneNumber
                          ? errors.phoneNumber
                          : null
                      }
                      error={
                        !!(
                          errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber
                        )
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      helperText={
                        errors.email && touched.email && errors.email
                          ? errors.email
                          : null
                      }
                      error={!!(errors.email && touched.email && errors.email)}
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
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
                  <Grid item xs={12}>
                    <FormControlLabel
                      control={
                        <Checkbox value="allowExtraEmails" color="primary" />
                      }
                      label="I want to receive inspiration, marketing promotions and updates via email."
                    />
                  </Grid>
                </Grid>
                <LoadingButton
                  loading={registerRequest}
                  type="submit"
                  startIcon={<SendIcon />}
                  fullWidth
                  loadingPosition="start"
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                >
                  Sign Up
                </LoadingButton>
              </Box>
            </Form>
          )}
        </Formik>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Register.getLayout = function getLayout(page: NextPage) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Register;
