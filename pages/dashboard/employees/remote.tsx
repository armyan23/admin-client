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
import SimpleModal from "component/modal/SimpleModal";

const RemoteEmployees = () => {
  const dispatch = useDispatch();

  const { employeesData } = useSelector((state: RootState) => state.employee);

  const [restoreModal, setRestoreModal] = React.useState<boolean>(false);
  const [selectedId, setSelectedId] = React.useState<number>();

  useEffect(() => {
    dispatch(getEmployeesRequest({ type: "deleted" }));
  }, [dispatch]);

  const selectByEmployeeId = (id: any) => {
    Router.push(`/dashboard/employees/${id}`);
  };

  const openRestoreModal = (id: number) => {
    setSelectedId(id);
    setRestoreModal(true);
  };

  const onRestore = () => {
    dispatch(restoreEmployeeRequest(selectedId));
  };

  const Action = (item: any) => (
    <>
      <IconButton size="small" onClick={() => openRestoreModal(item.id)}>
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

        <EmployeeTable data={employeesData} action={Action} />
      </Box>
      <SimpleModal
        title="Restore employee"
        body="Do you agree to reinstate the employee?"
        open={restoreModal}
        setOpen={setRestoreModal}
        agree={onRestore}
      />
    </Card>
  );
};

RemoteEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default RemoteEmployees;
