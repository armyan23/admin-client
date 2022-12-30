import React from "react";
import { NextPage } from "next";
import { Box, Card, Typography, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Dashboard from "component/layout/Dashboard";
import UserDetails from "component/profile/settings/UserDetails";

const Settings = () => {
  const [value, setValue] = React.useState(1);

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <Typography component="h1" variant="h5">
          Settings
        </Typography>
      </Box>
      <Box sx={{ width: "100%" }}>
        <TabContext value={`${value}`}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              onChange={(_, index: number) => setValue(index)}
              aria-label="lab API tabs example"
            >
              <Tab label="Profile details" value="1" />
              <Tab label="Password and security" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <UserDetails />
          </TabPanel>
          <TabPanel value="2">Password And emails changes</TabPanel>
        </TabContext>
      </Box>
    </Card>
  );
};

Settings.getLayout = function getLayout(page: NextPage) {
  return <Dashboard>{page}</Dashboard>;
};

export default Settings;
