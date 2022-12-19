import { NextPage } from "next";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import { postCreateEmployeeRequest } from "store/employee/action";
import { RootState } from "types/iReducer";
import Dashboard from "component/layout/Dashboard";
import EmployeeForms from "component/forms/EmployeeForms";

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
    dispatch(postCreateEmployeeRequest(values));
  };

  return (
    <div>
      <Card>
        <Box sx={{ p: 2 }}>
          <Typography component="h1" variant="h5">
            Create Employee
          </Typography>
          <EmployeeForms onFinish={onFinish} loading={loading} />
        </Box>
      </Card>
    </div>
  );
};

AddEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddEmployees;
