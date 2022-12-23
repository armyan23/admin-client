import { NextPage } from "next";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import {
  editEmployeeRequest,
  employeeByIdRequest,
} from "store/employee/action";
import { RootState } from "types/iReducer";
import { ICreateEmployee } from "types/iForm";
import Dashboard from "component/layout/Dashboard";
import EmployeeForms from "component/forms/EmployeeForms";
import ImageCustomField from "component/forms/formField/ImageCustomField";

const EmployeeEdit = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    isEmployeeByIdSuccess,
    isEditEmployeeSuccess,
    isEditEmployeeFailure,
    employeeByIdData,
    successMessage,
    errorMessage,
  }: any = useSelector((state: RootState) => state.employee);

  const [
    prevIsEmployeeByIdSuccess,
    prevIsEditEmployeeSuccess,
    prevIsEditEmployeeFailure,
  ] = usePreviousList<boolean>([
    isEmployeeByIdSuccess,
    isEditEmployeeSuccess,
    isEditEmployeeFailure,
  ]);

  const [employeeData, setEmployeeData] = useState<ICreateEmployee | false>(
    false
  );
  const [loading, setLoading] = useState(false);
  const [photoData, setPhotoData] = useState();

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
        birthDate: employeeByIdData?.birthDate,
        startWork: employeeByIdData?.startWork,
        endWork: employeeByIdData?.endWork,
      });
    }
  }, [isEmployeeByIdSuccess, employeeByIdData, prevIsEmployeeByIdSuccess]);

  useEffect(() => {
    if (isEditEmployeeSuccess && prevIsEditEmployeeSuccess === false) {
      enqueueSnackbar("Employee successfully updated", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      Router.push(`/dashboard/employees/${id}`);
      setLoading(false);
    }
  }, [
    isEditEmployeeSuccess,
    prevIsEditEmployeeSuccess,
    successMessage,
    enqueueSnackbar,
  ]);

  useEffect(() => {
    if (isEditEmployeeFailure && prevIsEditEmployeeFailure === false) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [errorMessage, isEditEmployeeFailure, prevIsEditEmployeeFailure]);

  const onFinish = (values: FormikValues) => {
    setLoading(true);
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }

    dispatch(editEmployeeRequest({ data, id }));
  };

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <Typography component="h1" variant="h5">
          Edit employee information
        </Typography>
        {employeeData ? (
          <EmployeeForms
            onFinish={onFinish}
            initialState={employeeData}
            loading={loading}
            cancelText={true}
            submitText="Save"
          >
            <Grid item sm={12}>
              <ImageCustomField
                photoData={photoData}
                setPhotoData={setPhotoData}
              />
              {employeeData?.image && !photoData && (
                <img
                  src={employeeData?.image}
                  alt={"employee-image"}
                  height={100}
                />
              )}
            </Grid>
          </EmployeeForms>
        ) : (
          <Box>Loading</Box>
        )}
      </Box>
    </Card>
  );
};

EmployeeEdit.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default EmployeeEdit;
