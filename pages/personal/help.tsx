import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const Help = () => {
  return <div>Help</div>;
};

Help.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Help;
