import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NotificationIcon from "@mui/icons-material/Notifications";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ListAltIcon from "@mui/icons-material/ListAlt";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedIcon from "@mui/icons-material/Verified";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PendingIcon from "@mui/icons-material/Pending";

export const navigationMenu = [
  {
    title: "Home",
    icon: <HomeIcon />,
    path: "/home",
  },
  {
    title: "Explore",
    icon: <SearchIcon />,
    path: "/explore",
  },
  {
    title: "Notifications",
    icon: <NotificationIcon />,
    path: "/notifications",
  },
  {
    title: "Messages",
    icon: <MailOutlineIcon />,
    path: "/messages",
  },
  {
    title: "Lists",
    icon: <ListAltIcon />,
    path: "/lists",
  },
  {
    title: "Communities",
    icon: <GroupIcon />,
    path: "/communities",
  },
  {
    title: "Verified",
    icon: <VerifiedIcon />,
    path: "/verified",
  },
  {
    title: "Profile",
    icon: <AccountCircleIcon />,
    path: "/profile",
  },
  {
    title: "More",
    icon: <PendingIcon />,
    path: "/more",
  },
];
