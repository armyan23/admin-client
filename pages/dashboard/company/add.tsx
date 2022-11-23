import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const AddCompany = () => {
  return <div>Create company</div>;
};

AddCompany.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddCompany;
