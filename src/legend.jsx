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
import "font-awesome/css/font-awesome.min.css";

const Legend = (props) => {
  return (
    <div onMouseUp={props.onMouseUp} className="legend">
      <div className="legendItem">
        <div className="legendItemLeft">
          <div className="legendImage">
            <i
              //   id="end"
              className="fa-solid fa-plane"
              style={{ color: "#ffca28" }}
            ></i>
          </div>
        </div>
        <div className="legendItemRight">
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#97989a",
            }}
          >
            Start Node
          </Typography>
        </div>
      </div>
      <div className="legendItem">
        <div className="legendItemLeft">
          <div className="legendImage">
            <i
              //   id="end"
              className="fa-solid fa-location-dot"
              style={{ color: "#ffca28" }}
            ></i>
          </div>
        </div>
        <div className="legendItemRight">
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#97989a",
            }}
          >
            End Node
          </Typography>
        </div>
      </div>
      <div className="legendItem">
        <div className="legendItemLeft">
          <div
            style={{ border: "1px solid #97989a" }}
            className="legendImage"
          ></div>
        </div>
        <div className="legendItemRight">
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#97989a",
            }}
          >
            Unvisited Node
          </Typography>
        </div>
      </div>
      <div className="legendItem">
        <div className="legendItemLeft">
          <div
            style={{ backgroundColor: "#3ae4d6" }}
            className="legendImage"
          ></div>
        </div>
        <div className="legendItemRight">
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#97989a",
            }}
          >
            Visited Node
          </Typography>
        </div>
      </div>
      <div className="legendItem">
        <div className="legendItemLeft">
          <div
            style={{ backgroundColor: "#fffe6a" }}
            className="legendImage"
          ></div>
        </div>
        <div className="legendItemRight">
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#97989a",
            }}
          >
            Path Node
          </Typography>
        </div>
      </div>
      <div className="legendItem">
        <div className="legendItemLeft">
          <div
            style={{ backgroundColor: "#ff5292" }}
            className="legendImage"
          ></div>
        </div>
        <div className="legendItemRight">
          <Typography
            sx={{
              fontFamily: "Segoe UI",
              color: "#97989a",
            }}
          >
            Wall Node
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Legend;
