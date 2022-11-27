import { NextPage } from "next";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import {
  getAllCompaniesRequest,
  getCompanyByIdRequest,
} from "store/company/action";
import { RootState } from "types/iReducer";
import Dashboard from "component/layout/Dashboard";

const Company = () => {
  const dispatch = useDispatch();
  const { allCompanyData, createCompanyData } = useSelector(
    (state: RootState) => state.company
  );

  const getAllCompany = () => {
    dispatch(getAllCompaniesRequest());
  };

  const getCompanyById = () => {
    dispatch(getCompanyByIdRequest());
  };
  return (
    <div>
      Company
      <Button onClick={() => getAllCompany()}>Get all company</Button>
      <Button onClick={() => getCompanyById()}>Get company by id</Button>
    </div>
  );
};

Company.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Company;
