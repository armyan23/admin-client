import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { Form, Formik, FormikValues } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SendIcon from "@mui/icons-material/Send";
import { useSnackbar } from "notistack";
import {
  profileDataRequest,
  deleteUserImageRequest,
  updateUserDetailsRequest,
} from "store/profile/actions";
import { typeGender } from "util/utils";
import { RootState } from "types/iReducer";
import usePreviousList from "useHooks/usePreviousList";
import EditImage from "component/ui/image/EditImage";
import DateCustomField from "component/forms/formField/DateCustomField";
import ImageCustomField from "component/forms/formField/ImageCustomField";

const UserDetails = () => {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    isProfileDataSuccess,
    isUpdateUserDetailsRequest,
    isUpdateUserDetailsSuccess,
    isUpdateUserDetailsFailure,
    isDeleteUserImageSuccess,
    isDeleteUserImageFailure,
    errorMessage,
    userDetails,
  } = useSelector((state: RootState) => state.profile);

  const [
    prevIsUpdateUserDetailsSuccess,
    prevIsUpdateUserDetailsFailure,
    prevIsDeleteUserImageSuccess,
    prevIsDeleteUserImageFailure,
  ] = usePreviousList<boolean>([
    isUpdateUserDetailsSuccess,
    isUpdateUserDetailsFailure,
    isDeleteUserImageSuccess,
    isDeleteUserImageFailure,
  ]);

  const [photoData, setPhotoData] = useState();

  useEffect(() => {
    if (!isProfileDataSuccess) {
      dispatch(profileDataRequest());
    }
  }, [dispatch, isProfileDataSuccess]);

  useEffect(() => {
    if (
      (isUpdateUserDetailsSuccess &&
        prevIsUpdateUserDetailsSuccess === false) ||
      (isDeleteUserImageSuccess && prevIsDeleteUserImageSuccess === false)
    ) {
      enqueueSnackbar(
        isUpdateUserDetailsSuccess
          ? "Profile details successfully updated"
          : "Image successfully deleted",
        {
          variant: "success",
          anchorOrigin: {
            vertical: "top",
            horizontal: "center",
          },
          autoHideDuration: 1000,
        }
      );
    }
  }, [
    enqueueSnackbar,
    isUpdateUserDetailsSuccess,
    prevIsUpdateUserDetailsSuccess,
    isDeleteUserImageSuccess,
    prevIsDeleteUserImageSuccess,
  ]);

  useEffect(() => {
    if (
      (isUpdateUserDetailsFailure &&
        prevIsUpdateUserDetailsFailure === false) ||
      (isDeleteUserImageFailure && prevIsDeleteUserImageFailure === false)
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
    enqueueSnackbar,
    errorMessage,
    isUpdateUserDetailsFailure,
    prevIsUpdateUserDetailsFailure,
    isDeleteUserImageFailure,
    prevIsDeleteUserImageFailure,
  ]);

  const onCancel = () => {
    Router.push("/dashboard/profile");
  };

  const onImageDelete = () => {
    dispatch(deleteUserImageRequest());
  };

  const onFinish = (values: FormikValues) => {
    const data = new FormData();
    if (photoData) {
      data.append("image", photoData);
    }
    for (const i in values) {
      data.append(i, values[i]);
    }

    dispatch(updateUserDetailsRequest(data));
  };

  return userDetails ? (
    <Formik
      initialValues={userDetails}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().required("Required"),
        lastName: Yup.string(),
        gender: Yup.string(),
        phoneNumber: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        birthDate: Yup.string().required("Required"),
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
                <Typography variant="subtitle2" gutterBottom>
                  Profile Details
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone number"
                  autoComplete="phone"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phoneNumber}
                  helperText={
                    errors.phoneNumber &&
                    touched.phoneNumber &&
                    typeof errors.phoneNumber === "string"
                      ? errors.phoneNumber
                      : null
                  }
                  error={!!(errors.phoneNumber && touched.phoneNumber)}
                />
              </Grid>
              {/*User info*/}
              <Grid item xs={12} sm={6}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First name"
                  autoComplete="firstName"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                  helperText={
                    errors.firstName &&
                    touched.firstName &&
                    typeof errors.firstName === "string"
                      ? errors.firstName
                      : ""
                  }
                  error={!!(errors.firstName && touched.firstName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl
                  fullWidth
                  error={!!(errors.gender && touched.gender)}
                >
                  <InputLabel id="type-gender-select-label">Gender</InputLabel>
                  <Select
                    labelId="type-gender-select-label"
                    id="gender"
                    name="gender"
                    label="Gender"
                    fullWidth
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gender}
                  >
                    {typeGender.map((item) => (
                      <MenuItem key={item.key} value={item.type}>
                        {item.name}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.gender &&
                  touched.gender &&
                  typeof errors.gender === "string" ? (
                    <FormHelperText error>{errors.gender}</FormHelperText>
                  ) : null}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  autoComplete="lastName"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  helperText={
                    errors.lastName &&
                    touched.lastName &&
                    typeof errors.lastName === "string"
                      ? errors.lastName
                      : null
                  }
                  error={!!(errors.lastName && touched.lastName)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DateCustomField
                  name="birthDate"
                  label="Birth date"
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  touched={touched}
                  errors={errors}
                  values={values}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="country"
                  name="country"
                  label="Country"
                  autoComplete="country"
                  fullWidth
                  onBlur={handleBlur}
                  value={values.country}
                  onChange={handleChange}
                  helperText={
                    errors.country &&
                    touched.country &&
                    typeof errors.country === "string"
                      ? errors.country
                      : null
                  }
                  error={!!(errors.country && touched.country)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  id="city"
                  name="city"
                  label="City"
                  autoComplete="city"
                  fullWidth
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.city}
                  helperText={
                    errors.city &&
                    touched.city &&
                    typeof errors.city === "string"
                      ? errors.city
                      : null
                  }
                  error={!!(errors.city && touched.city)}
                />
              </Grid>

              <Grid item xs={12}>
                <ImageCustomField
                  photoData={photoData}
                  setPhotoData={setPhotoData}
                />
                {userDetails?.image && !photoData && (
                  <EditImage
                    imageUrl={userDetails?.image}
                    onDelete={onImageDelete}
                  />
                )}
              </Grid>
            </Grid>
            <Grid item xs={12} className="d-flex j-end">
              <Button sx={{ mt: 3, mb: 2, mr: 2 }} onClick={onCancel}>
                Cancel
              </Button>
              <LoadingButton
                loading={isUpdateUserDetailsRequest}
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
  ) : (
    <div>loading</div>
  );
};
export default UserDetails;
