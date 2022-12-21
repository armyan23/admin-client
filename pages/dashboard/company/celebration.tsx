import React from "react";
import { NextPage } from "next";
import { Box, Card, Typography } from "@mui/material";
import Dashboard from "component/layout/Dashboard";

const Celebration = () => {
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h5">
          Celebration
        </Typography>
      </Box>
    </Card>
  );
};

Celebration.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Celebration;
