import { NextPage } from "next";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { postIsAuthenticatedRequest } from "store/auth/action";
import Dashboard from "component/layout/Dashboard";

const Home = () => {
  const dispatch = useDispatch();

  const getAuth = () => {
    dispatch(postIsAuthenticatedRequest());
  };

  return (
    <div>
      <h1>My page</h1>
      <Button onClick={getAuth}>Is Authenticated</Button>
    </div>
  );
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Home;
