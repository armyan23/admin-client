import React, { useEffect, useState } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import { createAdminRequest } from "store/admin/action";
import { RootState } from "types/iReducer";
import Dashboard from "component/layout/Dashboard";
import EmployeeForms from "component/forms/EmployeeForms";
import ImageCustomField from "component/forms/formField/ImageCustomField";

const AddAdmin = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    isCreateAdminRequest,
    isCreateAdminSuccess,
    isCreateAdminFailure,
    errorMessage,
  } = useSelector((state: RootState) => state.admin);

  const [prevIsCreateAdminSuccess, prevIsCreateAdminFailure] =
    usePreviousList<boolean>([isCreateAdminSuccess, isCreateAdminFailure]);

  const [photoData, setPhotoData] = useState<File | undefined>();

  useEffect(() => {
    if (isCreateAdminSuccess && prevIsCreateAdminSuccess === false) {
      enqueueSnackbar("Admin successfully created", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 1000,
      });
      Router.push("/dashboard/admin");
    }
  }, [prevIsCreateAdminSuccess, isCreateAdminSuccess, enqueueSnackbar]);

  useEffect(() => {
    if (isCreateAdminFailure && prevIsCreateAdminFailure === false) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  }, [
    enqueueSnackbar,
    errorMessage,
    isCreateAdminFailure,
    prevIsCreateAdminFailure,
  ]);

  const onFinish = (values: FormikValues) => {
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }

    dispatch(createAdminRequest(data));
  };

  return (
    <div>
      <Card>
        <Box sx={{ p: 2 }}>
          <Typography component="h1" variant="h5">
            Create Admin
          </Typography>
          <EmployeeForms
            role="Admin"
            submitText="Create Admin"
            onFinish={onFinish}
            loading={isCreateAdminRequest}
          >
            <Grid item sm={12}>
              <ImageCustomField
                label="Upload admin image"
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

AddAdmin.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddAdmin;
