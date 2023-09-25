import { Box, Button, Typography } from "@mui/material";
import React from "react";

const ServiceCard = ({ data }) => {
  const { icon, title, description, color } = data;
  return (
    <Box
      sx={{
        height: "25rem",
        width: "22rem",
        boxShadow: "3",
        gap: "0.5rem",
        m: "0.5rem ",
        backgroundColor: `${color}`,
        borderRadius: "20px",
      }}
    >
      <Typography
        component={"img"}
        height={"5rem"}
        width={"5rem"}
        src={`${icon}`}
        sx={{ m: "2.5rem 0 1rem 2rem" }}
      />
      <Typography
        sx={{
          p: "1rem 2rem",
          fontSize: "20px",
          fontWeight: "800",
          color: "#ffffff",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          p: "1rem 2rem",
          fontSize: "14px",
          color: "#ffffff",
          textAlign: "justify",
        }}
      >
        {description}
      </Typography>
      <Button sx={{ ml: "1.5rem" }}>
        <Typography sx={{ color: "#ffffff", textDecoration: "underline" }}>
          READ MORE
        </Typography>
      </Button>
    </Box>
  );
};

export default ServiceCard;
