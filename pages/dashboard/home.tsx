import React from "react";
import { NextPage } from "next";
import { Box, Button, Card, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { postIsAuthenticatedRequest } from "store/auth/action";
import Dashboard from "component/layout/Dashboard";

const Home = () => {
  const dispatch = useDispatch();

  const getAuth = () => {
    dispatch(postIsAuthenticatedRequest());
  };

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h5">
          Home
        </Typography>
        <Button onClick={getAuth}>Is Authenticated</Button>
      </Box>
    </Card>
  );
};

Home.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Home;
