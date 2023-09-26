import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
// import {useTheme} from "@mui/material/styles"

import TestimonialCard from "./Card/TestimonialCard";
import LinearP from "./LinearP";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Autoplay]);

var items = [
  {
    image:
      "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 2,
    role: "Developer",
    name: "Sitram kattel",
    description:
      "We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.",
  },
  {
    image:
      "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 3,
    role: "IT Officer",
    name: "Pradip Nepal ",
    description:
      "We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.",
  },
  {
    image:
      "https://images.pexels.com/photos/5876695/pexels-photo-5876695.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
    role: "Seller",
    name: "Sitram kattel",
    description:
      "We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.",
  },
  {
    image:
      "https://images.pexels.com/photos/7275385/pexels-photo-7275385.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    role: "Product Manager",
    name: "Pradip Nepal ",
    description:
      "We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.",
  },
  {
    image:
      "https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 6,
    role: "Developer",
    name: "Sitram kattel",
    description:
      "We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.",
  },
  {
    image:
      "https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 7,
    role: "Developer",
    name: "Pradip Nepal ",
    description:
      "We have the technology and industry expertise to develop solutions that can connect people and businesses across variety of mobile devices.",
  },
];

const Testimonial = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down(`md`));

  return (
    <Box sx={{ width: "100%", height: {xs:"90vh", sm:"90vh", md:"108vh"} }}>
      <Container fixed>
        <Typography
          sx={{
            color: "#0c5adb",
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "600",
            letterSpacing: "4px",
            pt: "5rem",
          }}
        >
          TESTIMONIAL
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", sm: "30px", md: `${theme.fontSize.titleSize}` },
            fontWeight: "600",
            pt: "0.5rem",
          }}
        >
          What Says
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: { xs: "20px", sm: "30px", md: `${theme.fontSize.titleSize}` },
            fontWeight: "600",
          }}
        >
          Our Happy Clients
        </Typography>

        <LinearP align={"center"} />
        <Box sx={{ width: "100%", height: "80vh" }}>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            autoplay={{
              waitForTransition: true,
              effect: "Cards",
              delay: 2000,
              reverseDirection: false,
              pauseOnMouseEnter: false,
            }}
            speed={1000}
            pagination={{ clickable: true }}
            navigation={false}
            slidesPerView={isMatch ? 1 : 3}
          >
            {items.map((items) => {
              return (
                <SwiperSlide>
                  <TestimonialCard items={items} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonial;
