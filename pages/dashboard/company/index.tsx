import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const Company = () => {
  return <div>Company</div>;
};

Company.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Company;
