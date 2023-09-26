import React, { useState } from "react";
import { Box, Drawer, IconButton, Tabs, Tab, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [value, setValue] = useState(0);

  return (
    <Box
      component={"nav"}
      sx={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        // backgroundColor: "blue",
      }}
    >
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        PaperProps={{ sx: { width: "50%", boxSizing: "border-box" } }}
      >
        <Box
          sx={{
            // display: "flex",
            // justifyContent: "space-between",
            height: "8rem",
            p: "0.25rem  0.25rem 0 0.25rem",
          }}
        >
          <Typography
            component="img"
            src="/images/logo.png"
            height="100%"
            width="100%"
          />
        </Box>
        <Box
          sx={{
            // flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            justifyContent:"center",
            alignItems:"center",
            height: 224,
            width: "100%",
          }}
        >
          <Tabs
            textColor="white"
            value={value}
            indicatorColor="primary"
            onChange={(e, value) => setValue(value)}
            orientation="vertical"
            centered
            sx={{
              // mt: "0.5rem",
              // m:"auto",
              fontSize: "30px",
              // position: "relative",
              // float: "right",
              // border:"1px solid black",
              width: "100%",
            }}
          >
            <Link to="/">
              <Tab label="Home" />
            </Link>
            <Link to="/services">
              <Tab label="Service" />
            </Link>
            <Link to="/about">
              <Tab label="About" />
            </Link>
            <Link to="/contact">
              <Tab label="Contact" />
            </Link>
          </Tabs>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <Typography sx={{ color: "white", fontSize:"44px" }}>
          <MenuIcon />
        </Typography>
      </IconButton>
    </Box>
  );
};

export default DrawerComp;
