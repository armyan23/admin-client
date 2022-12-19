import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import Image from "next/image";
import moment from "moment";
import { Box, Card, Typography, Rating, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import UndoIcon from "@mui/icons-material/Undo";

import { RootState } from "types/iReducer";
import {
  deleteEmployeeRequest,
  employeeByIdRequest,
  restoreEmployeeRequest,
} from "store/employee/action";
import ProfileImage from "component/profile/ProfileImage";
import Dashboard from "component/layout/Dashboard";
import SimpleModal from "component/modal/SimpleModal";

const Employee = () => {
  const dispatch = useDispatch();

  const { employeeByIdData }: any = useSelector(
    (state: RootState) => state.employee
  );

  const [value, setValue] = React.useState<number | null>(2);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const { id } = Router.query;
  const employeeStatus = employeeByIdData.endWork;

  useEffect(() => {
    dispatch(employeeByIdRequest(id));
  }, [dispatch, id]);

  const onEdit = () => {
    Router.push(`/dashboard/employees/edit/${id}`);
  };

  const onDelete = () => {
    dispatch(deleteEmployeeRequest(id));
  };

  const onRestore = () => {
    dispatch(restoreEmployeeRequest(id));
  };

  return (
    <Card>
      {/*<Image src={`${process.env.NEXT_PUBLIC_API_SERVER}${employeeByIdData.image}`} alt="employee" width={200} height={250} />*/}
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs="auto">
            <ProfileImage
              type={employeeByIdData.gender}
              url={employeeByIdData?.image}
            />
          </Grid>
          <Grid item xs>
            <Typography
              component="h1"
              variant="h5"
              className="d-flex j-between"
              sx={{ mb: 2 }}
            >
              {employeeByIdData?.firstName} {employeeByIdData.lastName}
              <Box>
                {employeeStatus ? (
                  <>
                    <IconButton
                      color="primary"
                      size="small"
                      onClick={() => setOpenModal(true)}
                    >
                      <UndoIcon />
                    </IconButton>
                  </>
                ) : (
                  <>
                    <IconButton
                      aria-label="edit"
                      color="primary"
                      onClick={onEdit}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => setOpenModal(true)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </>
                )}
              </Box>
            </Typography>
            <Box className="d-flex a-center" sx={{ mb: 2 }}>
              Rating
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
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
                  {employeeByIdData.phoneNumber}
                </Grid>
                <Grid item xs={5}>
                  Email:
                </Grid>
                <Grid item xs={7}>
                  {employeeByIdData.email}
                </Grid>
                <Grid item xs={5}>
                  Address:
                </Grid>
                <Grid item xs={7}>
                  {employeeByIdData.country +
                    " " +
                    employeeByIdData.city +
                    " " +
                    employeeByIdData.streetAddress}
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
                  <b>Employee details</b>
                </Grid>
                <Grid item xs={5}>
                  Birth Date:
                </Grid>
                <Grid item xs={7}>
                  {moment(employeeByIdData.birthDate).format("MM/DD/YYYY")}
                </Grid>
                <Grid item xs={5}>
                  Gender:
                </Grid>
                <Grid item xs={7}>
                  {employeeByIdData.gender}
                </Grid>
                <Grid item xs={5}>
                  Skills:
                </Grid>
                <Grid item xs={7}>
                  {employeeByIdData.skills}
                </Grid>
                <Grid item xs={5}>
                  Start work:
                </Grid>
                <Grid item xs={7}>
                  {moment(employeeByIdData.startWork).format("MM/DD/YYYY")}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
      {employeeStatus ? (
        <SimpleModal
          title="Restore employee"
          body="Do you agree to reinstate the employee?"
          open={openModal}
          setOpen={setOpenModal}
          agree={onRestore}
        />
      ) : (
        <SimpleModal
          title="Remove employee"
          body="Do you agree to remove the employee from this job?"
          open={openModal}
          setOpen={setOpenModal}
          agree={onDelete}
        />
      )}
    </Card>
  );
};

Employee.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Employee;
