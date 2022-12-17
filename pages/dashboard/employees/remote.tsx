import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import dayjs from "dayjs";
import {
  Box,
  Button,
  Card,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { ITypeMap } from "types/iUtils";
import { RootState } from "types/iReducer";
import { employeeTypeTable } from "util/utils";
import { getEmployeesRequest } from "store/employee/action";
import Dashboard from "component/layout/Dashboard";

const RemoteEmployees = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state: RootState) => state.employee);

  useEffect(() => {
    dispatch(getEmployeesRequest({ type: "deleted" }));
  }, [dispatch]);

  const selectByEmployeeId = (id: any) => {
    Router.push(`/dashboard/employees/${id}`);
  };

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
                  <TableCell>{item.country}</TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => selectByEmployeeId(item.id)}
                    >
                      <InfoIcon fontSize="inherit" />
                    </IconButton>
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

RemoteEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default RemoteEmployees;
