import { Box, Button, Container, Typography, } from "@mui/material";
import React from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";




const quillStyle = {
    fontSize: '30rem', 
    padding:{xs:"0rem", sm:"0rem", md:"2rem"},
    fontWeight:"400"
  };


const ServiceList = ({ image, title, bgColor, description, dire }) => {
    const theme = useTheme();
    let navigate = useNavigate()
  return (
    <Box sx={{ width: "100%" }}>
      <Container fixed >
        <Box
          sx={{
            width: "100%",
            height: {xs:"85vh", sm:"85vh", md:"65vh"},
            boxShadow: 2,
            borderRadius:"10px",
            mt: "5rem",
            display: {xs:"block", sm:"block", md:"flex"},
            flexDirection: `${dire % 2 === 0 ? "row" : "row-reverse"}`,
          }}
        >
          <Box
            sx={{
              width: {xs:"100%", sm:"100%", md:"55%"},
              borderRadius:`${dire % 2 === 0 ? {xs:"0px", sm:"0px", md:"10px 0 0 10px"}: {xs:"0px", sm:"0px", md:"0 10px 10px 0"}}`,
              height: {xs:"35%", sm:"35%", md:"100%"},
              backgroundColor: `${bgColor}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              alt="alt"
              src={image}
              height={"80%"}
              width={"80%"}
            />
          </Box>          
          
          <Box sx={{ width: {xs:"100%", sm:"100%", md:"45%"}, height: {xs:"65%", sm:"65%", md:"100%"} }}>
            <Typography
              sx={{
                fontSize: {xs:"25px", sm:"30px", md:"35px"},
                fontWeight: "700",
                // p: "2rem 0 1rem 2rem",
                p:{xs:"1.5rem 0 0rem 0.8rem", sm:"1.5rem 0 0rem 0.5rem", md:"2rem 0 1rem 2rem"}
              }}
            >
              {title}
            </Typography>
            <ReactQuill theme="bubble" value={description} readOnly={true} style={quillStyle} />
            <Button
            onClick={()=>{navigate("/contact")}}
              variant="outlined"
              size="large"
              sx={{
                color: "#1e88c2",
                m: "0 0 0 1rem",
                fontWeight: "700",
                "&:hover": { background: "#1e88c2", color: "#ffffff" },
              }}
            >
              GET STARTED
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceList;
