import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import BusinessIcon from "@mui/icons-material/Business";
import SettingsIcon from "@mui/icons-material/Settings";
import HelpIcon from "@mui/icons-material/Help";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const UtilsDashboard = () => {
  return <div>Utils</div>;
};

export default UtilsDashboard;

export const ownerList = [
  {
    key: 1,
    name: "Home",
    icon: <HomeIcon />,
    link: "/dashboard/home",
  },
  {
    key: 2,
    name: "My profile",
    icon: <AccountCircleIcon />,
    link: "/dashboard/profile",
  },
  {
    key: 3,
    name: "Employees",
    link: "/dashboard/employees",
    icon: <PeopleIcon />,
    subMenu: [],
  },
  {
    key: 4,
    name: "Remote employees",
    icon: <PeopleOutlineIcon />,
    link: "/dashboard/employees/remote",
  },
  {
    key: 5,
    name: "Company",
    icon: <BusinessIcon />,
    link: "/dashboard/company",
  },
  {
    key: 6,
    name: "Celebration",
    icon: <CelebrationIcon />,
    link: "/dashboard/company/celebration",
  },
  {
    key: 7,
    name: "Calendar",
    icon: <CalendarMonthIcon />,
    link: "/dashboard/company/calendar",
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
