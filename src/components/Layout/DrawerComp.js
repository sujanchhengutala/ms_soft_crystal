import React, { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  Tabs,
  Tab,
  Typography,
  // Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
// import CloseIcon from "@mui/icons-material/Close";



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
            height:"8rem",
            p: "0.25rem  0.25rem 0 0.25rem",
          }}
        >
          <Typography
            component="img"
            src="/images/logo.png"
            height="100%"
            width="100%"
          />

          {/* <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <CloseIcon />
          </IconButton> */}
        </Box>
        {/* <Divider /> */}
        <Box
          sx={{
            // flexGrow: 1,
            bgcolor: "background.paper",
            display: "flex",
            height: 224,
            width:"100%"
          }}
        >
          <Tabs
            textColor="white"
            value={value}
            indicatorColor="primary"
            onChange={(e, value) => setValue(value)}
            orientation="vertical"
            sx={{
              mt: "0.5rem",
              fontSize: "30px",
              position: "relative",
              float: "right",
              width:"100%"
            }}
          >
            <Link to='/'>
            <Tab label="Home" />

            </Link>
            <Link to='/services'>
            <Tab label="Service" />

            </Link>
            <Link to='/about'>
            <Tab label="About" />

            </Link>
            <Link to='/contact'>
            <Tab label="Contact" />

            </Link>
          </Tabs>
        </Box>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon textColor="white" />
      </IconButton>
    </Box>
  );
};

export default DrawerComp;
