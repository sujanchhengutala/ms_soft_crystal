import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinDropIcon from "@mui/icons-material/PinDrop";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useNavigate } from "react-router-dom";
import { useTheme } from '@mui/material/styles';

const contactinfo = [
  {
    icon: <PinDropIcon />,
    name: "Location",
    address: "kupondol-5, Lalitpur",
  },
  {
    icon: <MarkunreadIcon />,
    name: "Email",
    address: "msDoftCrystal@gmail.com",
  },
  {
    icon: <WifiCalling3Icon />,
    name: "Phone us",
    address: "1234567890",
  },
];

const icon = [
  {
    name: <FacebookIcon />,
    path:"https://www.facebook.com/MSSoftCrystals"
  },
  {
    name: <InstagramIcon />,
    path:"https://www.instagram.com/ms_softcrystals"
  },
  {
    name: <TwitterIcon />,
    path:"https://www.facebook.com/MSSoftCrystals"
  },
  {
    name: <YouTubeIcon />,
    path:"https://www.tiktok.com/@mssoft123"
  },
  {
    name:<LinkedInIcon />,
    path:"https://np.linkedin.com/company/ms-softcrystals"
  },
];
const quickLink = [
  {
    name: "Home",
    path:"/"
  },
  {
    name: "About Us",
    path:"/about"
  },
  {
    name: "Service",
    path:"/services"

  },
  {
    name: "Contact",
    path:"/contact"

  },
];

const Footer = () => {
  let navigate = useNavigate();
  const theme = useTheme()
  console.log(theme)

  return (
    <Box
      sx={{
        height: { xs: "110vh", sm: "115vh", md: "60vh" },
        width: "100%",
        margin: "0",
        background:`${theme.color.bgColor}`
      }}
    >
      <Container fixed>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            flexWrap: "wrap",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "34%" },
              mt: "4rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: "0.5rem 0.5rem 0rem 0!important",
              }}
            >
              MS SOFT
            </Typography>
            <Typography sx={{ color: "#fff" }}>
              Completely strategize client-cent Phosfluorescently iterate
              efficient internal or organic.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: "1rem 0.5rem 0rem 0rem",
              }}
            >
              Follow Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: "0.5rem",
                color: "#ffffff",
              }}
            >
              {icon.map((curElem) => {
                const { name, path } = curElem;
                return (
                  <>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        height: "3rem",
                        width: "3rem",
                        backgroundColor: "blue",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        m: "1rem 0 1rem 0",
                        borderRadius: "5px",
                        cursor:"pointer"
                      }}
                      target="_blank"
                    >
                  
                      <a href={`${path}`} target="_blank" rel="noreferrer" style={{color:"white"}}>
                      {name}
                      </ a>
                    </Typography>
                  </>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "29%" },
              mt: { xs: "1rem", md: "4rem" },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: { xs: "0 0 0 0.5rem", sm: "0.5rem", ms: "1rem" },
              }}
            >
              Quick Links
            </Typography>
            <Typography
              sx={{ display: "flex", flexDirection: "column", color: "#fffff" }}
            >
              {quickLink.map((curElem) => {
                const { name, path } = curElem;
                return (
                  <>
                    <Typography
                    
                      sx={{
                        display: "flex",
                        gap: "1.5rem",
                        color: "white",
                        p: "0.5rem 0 0 0.5rem",
                      }}
                    >
                      <Typography>
                        <ArrowRightAltIcon />
                      </Typography>
                      <Typography sx={{cursor:"pointer"}} onClick={()=>{navigate(`${path}`)}}>{name}</Typography>
                    </Typography>
                  </>
                );
              })}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "32%" },
              mt: "4rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              Contact Info
            </Typography>

            {contactinfo.map((curElem) => {
              const { icon, name, address } = curElem;
              return (
                <>
                  <Box sx={{ display: "flex", gap: "1rem", mt: "0.5rem" }}>
                    <Typography
                      sx={{
                        height: "3rem",
                        width: "3rem",
                        backgroundColor: "blue",
                        borderRadius: "50%",
                        mt: "0.2rem",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        color: "#ffffff",
                      }}
                    >
                      {icon}
                    </Typography>
                    <Typography>
                      <Typography sx={{ color: "#ffffff" }}>{name}</Typography>
                      <Typography sx={{ color: "#ffffff", fontSize: "16px" }}>
                        {address}
                      </Typography>
                    </Typography>
                  </Box>
                </>
              );
            })}
          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#FFFFFF", mt: "0.5rem" }} />
        <Box
          sx={{
            width: "100%",
            height: "3rem",
            mt: "1.5rem",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Typography sx={{ pl: "0rem", color: "#ffffff" }}>
            © 2022 Techno.All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
