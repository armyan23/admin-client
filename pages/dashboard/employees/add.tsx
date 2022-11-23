import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const AddEmployees = () => {
  return <div>Add Employee</div>;
};

AddEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default AddEmployees;
