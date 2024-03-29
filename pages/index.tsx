import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
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
import { postLoginRequest } from "store/auth/action";
import { RootState } from "types/iReducer";
import { ILogin } from "types/iForm";
import PasswordCustomField from "component/forms/formField/PasswordCustomField";
import AuthLayout from "component/layout/AuthLayout";
import Router from "next/router";

const initialLogin: ILogin = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { loginSuccess, loginFailure, errorMessage, data } = useSelector(
    (state: RootState) => state.auth
  );

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loginSuccess) {
      Router.push("/dashboard/home");
      setLoading(false);
    }
  }, [loginSuccess, enqueueSnackbar, data]);

  useEffect(() => {
    if (loginFailure) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [enqueueSnackbar, errorMessage, loginFailure]);

  const onFinish = (values: FormikValues) => {
    setLoading(true);
    dispatch(postLoginRequest(values));
  };

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
          Sign in
        </Typography>

        <Formik
          initialValues={initialLogin}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
            password: Yup.string()
              .min(8, "Password must be at least 8 characters")
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
              <PasswordCustomField
                name="password"
                label="Password"
                handleChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                errors={errors}
                touched={touched}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <LoadingButton
                loading={loading}
                type="submit"
                startIcon={<SendIcon />}
                fullWidth
                loadingPosition="start"
                sx={{ mt: 3, mb: 2 }}
                variant="contained"
              >
                Sign in
              </LoadingButton>
            </Form>
          )}
        </Formik>
        <Grid container>
          <Grid item xs>
            <Link href="pages/#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="pages/#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

Login.getLayout = function getLayout(page: NextPage) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default Login;
