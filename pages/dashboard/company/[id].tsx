import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NextPage } from "next";
import Router from "next/router";
import { Box, Card, Grid, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment/moment";
import { RootState } from "types/iReducer";
import { getCompanyByIdRequest } from "store/company/action";
import Dashboard from "component/layout/Dashboard";
import ProfileImage from "component/ui/image/ProfileImage";

const Company = () => {
  const dispatch = useDispatch();

  const { isCompanyByIdRequest, companyByIdData, companyDetails } = useSelector(
    (state: RootState) => state.company
  );

  const { id } = Router.query;

  useEffect(() => {
    dispatch(getCompanyByIdRequest(id));
  }, [dispatch, id]);

  const onEdit = () => {
    Router.push(`/dashboard/company/edit/${id}`);
  };

  return (
    <Card>
      <Box sx={{ p: 2, gap: "20px", display: "grid" }}>
        Company By id - {id}
      </Box>
    </Card>
  );
};

Company.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Company;
