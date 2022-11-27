import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
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
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import { styled } from "@mui/material/styles";

import useWindowSize from "useHooks/useWindowSize";
import { color } from "util/styleUtils";
import Logo from "public/assets/logo.png";
import { logoutAction } from "config/instance";
import AuthMiddleware from "middleware/AuthMiddleware";
import { footerList, ownerList } from "./UtilsDashboard";
import { logout } from "store/auth/action";

const drawerWidth = 240;
const headerHeight = 64;
const headerMinHeight = 56;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  width?: number;
}

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
  width?: number;
}>(({ theme, open, width }) => ({
  backgroundColor: color.colorMain,
  flexGrow: 1,
  padding: theme.spacing(3),
  marginTop: `${headerHeight}px`,
  height: `calc(100vh - ${headerHeight}px)`,
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
  ...(!open && {
    marginTop: `${headerMinHeight}px`,
    height: `calc(100vh - ${headerMinHeight}px)`,
  }),
  ...(!open &&
    width &&
    width < 600 && {
      marginLeft: 0,
    }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, width }) => ({
  background: "transparent",
  boxShadow: "none",
  borderBottom: "0.5px solid grey",
  color: "black",
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open &&
    width &&
    width > 600 && {
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
  const router = useRouter();
  const size = useWindowSize();
  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (size.width && size.width < 600) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [size]);

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    } else if (size.width && size.width < 600) {
      setOpen(open);
    }
  };

  const handleChangeCompany = () => {
    console.log("Change company");
  };

  const logOut = () => {
    dispatch(logout());
    logoutAction();
  };

  return (
    <AuthMiddleware>
      <Box sx={{ display: "flex" }}>
        <AppBar position="fixed" open={open} width={size.width}>
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
              border: 0,
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant={size.width && size?.width > 600 ? "persistent" : "temporary"}
          anchor="left"
          open={open}
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <DrawerHeader>
            <div style={{ width: drawerWidth }}>
              <Image src={Logo} alt="Logo" width={180} />
            </div>
          </DrawerHeader>
          <List style={{ height: "100vh", borderRight: "0.5px solid grey" }}>
            <FormControl
              sx={{
                width: "100%",
                mt: 3,
                ".css-1yk1gt9-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root":
                  {
                    width: "80%",
                    margin: "0 auto",
                  },
              }}
            >
              <Select
                value={""}
                onChange={handleChangeCompany}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
              </Select>
            </FormControl>
            {ownerList.map((item) => (
              <Link key={item.key} href={item.link}>
                <ListItem
                  disablePadding
                  style={
                    item.link === router.asPath
                      ? { color: color.activeMenu }
                      : {}
                  }
                >
                  <ListItemButton>
                    <ListItemIcon style={{ color: "black" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Divider />
          <List style={{ borderRight: "0.5px solid" }}>
            {footerList.map((item) => (
              <Link key={item.key} href={item.link}>
                <ListItem
                  disablePadding
                  style={
                    item.link === router.asPath
                      ? { color: color.activeMenu }
                      : {}
                  }
                >
                  <ListItemButton>
                    <ListItemIcon style={{ color: "black" }}>
                      {item.icon}
                    </ListItemIcon>
                    <ListItemText primary={item.name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
        </Drawer>

        <Main open={open} width={size.width}>
          {children}
        </Main>
      </Box>
    </AuthMiddleware>
  );
};
export default Dashboard;
