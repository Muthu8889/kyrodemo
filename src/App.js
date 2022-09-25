import React from "react";
import "./App.css";
import { styled, useTheme } from "@mui/material/styles";
import SideNav from "./components/NavBar";
import { Toolbar, CssBaseline, Typography, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Menu } from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import Profile from "./components/Profile";

const drawerWidth = 240;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function App() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <div
        style={{
          display: "flex",
        }}
      >
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: "none" }),
              }}
            >
              <Menu />
            </IconButton>
            {!open && (
              <Typography variant="h6" noWrap>
                KYRO
              </Typography>
            )}
          </Toolbar>
        </AppBar>
        <SideNav open={open} handleDrawerClose={handleDrawerClose} />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, padding: theme.spacing(3) }}
        >
          <DrawerHeader />
          <Profile />
        </Box>
      </div>
    </div>
  );
}

export default App;
