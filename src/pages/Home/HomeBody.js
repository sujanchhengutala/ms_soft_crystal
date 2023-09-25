import { Box, Container, Typography } from "@mui/material";
import React from "react";

const HomeBody = () => {
  return (
    <Box sx={{ width: "100%", height: { xs: "85vh", sm: "85vh", md: "76vh" } }}>
      <Container>
        <Box
          sx={{
            width: "100%",
            height: { xs: "80vh", sm: "80vh", md: "70vh" },
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "40%" },
              height: "100%",
            }}
          >
            <Typography
              sx={{
                textAlign: "left",
                pt: { xs: "1rem", sm: "2rem", md: "6rem" },
                fontSize: "20px",
                fontWeight: "700",
              }}
            >
              MS soft crystal(logo)
            </Typography>
            <Typography
              sx={{ textAlign: "justify", fontSize: "18px", pt: "1.5rem" }}
            >
              MS soft crystal is a software development company, filled with
              high-level tech experts determined to create an impact in the
              digital world.{" "}
            </Typography>
            <Typography
              sx={{ textAlign: "justify", fontSize: "18px", pt: "1.5rem" }}
            >
              Our team of experts is driven by a passion for creating innovative
              digital solutions that drive growth! Whether you’re wanting an
              edge over your competition or looking for ways to automate your
              current IT processes, we are here to work with you.{" "}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component={"img"}
              src="/images/laptop.png"
              width={"85%"}
              height={"85%"}
              sx={{ ml: { xs: "0", md: "15rem" } }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeBody;
