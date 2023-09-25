import { Box, Typography } from "@mui/material";
import React from "react";

const BecomeTeam = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: { xs: "25vh", sm: "32vh", md: "60vh" },
        backgroundColor: "#f7f8fa",
        // border: "1px solid black",
      }}
    >
      <Box
        component="img"
        src="/images/cta-bg.png"
        height="80%"
        width="68%"
        sx={{
          position: "relative",
          right: "3rem",
          mt: { xs: "2.5rem", md: "5.6rem" },
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: "15px", sm: "32px", md: "40px" },
          color: "rgb(56 56 56 / 50%)",
          fontWeight: "500",
          //   textAlign: "right",
          position: "relative",
          bottom: "70%",
          //   p:" 0 0 0 6rem"
          // p:" 0 0 0 10rem"
          p: { xs: " 0 0 0 9.5rem", sm: " 0 0 0 10rem", md: " 0 0 0 45rem" },
        }}
      >
        Looking to be a part of our team?
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: "22px", sm: "32px", md: "44px" },
          color: "#0c5adb",
          fontWeight: "700",
          //   textAlign: "right",
          position: "relative",
          bottom: "70%",
          p: { xs: " 0 0 0 9.5rem", sm: " 0 0 0 10rem", md: " 0 0 0 45rem" },
        }}
      >
        Let’s build better and grow together.{" "}
      </Typography>
    </Box>
  );
};

export default BecomeTeam;
