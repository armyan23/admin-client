import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { RootState } from "types/iReducer";
import {
  deleteEmployeeRequest,
  getEmployeesRequest,
} from "store/employee/action";
import Dashboard from "component/layout/Dashboard";
import EmployeeTable from "component/table/EmployeeTable";

const Employees = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    dispatch(getEmployeesRequest({ type: "active" }));
  }, [dispatch]);

  const selectByEmployeeId = (id: number) => {
    Router.push(`/dashboard/employees/${id}`);
  };

  const onEdit = (id: number) => {
    Router.push(`/dashboard/employees/edit/${id}`);
  };

  const onDelete = (id: number) => {
    dispatch(deleteEmployeeRequest(id));
  };

  const Action = (item: any) => (
    <>
      <IconButton size="small" onClick={() => onEdit(item.id)}>
        <EditIcon />
      </IconButton>
      <IconButton size="small" onClick={() => onDelete(item.id)}>
        <DeleteIcon />
      </IconButton>
      <IconButton size="small" onClick={() => selectByEmployeeId(item.id)}>
        <InfoIcon fontSize="inherit" />
      </IconButton>
    </>
  );

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <div className="d-flex j-between">
          <Typography component="h1" variant="h5">
            Employees
          </Typography>
          <Button
            variant="contained"
            onClick={() => Router.push("/dashboard/employees/add")}
          >
            +
          </Button>
        </div>
        <EmployeeTable data={data} action={Action} />
      </Box>
    </Card>
  );
};

Employees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Employees;
