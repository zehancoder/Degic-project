import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import "./App.css";
import { useState } from "react";

function Navs() {
  const [open, setOpen] = useState(false);
  const Theme = useTheme();
  const isMobile = useMediaQuery(Theme.breakpoints.down("md"));
  const menuItem = ["About", "Service", "Projects", "Contacts"];

  return (
    <>
      <AppBar
        className="Navbar"
        position="static"
        sx={{ backgroundColor: "white", color: "black",  }}
      >
        <Toolbar>
          {isMobile ? (
            <div>
              <div>
                <IconButton color="inherit" onClick={() => setOpen(true)}>
                  <MenuIcon />
                </IconButton>
              </div>
            </div>
          ) : (
            <>
              <Typography sx={{ flexGrow: 1, height: "100px", }}>
                <img src="/logo.png" alt="" />
              </Typography>
              {menuItem.map((item) => (
                <Button color="inherit" key={item}>
                  {item}
                </Button>
              ))}
              <Button
                variant="outlined"
                sx={{
                  color: "#2ab691",
                  cursor: "pointer",
                  backgroundColor: "white",
                  borderRadius: "10px",
                  "&:hover": { backgroundColor: "#2ab666", color: "white" },
                }}
              >
                SignUp
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <List>
          {menuItem.map((item) => (
            <ListItem button key={item} onClick={() => setOpen(false)}>
              <ListItemText sx={{ cursor: "pointer" }}>{item}</ListItemText>
            </ListItem>
          ))}
          <ListItem
            button
            sx={{
              color: "#2ab691",
              backgroundColor: "white",
              borderRadius: "10px",
              border: "1px solid #2ab691",
              cursor: "pointer",
              "&:hover": { backgroundColor: "#2ab666", color: "white" },
            }}
          >
            <ListItemText primary="SignUp" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default Navs;
