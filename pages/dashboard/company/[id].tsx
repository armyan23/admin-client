import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card } from "@mui/material";
import { getCompanyByIdRequest } from "store/company/action";
import Dashboard from "component/layout/Dashboard";
import Router from "next/router";
import { useEffect } from "react";
import { RootState } from "types/iReducer";

const Company = () => {
  const dispatch = useDispatch();

  const { companyByIdData } = useSelector((state: RootState) => state.company);

  const { id } = Router.query;

  useEffect(() => {
    dispatch(getCompanyByIdRequest(id));
  }, []);
  console.log(companyByIdData);

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
