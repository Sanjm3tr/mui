import React from "react";
import { CardMedia, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/team..png";
import Button from "@mui/material/Button";

export const DeezNuts = () => (
  <AppBar
    position="static"
    sx={{ backgroundColor: "#F5F5F5 ", boxShadow: "none", width: "130vw" }}
  >
    <Toolbar variant="dense">
      <CardMedia
        component="img"
        image={logo}
        alt="green iguana"
        sx={{ width: "80px", marginX: "-4px" }}
      />

      <Typography
        color="inherit"
        sx={{ flexGrow: 0.1, color: "#6D7D8B;", marginLeft: "40vw" }}
      >
        Products
      </Typography>

      <Typography color="inherit" sx={{ flexGrow: 0.1, color: "#6D7D8B;" }}>
        Services
      </Typography>

      <Typography color="inherit" sx={{ flexGrow: 0.1, color: "#6D7D8B;" }}>
        Contact
      </Typography>

      <Typography color="inherit" sx={{ flexGrow: 0.1, color: "#6D7D8B;" }}>
        Login
      </Typography>
      <Button
        color="inherit"
        variant="success-outlined"
        sx={{
          flexGrow: 0.1,
          border: "1.7px solid rgba(77, 160, 253, 0.42)",
          color: "#4DA0FD",
          marginRight: "-88px",
          background: "rgba(77, 160, 253, 0.1)",
        }}
      >
        Get Access
      </Button>
    </Toolbar>
  </AppBar>
);
