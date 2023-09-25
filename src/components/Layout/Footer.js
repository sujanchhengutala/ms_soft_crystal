import { Box, Container, Divider, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinDropIcon from '@mui/icons-material/PinDrop';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import MarkunreadIcon from '@mui/icons-material/Markunread';
import WifiCalling3Icon from '@mui/icons-material/WifiCalling3';

const contactinfo = [{
  icon:<PinDropIcon />,
  name:"Location",
  address:"kupondol-5, Lalitpur"
},
{
  icon:<MarkunreadIcon />,
  name:"Email",
  address:"msDoftCrystal@gmail.com"
},
{
  icon:<WifiCalling3Icon />,
  name:"Phone us",
  address:"1234567890"
},]

const icon = [
  {
    name: <FacebookIcon />,
  },
  {
    name: <InstagramIcon />,
  },
  {
    name: <TwitterIcon />,
  },
  {
    name: <YouTubeIcon />,
  },
];
const quickLink = [{
  name:"Home"
},
{
  name:"About Us"
},
{
  name:"Contact"
},
{
  name:"Service"
},
{
  name:"Our Team"
}]

const Footer = () => {
  return (
    // <Box sx={{position:"relative"}}>
    <Box
      sx={{
        height: {xs:"162vh", sm:"165vh", md:"60vh"},
        width: "100%",
        margin: "0",
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 0%)",
      }}
    >
      <Container fixed>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection:{xs:"column", sm:"column", md:"row"},
            flexWrap:"wrap"
          }}
        >
          <Box
            sx={{
              width: {xs:"100%", sm:"100%", md:"25%",},
              // height: "40vh",
              // border: "1px solid white",
              mt: "4rem",
            }}
          >
            <Typography
              sx={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: "0.5rem 0.5rem 0rem 0.5rem",
              }}
            >
              MS SOFT
            </Typography>
            <Typography sx={{ color: "#fff", p: "0.5rem" }}>
              Completely strategize client-cent Phosfluorescently iterate
              efficient internal or organic.
            </Typography>

            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: "1rem 0.5rem 0rem 0.5rem",
              }}
            >
              Follow Us
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                color: "#ffffff",
              }}
            >
              {icon.map((curElem) => {
                const { name } = curElem;
                return (
                  <>
                    <Typography
                      sx={{
                        fontSize: "10px",
                        height: "3rem",
                        width: "3rem",
                        backgroundColor: "blue",
                        display:"flex", justifyContent:"center", alignItems:"center",
                        m: "1rem 0 1rem 0",
                        borderRadius:"5px"
                      }}
                    >
                      {name}
                    </Typography>
                  </>
                );
              })}
            </Box>
          </Box>
          <Box
            sx={{
              width:{ xs:"100%", sm:"100%", md:"20%"},
              // height: "40vh",
              // border: "1px solid white",
              mt: {xs:"1rem", md:"4rem"},
            }}
          >
            <Typography
              sx={{
                // textAlign: "center",
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: {xs:"0 0 0 0.5rem", sm:"0.5rem",ms:"1rem"},
              }}
            >
              Quick Links
            </Typography>
            <Typography sx={{display:"flex", flexDirection:"column", color:"#fffff"}}>

{quickLink.map((curElem)=>{
  const {name} = curElem
  return<>
                <Typography sx={{display:"flex", gap:"1.5rem", color:"white", p:"0.5rem 0 0 1rem"}}>
              <Typography><ArrowRightAltIcon /></Typography>
              <Typography>{name}</Typography>
              </Typography>
  </>
})}
</Typography>

          </Box>
          <Box
            sx={{
              width: {xs:"100%", sm:"100%", md:"27%"},
              // height: "40vh",
              // border: "1px solid white",
              mt: "4rem",
            }}
          >
            <Typography
              sx={{
                // textAlign: "center",
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: "1rem",
              }}
            >
              Popular Post
            </Typography>
          </Box>
          <Box
            sx={{
              width:{ xs:"100%", sm:"100%", md:"23%"},
              // height: "40vh",
              // border: "1px solid white",
              mt: "4rem",
            }}
          >
            <Typography
              sx={{
                // textAlign: "center",
                fontSize: "20px",
                fontWeight: "700",
                color: "#FFFFFF",
                p: "1rem",
              }}
            >
              Contact Info
            </Typography>

                {contactinfo.map((curElem)=>{
                  const {icon, name, address} = curElem
                  return <>
                  
                  <Box sx={{display:"flex", gap:"1rem", m:"0.5rem"}}>
              <Typography sx={{height:"3rem", width:"3rem", backgroundColor:"blue", borderRadius:"50%", m:"0.2rem", display:"flex", justifyContent:"center", alignItems:"center", color:"#ffffff"}}>
                {icon}
              </Typography>
              <Typography>
                
                <Typography sx={{color:"#ffffff",}}>
                  {name}
                </Typography>
                <Typography sx={{color:"#ffffff",  fontSize:"13px"}}>

                    {address}
                </Typography>
              </Typography>

            </Box>
                  </>
                })}



          </Box>
        </Box>
        <Divider sx={{ backgroundColor: "#FFFFFF", mt: "0.5rem" }} />
        <Box sx={{width:"100%", height:"3rem", mt:"1.5rem", display:"flex", justifyContent:"space-between", flexDirection:{xs:"column", sm:"column", md:"row"}}}>
          <Typography sx={{pl:"1rem", color:"#ffffff"}}>© 2022 Techno.All Rights Reserved.</Typography>
          <Typography sx={{display:"flex", gap:" 2rem", pr:"1rem", color:"#ffffff", flexWrap:"wrap"}}>
            <Typography>Privacy Policy</Typography>
            <Typography>Terms and Condition</Typography>
            <Typography>Contact Us</Typography>
          </Typography>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
