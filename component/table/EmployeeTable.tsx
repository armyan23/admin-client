import React from "react";
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
import ProfileImage from "component/profile/ProfileImage";
import Empty from "component/ui/Empty";

const EmployeesTable = ({ action, data }: any) => {
  return data.length ? (
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
                <ProfileImage
                  type={item.gender}
                  url={item?.image}
                  width={75}
                  height={75}
                />
              </TableCell>
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
  ) : (
    <Empty />
  );
};

export default EmployeesTable;
