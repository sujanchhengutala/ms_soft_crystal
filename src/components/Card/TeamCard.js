import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const TeamCard = ({ image, title, role }) => {
  const [show, setShow] = useState("hidden");
  const [op, setOp] = useState("1");

  return (
    <Box
      onMouseOver={() => setShow("visible")}
      onMouseOut={() => setShow("hidden")}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "100%",
        mt: "0.5rem",

        height: "30rem",
        ":hover": {
          top: "-1rem",
        },
      }}
    >
      <Card
        onMouseOver={() => setOp("0.5")}
        onMouseOut={() => setOp("1")}
        sx={{
          width: "17rem",
          borderBottom: "2.5px solid blue",
          boxShadow: "3",
          position: "relative",
          gap: "2",
          "&:hover": {
            color: "blue",
          },
        }}
      >
        <Box
          sx={{
            height: "10rem",
            width: "5rem",
            backgroundColor: "white",
            position: "absolute",
            top: "8rem",
            left: "12rem",
            visibility: `${show}`,
            display: "flex",
            flexDirection: "column",

            gap: 2,
            color: "#0C5ADB",
            zIndex: "99999",
          }}
        >
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Box>
        <CardMedia
          component="img"
          alt="green iguana"
          height="350"
          width={"100%"}
          image={image}
          sx={{ objectFit: "fill", opacity: `${op}` }}
        />
        <CardContent>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "blue",
              pt: "0.5rem",
            }}
          >
            {role}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TeamCard;
