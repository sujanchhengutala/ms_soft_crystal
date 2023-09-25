import React from "react";
import { Box, Typography } from "@mui/material";

const Circle = ({ number }) => {
  return (
    <>
      <Box

        sx={{
          height:{xs:"4rem", sm:"4rem", md:"5rem"},
          width:{xs:"4rem", sm:"4rem", md:"5rem"},
          borderRadius: "50%",
          backgroundColor: "#ccdfff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ":hover":{
            transform: "scale(1.15)"
          }

        }}
      >
        <Box
          sx={{
            height: {xs:"3rem", sm:"3rem", md:"3.5rem"},
            width: {xs:"3rem", sm:"3rem", md:"3.5rem"},
            borderRadius: "50%",
            backgroundColor: "#9bc1ff",
            zIndex: "999",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

          }}
        >
          <Box
            sx={{
              height: {xs:"1.5rem", sm:"1.5rem", md:"2rem"},
              width: {xs:"1.5rem", sm:"1.5rem", md:"2rem"},
              borderRadius: "50%",
              backgroundColor: "#0C5ADB",
              zIndex: "999",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

            }}
          >
            <Typography sx={{ color: "#FFFFFF" }}>{number}</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Circle;
