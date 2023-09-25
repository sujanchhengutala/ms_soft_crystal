import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
  Divider,
} from "@mui/material";
import { CarouselItems } from "../../data/data.js";
import Carousel from "react-material-ui-carousel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Technology from "./Technology.js";
import { Titem } from "../../data/data.js";
import { useTheme } from "@mui/material/styles";

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

const typography = {
  zIndex: "999",
  px: "0.5rem",
  color: "#fff",
  fontWeight: "600",
  textAlign: "center",
};

const HomeHero = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box
        sx={{ width: "100%", height: { xs: "81vh", sm: "85vh", md: "93vh" } }}
      >
        <Carousel autoPlay="true" stopAutoPlayOnHover={true} indicators={false}>
          {CarouselItems.map((item, i) => {
            return (
              <>
                <Box
                  sx={{
                    width: "100%",
                    height: { xs: "68vh", sm: "67vh", md: "75vh" },
                    backgroundImage: `url('${item.name}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Container
                    fixed
                    sx={{ pt: { xs: "10rem", sm: "10rem", md: "10rem" } }}
                  >
                    <Typography
                      sx={{
                        ...typography,
                        fontSize: { xs: "18px", sm: "20px", md: "30px" },
                      }}
                    >
                      Welcome to ms soft crystal
                    </Typography>

                    <Typography
                      sx={{
                        ...typography,
                        fontSize: { xs: "26px", sm: "28px", md: "50px" },
                      }}
                    >
                      We are creative IT agency
                    </Typography>
                    <Typography
                      sx={{
                        ...typography,
                        fontSize: { xs: "26px", sm: "26px", md: "50px" },
                      }}
                    >
                      For your company
                    </Typography>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{ mt: "1rem", width: "10rem", height: "2.5rem" }}
                      >
                        Explore <KeyboardArrowDownIcon />
                      </Button>
                    </Box>
                  </Container>
                </Box>
              </>
            );
          })}
        </Carousel>
        <Container fixed>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            autoplay={{
              waitForTransition: true,
              // effect: "Cards",
              delay: 1000,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={500}
            // pagination={{ clickable: true }}
            navigation={false}
            slidesPerView={`${isMatch ? 3 : 7}`}
          >
            {Titem.map((items, index) => {
              const { icon } = items;
              return (
                <SwiperSlide>
                  <Technology item={icon} index={index} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Container>

        <Divider />
      </Box>
    </>
  );
};

export default HomeHero;
