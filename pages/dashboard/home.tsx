import { NextPage } from "next";
import Dashboard from "component/Layout/Dashboard";

const Home = () => {
  return <div>1111111111aaaaaaaaaaaaaaaaaaaaa</div>;
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Home;
