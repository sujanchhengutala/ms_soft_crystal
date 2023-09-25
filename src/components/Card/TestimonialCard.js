import React from "react";
import { Box, Typography } from "@mui/material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

const TestimonialCard = ({ items }) => {
  const { image, rating, name, description, role } = items;
  return (
    <Box
      sx={{
        height: "25rem",
        width: "20rem",
        mt: "1rem",
        ml: { xs: "1.3rem" },
        md: "2rem",
      }}
    >
      <Box sx={{ height: "13rem", width: "100%", boxShadow: 2 }}>
        <Box
          sx={{
            height: "14rem",
            width: "100%",
            backgroundColor: "#FFFFFF",
            clipPath:
              "polygon(0% 0%, 100% 0%, 100% 94%, 4% 94%, 0 100%, 0 75%, 0 75%)",
          }}
        >
          <Typography
            sx={{
              padding: "2.5rem 1rem 1rem 1rem",
              textAlign: "center",
              color: "black",
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          height: "10rem",
          width: "100%",
          position: "relative",
          top: "0.5rem",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "6rem",
            width: "6rem",
            borderRadius: "50%",
            //   boxShadow: "3",
            m: "1.3rem 1rem 1rem 0",
            backgroundImage: `url(
                            '${image}'
                          )`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></Box>
        <Box>
          <Stack>
            <Stack spacing={1} sx={{ mt: "2rem" }}>
              <Rating
                name="size-small"
                defaultValue={`${rating}`}
                size="small"
              />
            </Stack>
            <Typography sx={{ p: "0.5rem 0 0.5rem 0", fontWeight: "700" }}>
              {name}
            </Typography>
            <Typography sx={{ color: "blue", fontSize: "14px" }}>
              {role}
            </Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default TestimonialCard;
