import {
  Box,
  Container,
  Typography,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";

const AboutCompany = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box
      sx={{ width: "100%", height: { xs: "135vh", sm: "135vh", md: "90vh" } }}
    >
      <Container
        fixed
        sx={{ height: { xs: "130vh", sm: "130vh", md: "100vh" } }}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: { xs: "column-reverse", sm: "column", md: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "60%" },
              height: "100%",
              //   border: "1px solid black",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "30px", md: "40px" },
                fontWeight: "700",
                color: "#0c5adb",
                pt: { xs: "2rem", sm: "2rem", md: "4rem" },
              }}
            >
              Our Story
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "30px", md: "40px" },
                fontWeight: "700",
                color: "#0c5adb",
              }}
            >
              {/* #d82d2b */}
              Obegins here
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "15px", sm: "16px", md: "19px" },
                fontWeight: "700",
                p: { xs: "0.5rem 0 0 0", sm: "0.5rem 0 0 0", md: "1rem 0 0 0" },
              }}
            >
              QUALITY-DRIVEN | RESULT-ORIENTED | CUSTOMER-CENTRIC
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                p: "1rem 0 0.5rem 0",
                textAlign: "justify",
              }}
            >
              Established in 2009, we have served diverse clients from
              pharmaceuticals and automotive to tourism and government
              investment boards. Growing from roots in the digital industry, we
              understand the importance of intuitive and innovative technology
              in today’s world. And we have helped create a wave of profitable
              realities for numerous national and international brands.
              Established in 2009, we have served diverse clients from
              pharmaceuticals and automotive to tourism and government
              investment boards. Growing from roots in the digital industry, we
              understand the importance of intuitive and innovative technology
              in today’s world. And we have helped create a wave of profitable
              realities for numerous national and international brands.
            </Typography>
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "400",
                p: "0.5rem 0 0.5rem 0",
                textAlign: "justify",
              }}
            >
              At Ms Soft Crystal, we believe in building a “from ground-up to
              the top” relationship with our clients and helping them at every
              step. And we aspire to serve quality, transparency, and commitment
              in everything we do.
            </Typography>
            <Button
              sx={{ color: "#0c5adb", position: "relative", right: "0.5rem" }}
            >
              Learn More
            </Button>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "40%" },
              height: { xs: "30%", sm: "30%", md: "100%" },
              display: "flex",
              justifyContent: `${isMatch ? "center" : "right"}`,
              alignItems: "center",
              //   border: "1px solid black",
            }}
          >
            <Box
              component={"img"}
              sx={{
                width: { xs: "60%", sm: "60%", md: "80%" },
                height: { xs: "80%", sm: "60%", md: "50%" },
              }}
              src="/images/our-story-2.png"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default AboutCompany;
