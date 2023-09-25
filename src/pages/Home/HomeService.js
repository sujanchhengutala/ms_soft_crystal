import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import ServiceCard from "../../components/Card/ServiceCard";
import { Link } from "react-router-dom";

const serviceData = [{
    icon:"/images/s1.png",
    title:"Custom Application",
    description:"MS Soft Crystal provides a global support network for consumer-oriented products that are business-critical which guarantee high-quality results Our team of IT experts can help develop...",
    color:"#00b5a3"
},
{
    icon:"/images/s1.png",
    title:"Beautiful Design",
    description:"We here at MS Soft Crystal strive to create alluring website designs for the customers' utmost satisfaction Our designs provide a better user experience, refined brand perception, and an...",
    color:"#7b378c"
},
{
    icon:"/images/s3.png",
    title:"Mobility",
    description:"Our team has over a decade of experience in developing specialized mobile applications Cloud Tech helps to improve user engagement of your business with added compatibility with various...",
    color:"#1e88c2"
},
{
    icon:"/images/s4.png",
    title:"Seo/Analytics",
    description:"CloudTech Services is responsible for putting SEO and social media strategies into action for clients As a result, we can immediately recognize and support systems that will help client campaigns...",
    color:"#909fbe"
},
{
    icon:"/images/s5.png",
    title:"DevOps",
    description:"Cloud Tech focuses on delivering high-quality, automated end-to-end delivery pipelines for improved software experience across cloud platforms We guarantee enhanced performance, control, and...",
    color:"#ffc200"
},
{
    icon:"/images/s6.png",
    title:"Data Integration",
    description:"Cloud Tech focuses on delivering high-quality, automated end-to-end delivery pipelines for improved software experience across cloud platforms We guarantee enhanced performance, control, and...",
    color:"#00bfd2"
},];

const HomeService = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor:"linear-gradient(90deg, rgb(255 255 255) 0%, rgb(15 165 195) 0%, rgb(58 196 255) 0%)"
        //  "#fafafa",
      }}
    >
      <Container>
        <Typography
          sx={{
            fontSize: {xs:"25px", sm:"30px", md:"44px"},
            fontWeight: "700",
            textAlign: "center",
            pt: "3rem",
          }}
        >
          Our Service,We Provide
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "16px", p: {xs:" 0.5rem 0 2.5rem 0", sm:" 0 1rem 4rem 1rem" , md:" 0 15rem 4rem 15rem"} }}>
          We provide variety of services ranging from web development to social
          media marketing and web hosting.
        </Typography>
        <Box sx={{width:"100%", display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
            {serviceData.map((curElem)=>{
                return (
                    <>
                    <ServiceCard data = {curElem} />
                    </>
                )
            })}

<Link to='/services'>
<Button variant="contained" sx={{m:"2rem 0 5rem 0", width:"10rem", height:"3rem"}}>View More</Button>
</Link>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeService;
