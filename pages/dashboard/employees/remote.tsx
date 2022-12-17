import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Box, Card, IconButton, Typography } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import UndoIcon from "@mui/icons-material/Undo";
import { RootState } from "types/iReducer";
import {
  getEmployeesRequest,
  restoreEmployeeRequest,
} from "store/employee/action";
import Dashboard from "component/layout/Dashboard";
import EmployeeTable from "component/table/EmployeeTable";

const RemoteEmployees = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    dispatch(getEmployeesRequest({ type: "deleted" }));
  }, [dispatch]);

  const selectByEmployeeId = (id: any) => {
    Router.push(`/dashboard/employees/${id}`);
  };

  const onRestore = (id: number) => {
    dispatch(restoreEmployeeRequest(id));
  };

  const Action = (item: any) => (
    <>
      <IconButton size="small" onClick={() => onRestore(item.id)}>
        <UndoIcon />
      </IconButton>
      <IconButton size="small" onClick={() => selectByEmployeeId(item.id)}>
        <InfoIcon fontSize="inherit" />
      </IconButton>
    </>
  );

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <Typography component="h1" variant="h5">
          Remote Employees
        </Typography>

        <EmployeeTable data={data} action={Action} />
      </Box>
    </Card>
  );
};

RemoteEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default RemoteEmployees;
