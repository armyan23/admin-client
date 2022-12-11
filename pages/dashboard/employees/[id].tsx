import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Box, Card } from "@mui/material";
import { RootState } from "types/iReducer";
import { employeeByIdRequest } from "store/employee/action";
import Dashboard from "component/layout/Dashboard";

const Employee = () => {
  const dispatch = useDispatch();

  const {
    isEmployeeByIdSuccess,
    isEmployeeByIdFailure,
    employeeByIdData,
    errorMessage,
  } = useSelector((state: RootState) => state.employee);

  const { id } = Router.query;

  useEffect(() => {
    dispatch(employeeByIdRequest(id));
  }, []);

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        Employee By id - {id}
      </Box>
    </Card>
  );
};

Employee.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Employee;
