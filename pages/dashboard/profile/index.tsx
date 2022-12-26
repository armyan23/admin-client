import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import { NextPage } from "next";
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment/moment";
import { RootState } from "types/iReducer";
import { profileDataRequest } from "store/profile/actions";
import usePreviousList from "useHooks/usePreviousList";
import ProfileImage from "component/profile/ProfileImage";
import Dashboard from "component/layout/Dashboard";

const MyProfile = () => {
  const dispatch = useDispatch();

  const { isProfileDataSuccess, profileData }: any = useSelector(
    (state: RootState) => state.profile
  );

  const [prevIsProfileDataSuccess] = usePreviousList<boolean>([
    isProfileDataSuccess,
  ]);

  const [profileInfo, setProfileData] = useState<any>({});

  useEffect(() => {
    if (isProfileDataSuccess && prevIsProfileDataSuccess === false) {
      setProfileData(profileData);
    }
  }, [profileData, isProfileDataSuccess, prevIsProfileDataSuccess]);

  useEffect(() => {
    dispatch(profileDataRequest());
  }, [dispatch]);

  const onEdit = () => {
    Router.push(`/personal/settings`);
  };

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        {profileData ? (
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs="auto">
              <ProfileImage
                type={profileData.details.gender}
                url={profileData.details?.image}
              />
            </Grid>
            <Grid item xs>
              <Typography
                component="h1"
                variant="h5"
                className="d-flex j-between"
                sx={{ mb: 2 }}
              >
                {profileData.details?.firstName} {profileData.details.lastName}
                <Box>
                  <IconButton
                    aria-label="edit"
                    color="primary"
                    onClick={onEdit}
                  >
                    <EditIcon />
                  </IconButton>
                </Box>
              </Typography>

              <Box className="d-flex a-center">
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={5}>
                    Phone number:
                  </Grid>
                  <Grid item xs={7}>
                    {profileData.details.phoneNumber}
                  </Grid>
                  <Grid item xs={5}>
                    Email:
                  </Grid>
                  <Grid item xs={7}>
                    {profileInfo.email}
                  </Grid>
                </Grid>
              </Box>

              <Box className="d-flex a-center" sx={{ mt: 3 }}>
                <Grid
                  container
                  rowSpacing={1}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  <Grid item xs={12}>
                    <b>Profile details</b>
                  </Grid>
                  <Grid item xs={5}>
                    Birth date:
                  </Grid>
                  <Grid item xs={7}>
                    {moment(profileData.details.birthDate).format("MM/DD/YYYY")}
                  </Grid>
                  <Grid item xs={5}>
                    Gender:
                  </Grid>
                  <Grid item xs={7}>
                    {profileData.details.gender}
                  </Grid>
                  <Grid item xs={5}>
                    Country:
                  </Grid>
                  <Grid item xs={7}>
                    {profileData.details.country}
                  </Grid>
                  <Grid item xs={5}>
                    City:
                  </Grid>
                  <Grid item xs={7}>
                    {profileData.details.city}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <div> Loading</div>
        )}
      </Box>
    </Card>
  );
};

MyProfile.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default MyProfile;
