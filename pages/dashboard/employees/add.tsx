import React, { useEffect, useState } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import { postCreateEmployeeRequest } from "store/employee/action";
import { RootState } from "types/iReducer";
import Dashboard from "component/layout/Dashboard";
import EmployeeForms from "component/forms/EmployeeForms";
import ImageCustomField from "component/forms/formField/ImageCustomField";

const AddEmployees = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    errorMessage,
    isCreateEmployeeSuccess,
    isCreateEmployeeFailure,
    successMessage,
  } = useSelector((state: RootState) => state.employee);

  const [prevIsCreateEmployeeSuccess, prevIsCreateEmployeeFailure] =
    usePreviousList<boolean>([
      isCreateEmployeeSuccess,
      isCreateEmployeeFailure,
    ]);

  const [loading, setLoading] = useState(false);
  const [photoData, setPhotoData] = useState<File | undefined>();

  useEffect(() => {
    if (isCreateEmployeeSuccess && prevIsCreateEmployeeSuccess === false) {
      enqueueSnackbar(successMessage, {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 1000,
      });
      Router.push("/dashboard/employees");
      setLoading(false);
    }
  }, [
    successMessage,
    prevIsCreateEmployeeSuccess,
    isCreateEmployeeSuccess,
    enqueueSnackbar,
  ]);

  useEffect(() => {
    if (isCreateEmployeeFailure && prevIsCreateEmployeeFailure === false) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
      setLoading(false);
    }
  }, [
    enqueueSnackbar,
    errorMessage,
    isCreateEmployeeFailure,
    prevIsCreateEmployeeFailure,
  ]);

  const onFinish = (values: FormikValues) => {
    setLoading(true);
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }

    dispatch(postCreateEmployeeRequest(data));
  };

  return (
    <div>
      <Card>
        <Box sx={{ p: 2 }}>
          <Typography component="h1" variant="h5">
            Create Employee
          </Typography>
          <EmployeeForms onFinish={onFinish} loading={loading}>
            <Grid item sm={12}>
              <ImageCustomField
                label="Upload Employee image"
                photoData={photoData}
                setPhotoData={setPhotoData}
              />
            </Grid>
          </EmployeeForms>
        </Box>
      </Card>
    </div>
  );
};

AddEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddEmployees;
