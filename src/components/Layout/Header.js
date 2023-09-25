import {
  AppBar,
  Box,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import DrawerComp from "./DrawerComp";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let pathName = window.location.pathname.split('/')[1]?.toLowerCase().trim();
  console.log("path  : ",pathName);
  const index =
    pathName === "about"
      ? 1
      : pathName === "services"
      ? 2
      : pathName === "contact"
      ? 3
      : 0;
  let navigate = useNavigate();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(`md`));

  return (
    <>
      <Box sx={{ height: "6rem", zIndex: "99999999999999999999" }}>
        <AppBar
          component={"nav"}
          sx={{
            height: "6rem",
            background:
              "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 0%)",
          }}
        >
          <Toolbar
            sx={{
              mx: { xs: "0.1rem", md: "8rem" },
              my: { xs: "1rem", md: "1rem" },
            }}
          >
            <Typography variant="h5" sx={{ flexGrow: "1" }}>
              ms soft
            </Typography>
            <Box sx={{ display: { xs: "block", sm: "block", md: "flex" } }}>
              {isMatch ? (
                <DrawerComp />
              ) : (
                <Tabs
                  textColor="white"
                  value={index}
                  indicatorColor="primary"
                >
                  <Tab
                    label="Home"
                    onClick={() => {
                      navigate("/");
                    }}
                  />
                  <Tab
                    label="About"
                    onClick={() => {
                      navigate("/about");
                    }}
                  />
                  <Tab
                    label="Service"
                    onClick={() => {
                      navigate("/services");
                    }}
                  />

                  <Tab
                    label="Contact"
                    onClick={() => {
                      navigate("/contact");
                    }}
                  />
                </Tabs>
              )}
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </Box>
    </>
  );
};

export default Header;
