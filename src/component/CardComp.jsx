import React from "react";
import { Card, CardMedia, Typography, CardContent, Box } from "@mui/material";
import image from "../assets/lizard.jpeg";
import profile from "../assets/Ellipse.png";
export const CardComp = () => (
  <Card
    sx={{
      maxWidth: "363px",
      marginTop: 7,
      marginLeft: "15px",
      boxShadow: "none",
      border: "1px solid black",
      outline: "none",
      borderRadius: "30px",
      height: "440px",
      backgroundColor: "#FFFFFF",
    }}
  >
    <CardMedia component="img" height="140" image={image} alt="green iguana" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ marginTop: "95px" }}
      >
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <Box sx={{ display: "flex", marginTop: "15px" }}>
      <CardMedia
        component="img"
        image={profile}
        sx={{
          height: "45px",
          width: "45px",
          marginLeft: "25px",
          marginBottom: "25px",
        }}
      />
      <Typography
        sx={{
          marginTop: "12px",
          marginLeft: "7px",
          color: "#6D7D8B",
          fontFamily: "Mulish",
          fontWeight: "600",
          fontSize: "15px",
        }}
      >
        Courtney Henry | 2nd January,2022
      </Typography>
    </Box>
  </Card>
);
