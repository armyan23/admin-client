import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const settings = () => {
  return <div>Settings</div>;
};

settings.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default settings;
