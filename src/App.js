import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography color="inherit" sx={{ flexGrow: 1 }}>
            Team.
          </Typography>

          <Typography color="inherit" sx={{ flexGrow: 0.1 }}>
            Products
          </Typography>

          <Typography color="inherit" sx={{ flexGrow: 0.1 }}>
            Services
          </Typography>

          <Typography color="inherit" sx={{ flexGrow: 0.1 }}>
            Contact
          </Typography>

          <Typography color="inherit" sx={{ flexGrow: 0.1 }}>
            Login
          </Typography>
          <Button color="inherit" variant="success-outlined">
            Get Access
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default App;
