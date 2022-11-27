import { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Card,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

import { postCreateCompanyRequest } from "store/company/action";
import { RootState } from "types/iReducer";
import { ICreateCompany } from "types/iForm";
import Dashboard from "component/layout/Dashboard";
import { typeCompany } from "util/utils";
import DateCustomField from "component/formField/DateCustomField";
import { useSnackbar } from "notistack";
import usePreviousList from "useHooks/usePreviousList";

const initialCreateCompany: ICreateCompany = {
  nameCompany: "",
  aboutCompany: "",
  typeCompany: "",
  phoneNumber: "",
  email: "",
  website: "",
  createdDate: null,
};

const AddCompany = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    errorMessage,
    isCreateCompanySuccess,
    isCreateCompanyFailure,
    successMessage,
  } = useSelector((state: RootState) => state.company);

  const [prevIsCreateCompanySuccess, prevIsCreateCompanyFailure] =
    usePreviousList<boolean>([isCreateCompanySuccess, isCreateCompanyFailure]);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isCreateCompanySuccess && !prevIsCreateCompanySuccess) {
      enqueueSnackbar(successMessage, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [isCreateCompanySuccess, prevIsCreateCompanySuccess]);

  useEffect(() => {
    if (isCreateCompanyFailure && !prevIsCreateCompanyFailure) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [isCreateCompanyFailure, prevIsCreateCompanyFailure]);

  const onFinish = (values: FormikValues) => {
    setLoading(true);
    dispatch(postCreateCompanyRequest(values));
  };

  return (
    <div>
      <Card>
        <Box sx={{ p: 2 }}>
          <Typography component="h1" variant="h5">
            Create company
          </Typography>
          <Formik
            initialValues={initialCreateCompany}
            validationSchema={Yup.object().shape({
              nameCompany: Yup.string().required("Required"),
              aboutCompany: Yup.string().required("Required"),
              email: Yup.string()
                .email("Invalid email address")
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
                        id="nameCompany"
                        name="nameCompany"
                        label="Company name"
                        autoComplete="nameCompany"
                        required
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nameCompany}
                        helperText={
                          errors.nameCompany &&
                          touched.nameCompany &&
                          errors.nameCompany
                            ? errors.nameCompany
                            : null
                        }
                        error={
                          !!(
                            errors.nameCompany &&
                            touched.nameCompany &&
                            errors.nameCompany
                          )
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="email"
                        name="email"
                        autoComplete="email"
                        label="Email Address"
                        required
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        helperText={
                          errors.email && touched.email && errors.email
                            ? errors.email
                            : null
                        }
                        error={
                          !!(errors.email && touched.email && errors.email)
                        }
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone number"
                        autoComplete="phone"
                        required
                        autoFocus
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

                    <Grid item xs={12} sm={6}>
                      <FormControl fullWidth>
                        <InputLabel id="typeCompany">Type company</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="typeCompany"
                          name="typeCompany"
                          label="Type company"
                          required
                          fullWidth
                          autoFocus
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.typeCompany}
                          error={
                            !!(
                              errors.typeCompany &&
                              touched.typeCompany &&
                              errors.typeCompany
                            )
                          }
                        >
                          {typeCompany.map((item) => (
                            <MenuItem key={item.key} value={item.type}>
                              {item.name}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        id="website"
                        name="website"
                        label="Website"
                        autoComplete="website"
                        fullWidth
                        onBlur={handleBlur}
                        value={values.website}
                        onChange={handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item sm={6}>
                        <DateCustomField
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          values={values}
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Grid item sm={6}>
                        <TextField
                          id="aboutCompany"
                          label="About company"
                          name="aboutCompany"
                          autoComplete="company-name"
                          rows={4}
                          required
                          multiline
                          fullWidth
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.aboutCompany}
                          helperText={
                            errors.aboutCompany &&
                            touched.aboutCompany &&
                            errors.aboutCompany
                              ? errors.aboutCompany
                              : null
                          }
                          error={
                            !!(
                              errors.aboutCompany &&
                              touched.aboutCompany &&
                              errors.aboutCompany
                            )
                          }
                        />
                      </Grid>
                    </Grid>
                    <Grid item xs={12} className="d-flex j-end">
                      <LoadingButton
                        loading={loading}
                        type="submit"
                        startIcon={<SendIcon />}
                        loadingPosition="start"
                        sx={{ mt: 3, mb: 2 }}
                        variant="contained"
                      >
                        Create company
                      </LoadingButton>
                    </Grid>
                  </Grid>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Card>
    </div>
  );
};

AddCompany.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddCompany;
