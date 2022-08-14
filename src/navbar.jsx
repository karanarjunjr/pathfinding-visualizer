import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import RouteIcon from "@mui/icons-material/Route";

const buttons = ["Visualize", "Clea Path", "Clear Grid"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = (props) => {
  return (
    <AppBar
      onMouseUp={props.handleMouse}
      position="relative"
      sx={{
        boxShadow: 0,
        backgroundColor: "#263238",
      }}
    >
      <Container sx={{ mx: 0 }}>
        <Toolbar disableGutters>
          <RouteIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "Segoe UI",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pathfinding Visualizer
          </Typography>

          <RouteIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "Segoe UI",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Pathfinding Visualizer
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={props.clearGrid}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Clear Grid
            </Button>
            <Button
              onClick={props.clearPath}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Clear Path
            </Button>
            <Button
              color="error"
              variant="contained"
              onClick={props.visualize}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                boxShadow: 0,
                ml: 1.5,
              }}
            >
              Visualize
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
