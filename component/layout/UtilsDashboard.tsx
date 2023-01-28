import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessIcon from "@mui/icons-material/Business";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsSharpIcon from "@mui/icons-material/GroupsSharp";

export const ownerList = [
  {
    key: 1,
    name: "Home",
    icon: <HomeIcon />,
    link: "/dashboard/home",
    all: true,
  },
  {
    key: 2,
    name: "My profile",
    icon: <AccountCircleIcon />,
    link: "/dashboard/profile",
    all: true,
  },
  {
    key: 3,
    name: "Employees",
    link: "/dashboard/employees",
    icon: <GroupsSharpIcon />,
    subMenu: [],
    all: true,
  },
  {
    key: 4,
    name: "Remote employees",
    icon: <PeopleOutlineIcon />,
    link: "/dashboard/employees/remote",
    all: true,
  },
  {
    key: 5,
    name: "Admins",
    link: "/dashboard/admin",
    icon: <PeopleIcon />,
    owner: true,
  },
  {
    key: 6,
    name: "Company",
    icon: <BusinessIcon />,
    link: "/dashboard/company",
    owner: true,
  },
  {
    key: 7,
    name: "Celebration",
    icon: <CelebrationIcon />,
    link: "/dashboard/company/celebration",
    all: true,
  },
  {
    key: 8,
    name: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/dashboard/company/calendar",
    all: true,
  },
  // Not yet
  // {
  //   name: "Attendance",
  //   link: "/dashboard/attendance",
  // },
];

export const footerList = [
  {
    key: 20,
    name: "Settings",
    icon: <SettingsIcon />,
    link: "/personal/settings",
  },
  {
    key: 21,
    name: "Help",
    link: "/personal/help",
    icon: <HelpIcon />,
  },
];
