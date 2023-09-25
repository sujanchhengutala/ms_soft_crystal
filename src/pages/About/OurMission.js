import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const OurMission = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: { xs: "50vh", sm: "55vh", md: "60vh" },
          backgroundColor: "#f7f8fa",
        }}
      >
        <Box
          component="img"
          src="/images/curve-5.png"
          width="100%"
          sx={{
            position: "relative",
            bottom: { xs: "4rem", sm: "13rem", md: "6rem" },
          }}
        />

        <Container
          fixed
          sx={{
            display: { sm: "block", md: "flex" },
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "40px", md: "100px" },
              fontWeight: "800",
              textAlign: "center",
              color: "#eff1f5",
              position: "relative",
              bottom: { xs: "3rem", md: "15rem" },
            }}
          >
            Our Mission
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "30px", md: "75px" },
              fontWeight: "700",
              textAlign: "center",
              color: "#0c5adb",
              position: "relative",
              bottom: { xs: "5rem", md: "19.5rem" },
            }}
          >
            Our Mission
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              fontWeight: { xs: "400", sm: "450", md: "500" },
              textAlign: "justify",
              color: "black",
              position: "relative",
              bottom: { xs: "4rem", md: "19rem" },
              // p: "1rem",
            }}
          >
            At MS Soft Crystal, we are passionate about our work. We like to
            keep our process simple and transparent. And our team strives on
            creating best-in-class quality experiences for users. We aim for
            customer satisfaction in all stages of our work. From conception to
            implementation and ongoing maintenance, our ultimate goal is to
            provide impeccable customer service to all our clients.
          </Typography>
          <Button
            sx={{
              color: "#0c5adb",
              // alignContent: "center",
              position: "relative",
              bottom: { xs: "3.5rem", md: "18rem" },
              right: "0.5rem",
            }}
          >
            Learn More
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default OurMission;
