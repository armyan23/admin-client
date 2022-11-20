
import React, { useEffect, useState } from "react";
import Image from "next/image";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import {
  Box,
  Toolbar,
  Typography,
  List,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  Button,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

import { logoutAction } from "config/instance";
import Logo from "public/assets/logo.png";
import useWindowSize from "useHooks/useWindowSize";
import AuthMiddleware from "middleware/AuthMiddleware";

const drawerWidth = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Dashboard: ({ children }: { children: any }) => JSX.Element = ({
  children,
}) => {
  const size = useWindowSize();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!!size.width && size.width < 600) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [size]);

  const logOut = () => {
    logoutAction();
  };

  return (
    <AuthMiddleware>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              {open ? (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpen(false)}
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
              ) : (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setOpen(true)}
                  edge="start"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              )}
              <Typography variant="h6" noWrap component="div">
                Clipped drawer
              </Typography>
            </div>
            <div>
              <Button onClick={logOut} color="inherit">
                Log out
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <div style={{ width: drawerWidth }}>
              <Image src={Logo} alt="Logo" width={180} />
            </div>
          </DrawerHeader>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Main open={open}>
          <DrawerHeader />
          {children}
        </Main>
      </Box>
    </AuthMiddleware>
  );
};
export default Dashboard;
