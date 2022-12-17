import React from "react";
import { NextPage } from "next";
import dayjs from "dayjs";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { ITypeMap } from "types/iUtils";
import { employeeTypeTable } from "util/utils";
import Dashboard from "component/layout/Dashboard";

const EmployeesTable = ({ action, data }: any) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {employeeTypeTable.map((elem: ITypeMap) => (
              <TableCell key={elem.key}>{elem.name}</TableCell>
            ))}
            <TableCell>Action</TableCell>
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
              <TableCell>{action(item)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

EmployeesTable.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default EmployeesTable;
