import { NextPage } from "next";
import Router from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import { postCreateCompanyRequest } from "store/company/action";
import { RootState } from "types/iReducer";
import Dashboard from "component/layout/Dashboard";
import CompanyForms from "component/forms/CompanyForms";
import ImageCustomField from "component/forms/formField/ImageCustomField";

const AddCompany = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    errorMessage,
    isCreateCompanyRequest,
    isCreateCompanySuccess,
    isCreateCompanyFailure,
    successMessage,
  } = useSelector((state: RootState) => state.company);

  const [prevIsCreateCompanySuccess, prevIsCreateCompanyFailure] =
    usePreviousList<boolean>([isCreateCompanySuccess, isCreateCompanyFailure]);

  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    if (isCreateCompanySuccess && prevIsCreateCompanySuccess === false) {
      enqueueSnackbar("Company successfully created", {
        variant: "success",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
        autoHideDuration: 1000,
      });
      Router.push("/dashboard/company");
    }
  }, [successMessage, isCreateCompanySuccess, prevIsCreateCompanySuccess]);

  useEffect(() => {
    if (isCreateCompanyFailure && prevIsCreateCompanyFailure === false) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  }, [errorMessage, isCreateCompanyFailure, prevIsCreateCompanyFailure]);

  const onFinish = (values: FormikValues) => {
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }
    dispatch(postCreateCompanyRequest(data));
  };

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h5">
          Create company
        </Typography>
        <CompanyForms
          onFinish={onFinish}
          loading={isCreateCompanyRequest}
          cancelText={true}
          submitText="Save"
        >
          <Grid item sm={12}>
            <ImageCustomField
              photoData={photoData}
              setPhotoData={setPhotoData}
            />
          </Grid>
        </CompanyForms>
      </Box>
    </Card>
  );
};

AddCompany.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddCompany;
