import { createTheme } from "@mui/material";

export const theme = createTheme({
    color:{
        //background
        bgColor:"linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgb(5 5 37) 0%)",
        bannerBgColor:"linear-gradient(90deg, rgb(255 255 255) 0%, rgb(15 165 195) 0%, rgb(58 196 255) 0%)",

        //button
        buttonCcolor: "#101010",
        buttonHover: "lighten($button-color, 10%)",
        cardBorder:"blue"
    }, 
    fontSize:{
        //TITLE
        titleSize:"44px",
        pText:"18px",
        smText:"16px"
    },
})