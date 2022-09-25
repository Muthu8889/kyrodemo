import {
  Home,
  Assignment,
  Dashboard,
  Email,
  Description,
  Apartment,
  Settings,
} from "@mui/icons-material";

export const sideNavIntialData = [
  {
    text: "Home",
    path: "/home",
    id: "000",
    icon: <Home />,
  },
  {
    text: "Projects",
    path: "/projects",
    id: "100",
    icon: <Assignment />,
  },
  {
    text: "Dasboard",
    path: "/dashboard",
    id: "500",
    icon: <Dashboard />,
  },
  {
    text: "Messages",
    path: "/messages",
    id: "600",
    icon: <Email />,
  },
  {
    text: "Documents",
    path: "/documents",
    id: "900",
    icon: <Description />,
  },
  {
    text: "Organizations",
    path: "/org",
    id: "700",
    icon: <Apartment />,
  },
  {
    text: "Settings",
    path: "/settings",
    id: "800",
    icon: <Settings />,
  },
];
