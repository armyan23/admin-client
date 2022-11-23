import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";

const Celebration = () => {
  return <div>Celebration</div>;
};

Celebration.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Celebration;
