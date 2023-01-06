import React, { useEffect, useState } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import { FormikValues } from "formik";
import { useSnackbar } from "notistack";

import usePreviousList from "useHooks/usePreviousList";
import {
  deleteImageCompanyRequest,
  getCompanyByIdRequest,
  updateCompanyRequest,
} from "store/company/action";
import { ICompanyReducer, RootState } from "types/iReducer";
import { ICompanyForm } from "types/iForm";
import Dashboard from "component/layout/Dashboard";
import EditImage from "component/ui/image/EditImage";
import CompanyForms from "component/forms/CompanyForms";
import ImageCustomField from "component/forms/formField/ImageCustomField";

const EmployeeEdit = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    isCompanyByIdSuccess,
    isUpdateCompanyRequest,
    isUpdateCompanySuccess,
    isUpdateCompanyFailure,
    isDeleteImageCompanySuccess,
    isDeleteImageCompanyFailure,
    companyByIdData,
    errorMessage,
  }: ICompanyReducer = useSelector((state: RootState) => state.company);

  const [
    prevIsUpdateCompanySuccess,
    prevIsUpdateCompanyFailure,
    prevIsCompanyByIdSuccess,
    prevIsDeleteImageCompanySuccess,
    prevIsDeleteImageCompanyFailure,
  ] = usePreviousList<boolean>([
    isUpdateCompanySuccess,
    isUpdateCompanyFailure,
    isCompanyByIdSuccess,
    isDeleteImageCompanySuccess,
    isDeleteImageCompanyFailure,
  ]);

  const [companyData, setCompanyData] = useState<ICompanyForm | false>(false);
  const [photoData, setPhotoData] = useState<File | undefined>();

  const { id } = Router.query;

  useEffect(() => {
    dispatch(getCompanyByIdRequest(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (isCompanyByIdSuccess && prevIsCompanyByIdSuccess === false) {
      setCompanyData({
        nameCompany: companyByIdData?.nameCompany,
        aboutCompany: companyByIdData?.aboutCompany,
        typeCompany: companyByIdData?.typeCompany,
        phoneNumber: companyByIdData?.phoneNumber,
        email: companyByIdData?.email,
        website: companyByIdData?.website,
        createdDate: companyByIdData?.createdDate,
      });
    }
  }, [companyByIdData, isCompanyByIdSuccess, prevIsCompanyByIdSuccess]);

  useEffect(() => {
    if (
      (isUpdateCompanySuccess && prevIsUpdateCompanySuccess === false) ||
      (isDeleteImageCompanySuccess && prevIsDeleteImageCompanySuccess === false)
    ) {
      enqueueSnackbar(
        isUpdateCompanySuccess && prevIsUpdateCompanySuccess === false
          ? "Company details successfully updated"
          : "Image successfully deleted",
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
        }
      );
      if (isUpdateCompanySuccess && prevIsUpdateCompanySuccess === false) {
        Router.push(`/dashboard/company/${id}`);
      }
    }
  }, [
    id,
    enqueueSnackbar,
    prevIsUpdateCompanySuccess,
    isUpdateCompanySuccess,
    prevIsDeleteImageCompanySuccess,
    isDeleteImageCompanySuccess,
  ]);

  useEffect(() => {
    if (
      (isUpdateCompanyFailure && prevIsUpdateCompanyFailure === false) ||
      (isDeleteImageCompanyFailure && prevIsDeleteImageCompanyFailure === false)
    ) {
      enqueueSnackbar(errorMessage, {
        variant: "error",
        anchorOrigin: {
          vertical: "top",
          horizontal: "center",
        },
      });
    }
  }, [
    errorMessage,
    enqueueSnackbar,
    isUpdateCompanyFailure,
    prevIsUpdateCompanyFailure,
    isDeleteImageCompanyFailure,
    prevIsDeleteImageCompanyFailure,
  ]);

  const onImageDelete = () => {
    dispatch(deleteImageCompanyRequest(id));
  };

  const onDeleteCompany = () => {
    console.log(id);
  };

  const onFinish = (values: FormikValues) => {
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }

    dispatch(updateCompanyRequest({ data: data, id }));
  };
  // TODO: ADD delete company API for FRONT AND BACK

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <Typography component="h1" variant="h5">
          Edit company information
        </Typography>
        {companyData ? (
          <CompanyForms
            onFinish={onFinish}
            initialState={companyData}
            loading={isUpdateCompanyRequest}
            cancelText={true}
            submitText="Save"
          >
            <Grid item sm={12}>
              <ImageCustomField
                label="Upload company logo"
                photoData={photoData}
                setPhotoData={setPhotoData}
              >
                {companyByIdData?.image && !photoData ? (
                  <EditImage
                    imageUrl={companyByIdData?.image}
                    onDelete={onImageDelete}
                  />
                ) : null}
              </ImageCustomField>

              <Button onClick={onDeleteCompany}>Delete Company</Button>
            </Grid>
          </CompanyForms>
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
