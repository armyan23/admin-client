import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment/moment";
import { RootState } from "types/iReducer";
import { getCompanyByIdRequest } from "store/company/action";
import Dashboard from "component/layout/Dashboard";
import ProfileImage from "component/ui/image/ProfileImage";

const Company = () => {
  const dispatch = useDispatch();

  const { isCompanyByIdRequest, companyByIdData, companyDetails } = useSelector(
    (state: RootState) => state.company
  );

  const { id } = Router.query;

  useEffect(() => {
    dispatch(getCompanyByIdRequest(id));
  }, [dispatch, id]);

  const onEdit = () => {
    Router.push(`/dashboard/company/edit/${id}`);
  };

  return (
    <Card>
      {!isCompanyByIdRequest ? (
        <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs="auto">
              <ProfileImage type="Company" url={companyByIdData?.image} />
            </Grid>
            <Grid item xs>
              <Typography
                component="h1"
                variant="h5"
                className="d-flex j-between"
                sx={{ mb: 2 }}
              >
                {companyByIdData.nameCompany}
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
                  <Grid item xs={12}>
                    <b>Contact information</b>
                  </Grid>
                  <Grid item xs={5}>
                    Phone number:
                  </Grid>
                  <Grid item xs={7}>
                    {companyByIdData.phoneNumber}
                  </Grid>
                  <Grid item xs={5}>
                    Email:
                  </Grid>
                  <Grid item xs={7}>
                    {companyByIdData.email}
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
                    <b>Company details</b>
                  </Grid>
                  <Grid item xs={5}>
                    Number of employees:
                  </Grid>
                  <Grid item xs={7}>
                    {companyDetails.count}
                  </Grid>
                  <Grid item xs={5}>
                    Male:
                  </Grid>
                  <Grid item xs={7}>
                    {companyDetails.male}
                  </Grid>
                  <Grid item xs={5}>
                    Female:
                  </Grid>
                  <Grid item xs={7}>
                    {companyDetails.female}
                  </Grid>
                  <Grid item xs={5}>
                    Costs salary:
                  </Grid>
                  <Grid item xs={7}>
                    {companyDetails.costsSalary}
                  </Grid>
                  <Grid item xs={5}>
                    Company created Date:
                  </Grid>
                  <Grid item xs={7}>
                    {moment(companyByIdData.createdDate).format("MM/DD/YYYY")}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <>Loading</>
      )}
    </Card>
  );
};

Company.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Company;
