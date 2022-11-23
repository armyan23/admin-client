import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const Employees = () => {
  return <div>Employees</div>;
};

Employees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Employees;
