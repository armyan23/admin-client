import * as React from "react";
import { useRouter } from "next/router";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Tab } from "@mui/material";
import LoginMiddleware from "middleware/LoginMiddleware";

const AuthLayout = ({ children }: any) => {
  const router = useRouter();
  const [value, setValue] = React.useState(router.asPath);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
    router.push(newValue);
  };

  return (
    <LoginMiddleware>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "end",
          }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Login" value="/" />
            <Tab label="Register" value="/register" />
          </TabList>
        </Box>
        <TabPanel value={router.asPath}>{children}</TabPanel>
      </TabContext>
    </LoginMiddleware>
  );
};

export default AuthLayout;
