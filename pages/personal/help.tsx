import { NextPage } from "next";
import Dashboard from "component/layout/Dashboard";
import { Box, Card, Typography } from "@mui/material";
import Empty from "component/ui/Empty";
import React from "react";

const Help = () => {
  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h5">
          Help
        </Typography>
        <Empty />
      </Box>
    </Card>
  );
};

Help.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Help;
