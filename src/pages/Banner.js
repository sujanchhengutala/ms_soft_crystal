import React from 'react'
import { Box, Typography } from '@mui/material'

const Banner = ({title, subTitle}) => {
  return (
    <Box
    sx={{
      // backgroundImage: "url(./images/banner.jpg)",
      background:"linear-gradient(90deg, rgb(255 255 255) 0%, rgb(15 165 195) 0%, rgb(58 196 255) 0%)",
      height: "40vh",
      width: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      opacity:"0.8",
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center"
    }}
  >
    {/* <Typography sx={{color:"#ffffff", fontSize:"20px", fontWeight:"600", textAlign:"center",zIndex:'9999' }}>{number}</Typography> */}
    <Typography sx={{color:"#ffffff", fontSize:"40px", fontWeight:"600", textAlign:"center",zIndex:'9999', lineHeight:"2.5rem" }}>{title}</Typography>
    {/* <Typography sx={{color:"#ffffff", fontSize:"20px", fontWeight:"600", textAlign:"center",zIndex:'9999', pt:"1rem" }}>{subTitle}</Typography> */}
  </Box>
  )
}

export default Banner