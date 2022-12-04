import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";
import {
  Box,
  Button,
  Card,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { employeeTypeTable } from "util/utils";
import { ITypeMap } from "types/iUtils";
import dayjs from "dayjs";
import { RootState } from "types/iReducer";
import {
  getAllCompaniesRequest,
  getCompanyByIdRequest,
} from "store/company/action";
import { getEmployeesRequest } from "store/employee/action";

const Employees = () => {
  const dispatch = useDispatch();

  const { data } = useSelector(
    (state: RootState) => state.employee
  );

  useEffect(() => {
    dispatch(getEmployeesRequest());
  }, [dispatch]);

  const getAllCompany = () => {
    dispatch(getAllCompaniesRequest());
  };

  const getCompanyById = () => {
    dispatch(getCompanyByIdRequest());
  };

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h5">
          Companies
        </Typography>
        <Button onClick={() => getAllCompany()}>Get all company</Button>
        <Button onClick={() => getCompanyById()}>Get company by id</Button>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {employeeTypeTable.map((elem: ITypeMap) => (
                  <TableCell key={elem.key}>{elem.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.map((item: any) => (
                  <TableRow
                      key={item.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="item">
                      {item.firstName}
                    </TableCell>
                    <TableCell>{item.lastName}</TableCell>
                    <TableCell>{item.phoneNumber}</TableCell>
                    <TableCell>{item.gender}</TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      {dayjs(item.birthDate).format("DD/MM/YYYY")}
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Card>
  );
};

Employees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Employees;
