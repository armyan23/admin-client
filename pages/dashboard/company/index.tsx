import React, { useEffect } from "react";
import Router from "next/router";
import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
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
import EditIcon from "@mui/icons-material/Edit";
import { getAllCompaniesRequest } from "store/company/action";
import { RootState } from "types/iReducer";
import { ITypeMap } from "types/iUtils";
import { companyTypeTable } from "util/utils";
import Dashboard from "component/layout/Dashboard";
import Empty from "component/ui/Empty";

const Company = () => {
  const dispatch = useDispatch();
  const { allCompanyData } = useSelector((state: RootState) => state.company);

  useEffect(() => {
    dispatch(getAllCompaniesRequest());
  }, [dispatch]);

  const onEdit = (id: any) => {
    Router.push(`/dashboard/company/edit/${id}`);
  };

  const selectByCompanyId = (id: any) => {
    Router.push(`/dashboard/company/${id}`);
  };

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        <div className="d-flex j-between">
          <Typography component="h1" variant="h5">
            Companies
          </Typography>
          <Button
            variant="contained"
            onClick={() => Router.push("/dashboard/company/add")}
          >
            +
          </Button>
        </div>
        {companyTypeTable.length ? (
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  {companyTypeTable.map((elem: ITypeMap) => (
                    <TableCell key={elem.key}>{elem.name}</TableCell>
                  ))}

                  <TableCell>Info</TableCell>
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
                    <TableCell>
                      <IconButton size="small" onClick={() => onEdit(item.id)}>
                        <EditIcon fontSize="inherit" />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => selectByCompanyId(item.id)}
                      >
                        <InfoIcon fontSize="inherit" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Empty />
        )}
      </Box>
    </Card>
  );
};

Company.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Company;
