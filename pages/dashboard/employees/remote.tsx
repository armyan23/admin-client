import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const RemoteEmployees = () => {
  return <div>Remote Employees</div>;
};

RemoteEmployees.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default RemoteEmployees;
