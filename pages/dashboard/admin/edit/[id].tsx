import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import * as Yup from "yup";
import { Box, Card, Grid, Tab, Typography } from "@mui/material";
import { LoadingButton, TabContext, TabList, TabPanel } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { Form, Formik, FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import {
  deleteEmployeeImageRequest,
  editEmployeeRequest,
  employeeByIdRequest,
} from "store/employee/action";
import { changeAdminPasswordRequest } from "store/admin/action";
import { RootState } from "types/iReducer";
import { ICreateEmployee } from "types/iForm";
import Dashboard from "component/layout/Dashboard";
import EditImage from "component/ui/image/EditImage";
import EmployeeForms from "component/forms/EmployeeForms";
import ImageCustomField from "component/forms/formField/ImageCustomField";
import PasswordCustomField from "component/forms/formField/PasswordCustomField";

const EmployeeEdit = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    isEmployeeByIdSuccess,
    isEditEmployeeSuccess,
    isEditEmployeeFailure,
    isDeleteEmployeeImageSuccess,
    isDeleteEmployeeImageFailure,
    employeeByIdData,
    successMessage,
    errorMessage,
  }: any = useSelector((state: RootState) => state.employee);

  const {
    isChangeAdminPasswordRequest,
    isChangeAdminPasswordSuccess,
    isChangeAdminPasswordFailure,
    errorMessage: errorMessagePasswordChange,
  } = useSelector((state: RootState) => state.admin);

  const [
    prevIsEmployeeByIdSuccess,
    prevIsEditEmployeeSuccess,
    prevIsEditEmployeeFailure,
    prevIsDeleteEmployeeImageSuccess,
    prevIsDeleteEmployeeImageFailure,
    prevIsChangeAdminPasswordSuccess,
    prevIsChangeAdminPasswordFailure,
  ] = usePreviousList<boolean>([
    isEmployeeByIdSuccess,
    isEditEmployeeSuccess,
    isEditEmployeeFailure,
    isDeleteEmployeeImageSuccess,
    isDeleteEmployeeImageFailure,
    isChangeAdminPasswordSuccess,
    isChangeAdminPasswordFailure,
  ]);

  const [employeeData, setEmployeeData] = useState<ICreateEmployee | false>(
    false
  );
  const [loading, setLoading] = useState(false);
  const [photoData, setPhotoData] = useState<File | undefined>();
  const [value, setValue] = React.useState(1);

  const { id } = Router.query;

  useEffect(() => {
    dispatch(employeeByIdRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (isEmployeeByIdSuccess && prevIsEmployeeByIdSuccess === false) {
      setEmployeeData({
        email: employeeByIdData?.email,
        firstName: employeeByIdData?.firstName,
        lastName: employeeByIdData?.lastName,
        patronymic: employeeByIdData?.patronymic,
        role: employeeByIdData?.role,
        skills: employeeByIdData?.skills,
        phoneNumber: employeeByIdData?.phoneNumber,
        gender: employeeByIdData?.gender,
        country: employeeByIdData?.country,
        city: employeeByIdData?.city,
        image: employeeByIdData?.image,
        streetAddress: employeeByIdData?.streetAddress,
        salary: employeeByIdData.salary,
        birthDate: employeeByIdData?.birthDate,
        startWork: employeeByIdData?.startWork,
        endWork: employeeByIdData?.endWork,
      });
    }
  }, [isEmployeeByIdSuccess, employeeByIdData, prevIsEmployeeByIdSuccess]);

  useEffect(() => {
    if (
      (isEditEmployeeSuccess && prevIsEditEmployeeSuccess === false) ||
      (isDeleteEmployeeImageSuccess &&
        prevIsDeleteEmployeeImageSuccess === false) ||
      (prevIsChangeAdminPasswordSuccess === false &&
        isChangeAdminPasswordSuccess)
    ) {
      enqueueSnackbar(
        isEditEmployeeSuccess && prevIsEditEmployeeSuccess === false
          ? "Employee details successfully updated"
          : "Image successfully deleted",
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      );
      if (isEditEmployeeSuccess && prevIsEditEmployeeSuccess === false) {
        Router.push(`/dashboard/admin/${id}`);
      }
      setLoading(false);
    }
  }, [
    successMessage,
    enqueueSnackbar,
    isEditEmployeeSuccess,
    prevIsEditEmployeeSuccess,
    isDeleteEmployeeImageSuccess,
    prevIsDeleteEmployeeImageSuccess,
    isChangeAdminPasswordSuccess,
    prevIsChangeAdminPasswordSuccess,
    id,
  ]);

  useEffect(() => {
    if (
      (isEditEmployeeFailure && prevIsEditEmployeeFailure === false) ||
      (isDeleteEmployeeImageFailure &&
        prevIsDeleteEmployeeImageFailure === false) ||
      (isChangeAdminPasswordFailure &&
        prevIsChangeAdminPasswordFailure === false)
    ) {
      enqueueSnackbar(errorMessage || errorMessagePasswordChange, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [
    errorMessage,
    enqueueSnackbar,
    isDeleteEmployeeImageFailure,
    isEditEmployeeFailure,
    prevIsDeleteEmployeeImageFailure,
    prevIsEditEmployeeFailure,
    isChangeAdminPasswordFailure,
    prevIsChangeAdminPasswordFailure,
  ]);

  const onImageDelete = () => {
    dispatch(deleteEmployeeImageRequest(id));
  };

  const onFinish = (values: FormikValues) => {
    setLoading(true);
    delete values.email;
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }

    dispatch(editEmployeeRequest({ data, id }));
  };

  const onFinishPassword = (values: FormikValues) => {
    dispatch(changeAdminPasswordRequest({ values, id }));
  };

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <Typography component="h1" variant="h5">
          Edit admin information
        </Typography>
        <Box sx={{ width: "100%" }}>
          <TabContext value={`${value}`}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={(_, index: number) => setValue(index)}
                aria-label="lab API tabs example"
              >
                <Tab label="Admin details" value="1" />
                <Tab label="Change password" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              {employeeData ? (
                <EmployeeForms
                  role="Admin"
                  onFinish={onFinish}
                  initialState={employeeData}
                  loading={loading}
                  cancelText={true}
                  submitText="Save"
                >
                  <Grid item sm={12}>
                    <ImageCustomField
                      label="Upload admin image"
                      photoData={photoData}
                      setPhotoData={setPhotoData}
                    >
                      {employeeByIdData?.image && !photoData && (
                        <EditImage
                          imageUrl={employeeByIdData?.image}
                          onDelete={onImageDelete}
                        />
                      )}
                    </ImageCustomField>
                  </Grid>
                </EmployeeForms>
              ) : (
                <Box>Loading</Box>
              )}
            </TabPanel>
            <TabPanel value="2">
              <Formik
                initialValues={{
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  password: Yup.string().min(
                    8,
                    "Password must be at least 8 characters"
                  ),
                  confirmPassword: Yup.string().oneOf(
                    [Yup.ref("password"), null],
                    "Passwords must match"
                  ),
                })}
                onSubmit={(values) => onFinishPassword(values)}
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
                            Password change
                          </Typography>
                        </Grid>

                        <Grid item xs={24}>
                          <Grid item sm={3}>
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
                        </Grid>
                        <Grid item xs={12}>
                          <Grid item sm={3}>
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
                        </Grid>
                      </Grid>
                      <Grid item xs={12} className="d-flex j-end">
                        <LoadingButton
                          loading={isChangeAdminPasswordRequest}
                          type="submit"
                          startIcon={<SendIcon />}
                          loadingPosition="start"
                          sx={{ mt: 3, mb: 2 }}
                          variant="contained"
                        >
                          Save
                        </LoadingButton>
                      </Grid>
                    </Box>
                  </Form>
                )}
              </Formik>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
    </Card>
  );
};

EmployeeEdit.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default EmployeeEdit;
