import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import TeamCard from "../../components/Card/TeamCard";
import Button from "@mui/material/Button";
import {team} from "../../data/data"
import LinearP from "../../components/LinearP"
const Team = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <>
      <Box sx={{ width: "100%",  position: "relative" }}>
        <Box
          component="img"
          sx={{
            position: "absolute",
            height: "100%",
            width: "100%",
            display:`${isMatch? "none": "inherit"}`,
            opacity: "0.2",
            // filter: "contrast(2000%)",
            backgroundColor:"black"
          }}
          src="/images/team.webp"
          alt="team"
        />

        <Container fixed sx={{ position: "relative"}}>
          <Typography
            sx={{
              color: `blue`,
              pt: {xs:"3rem", sm:"3rem", md:"5rem"},
              fontWeight: "700",
              pb: "1rem",
              letterSpacing: "4px",
              textAlign:{xs:"center", md:"left"}
            }}
          >
            TEAM MEMBER
          </Typography>
          {/* <Typography sx={{lineHeight:"0.1"}}> */}
          <Box sx={{width:"100%", display: {xs:"none", md:"flex"},justifyContent: "space-between", }}>
            <Typography>
              <Typography
                sx={{
                  color: `black`,
                  fontSize: "40px",
                  fontWeight: "600",
                  lineHeight: "1",
                //   textAlign:"left"
                }}
              >
                Our Awesome Creative
              </Typography>
              <Typography
                sx={{
                  color: `black`,
                  fontSize:"40px",
                  fontWeight: "600",
                  textAlign:"left"
                }}
              >
                Team Member
              </Typography>
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: {sm:"100%", md:"13rem"},
                height: "3rem",
                fontWeight: "600",
                float:"right",
                // m: "1.5rem",
                backgroundColor: "#0C5ADB",
                ":hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              View All Member
            </Button>
           
          </Box>
          <LinearP align = {"left"}/>
              
          <Box sx={{width:"100%", display: {sm:"block", md:"flex", justifyContent:"center", alignItems:"center",}}}>
            {team.map((curElem) => {
              const { image, name, role } = curElem;
              return <TeamCard image={image} title={name} role={role} />;
            })}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Team;
