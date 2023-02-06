import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { useSnackbar } from "notistack";

import {
  Avatar,
  Box,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

import { postVerifyRequest } from "store/auth/action";
import { RootState } from "types/iReducer";

interface IVerify {
  code: string;
}

const initialLogin: IVerify = {
  code: "",
};

interface IVerifyEmail {
  code: string;
  email: string;
}

const Verify = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const { verifySuccess, verifyFailure, successMessage, errorMessage } =
    useSelector((state: RootState) => state.auth);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (verifySuccess) {
      enqueueSnackbar(successMessage, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      Router.push("/");
      setLoading(false);
    }
  }, [verifySuccess, successMessage, enqueueSnackbar]);

  useEffect(() => {
    if (verifyFailure) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [enqueueSnackbar, errorMessage, verifyFailure]);

  const onFinish = (values: FormikValues) => {
    const user: any = JSON.parse(localStorage.getItem("user") || "");
    const payload: IVerifyEmail = {
      email: user.email,
      code: values.code,
    };
    dispatch(postVerifyRequest(payload));
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
          Verify
        </Typography>

        <Formik
          initialValues={initialLogin}
          validationSchema={Yup.object().shape({
            code: Yup.string()
              .min(4, "Password must be at least 4 characters")
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
                  <Grid item xs={12}>
                    <TextField
                      margin="normal"
                      fullWidth
                      name="code"
                      label="Verify code"
                      type="text"
                      id="code"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.code}
                      helperText={
                        errors.code && touched.code && errors.code
                          ? errors.code
                          : null
                      }
                      error={!!(errors.code && touched.code && errors.code)}
                    />
                  </Grid>
                  <Grid container justifyContent="flex-end">
                    <Link href="#" variant="body2">
                      Reset code
                    </Link>
                  </Grid>
                </Grid>
                <LoadingButton
                  loading={loading}
                  type="submit"
                  startIcon={<SendIcon />}
                  fullWidth
                  loadingPosition="start"
                  sx={{ mt: 3, mb: 2 }}
                  variant="contained"
                >
                  Verify
                </LoadingButton>
                <Link href="pages/#" variant="body2">
                  Back to home
                </Link>
              </Box>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};

export default Verify;
