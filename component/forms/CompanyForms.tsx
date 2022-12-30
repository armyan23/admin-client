import React, { FC } from "react";
import Router from "next/router";
import {
  Box,
  Grid,
  Select,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";

import { ICompanyForm } from "types/iForm";
import { typeCompany } from "util/utils";
import { initialCompany } from "util/Initial/InitialValue";
import DateCustomField from "component/forms/formField/DateCustomField";

type Props = {
  children?: JSX.Element;
  onFinish: any;
  loading: boolean;
  cancelText: boolean;
  submitText: string;
  initialState?: ICompanyForm;
};

const CompanyForms: FC<Props> = ({
  children,
  onFinish,
  loading = false,
  cancelText = false,
  submitText = "Create company",
  initialState = initialCompany,
}) => {
  const onCancel = () => {
    Router.push("/dashboard/company");
  };

  return (
    <Formik
      initialValues={initialState}
      validationSchema={Yup.object().shape({
        nameCompany: Yup.string().required("Required"),
        aboutCompany: Yup.string().required("Required"),
        email: Yup.string().email("Invalid email address").required("Required"),
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
                  error={!!(errors.email && touched.email && errors.email)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone number"
                  autoComplete="phone"
                  required
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
                    labelId="type-company-select-label"
                    id="typeCompany"
                    name="typeCompany"
                    label="Type company"
                    required
                    fullWidth
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
                      <MenuItem key={item.key} value={item.name}>
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
                    name="createdDate"
                    label="Created company date"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    touched={touched}
                    errors={errors}
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
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CompanyForms;
