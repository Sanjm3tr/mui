import * as React from "react";
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";
import { CardComp } from "./component/CardComp";
import { DeezNuts } from "./component/Appbar";
import "./index.css";
function App() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "#F5F5F5",
        maxWidth: "100vw",
        margin: "0",
        overflowX: "hidden",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css?family=Mulish"
        rel="stylesheet"
      ></link>

      <DeezNuts />
      <Typography
        sx={{
          fontFamily: "Mulish",
          fontWeight: "1000",
          fontSize: "48px",
          marginLeft: "140px",
          marginTop: "160px",
        }}
      >
        Blog posts
      </Typography>
      <Typography
        sx={{
          fontFamily: "Mulish",
          fontSize: "18px",
          color: "#6D7D8B",
          marginLeft: "140px",
          marginTop: "20px",
        }}
      >
        Our latest updates and blogs about managing your team
      </Typography>
      <Box sx={{ marginLeft: "20%" }}>
        <Grid
          container
          spacing={1}
          sx={{
            width: "120vw",
            marginLeft: "3px",
            display: "flex",
            flexDiraction: "column",
          }}
        >
          {new Array(3).fill(0).map((_, index) => (
            <Grid item xs={2}>
              <CardComp />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{
            width: "120vw",
            marginLeft: "3px",
            display: "flex",
            flexDiraction: "column",
          }}
        >
          {new Array(3).fill(0).map((_, index) => (
            <Grid item xs={2}>
              <CardComp />
            </Grid>
          ))}
        </Grid>
        <Grid
          container
          spacing={1}
          sx={{
            width: "120vw",
            marginLeft: "3px",
            display: "flex",
            flexDiraction: "column",
          }}
        >
          {new Array(3).fill(0).map((_, index) => (
            <Grid item xs={2}>
              <CardComp />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
