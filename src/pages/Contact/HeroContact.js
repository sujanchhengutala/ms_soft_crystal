import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";

const contactData = [{
    icon:"/images/headset.png",
    title:"Support",
    number:"+977 9888888888",
    address:"support@mssoftcrystal.com"
},
{
    icon:"/images/application.png",
    title:"Business",
    number:"9801194962, 014794680",
    address:"info@mssoftcrystal.com"
},
{
    icon:"/images/location.png",
    title:"Our Location",
    number:"kupondol",
    address:"Lalitpur"
}, ]

const HeroContact = () => {
  return (
    <Container fixed>
      <Box
        sx={{
          width: "100%",
          height: { xs: "90vh", sm: "90vh", md: "88vh"},
          display: "flex",
          justifyContent:"center",
          flexDirection: { xs: "column-reverse", sm: "column-reverse", md: "row-reverse" },
        }}
      >
        <Box
          sx={{
            height: "100%",
            width: { xs: "100%", sm: "100%", md: "40%" },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "25px", sm: "30px", md: "40px" },
              fontWeight: "700",
              p: { xs: "1rem 0 0 0 ", sm: "1rem 0 0 0", md: "5rem 0 0 4rem" },
            }}
          >
            Let's get in touch
          </Typography>

          {contactData.map((curElem)=>{
            const {icon, title, number, address} = curElem
            return(
                <>
          <Box
            sx={{
              width: "100%",
              height: "6rem",
              display: "flex",
            //   flexDirection:"row-reverse",
            //   border:"1px solid black",
              gap: "2rem",
              mt: "2rem",
            //   ml:{xs:"0 0 0 0", md:"1rem 2rem 3rem 10rem"}
              
            }}
          >
            <Typography
                component={"div"}
              sx={{
                height: "5rem",
                width: "5rem",
                border: "1px solid blue",
                borderRadius: "50%",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                ml:{xs:"0", sm:"0", md:"4rem"}
              }}
            >
                <Typography component={"img"} height={"40px"} width={"40px"} src={icon}/>
            </Typography>

            <Typography>
              <Typography sx={{fontSize:"18px", fontWeight:"600", color:"gray"}}>{title}</Typography>
              <Typography sx={{p:"0.2rem", fontSize:"16px", fontWeight:"500", color:"gray"}}>{number} </Typography>
              <Typography sx={{p:"0.2rem", fontSize:"16px", fontWeight:"500", color:"gray"}}>{address} </Typography>
            </Typography>
          </Box>
                </>
            )
          })}

        </Box>
        <Box
          sx={{
            height: {xs: "70%", sm: "100%", md: "100%"},
            width: { xs: "100%", sm: "100%", md: "60%" },
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
          }}
        >
            <Typography component={"img"} height={"60%"} width={"90%"} src="/images/contact.png" />
        </Box>
      </Box>
      <Divider />
    </Container>
    // </Box>
  );
};

export default HeroContact;
