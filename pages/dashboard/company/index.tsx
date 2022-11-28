import React, { useEffect } from "react";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
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

import {
  getAllCompaniesRequest,
  getCompanyByIdRequest,
} from "store/company/action";
import { RootState } from "types/iReducer";
import { ITypeMap } from "types/iUtils";
import { companyTypeTable } from "util/utils";
import Dashboard from "component/layout/Dashboard";

const Company = () => {
  const dispatch = useDispatch();
  const { allCompanyData } = useSelector((state: RootState) => state.company);

  useEffect(() => {
    dispatch(getAllCompaniesRequest());
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
                {companyTypeTable.map((elem: ITypeMap) => (
                  <TableCell key={elem.key}>{elem.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {allCompanyData.map((item: any) => (
                <TableRow
                  key={item.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="item">
                    {item.nameCompany}
                  </TableCell>
                  <TableCell>{item.phoneNumber}</TableCell>
                  <TableCell>{item.typeCompany}</TableCell>
                  <TableCell>
                    {dayjs(item.createdDate).format("DD/MM/YYYY")}
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

Company.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Company;
