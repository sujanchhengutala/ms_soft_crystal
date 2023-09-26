import { Box, Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Circle from './Circle'
import LinearP from '../../components/LinearP'
import { Wprocess } from '../../data/data'
import { useTheme } from '@mui/material/styles';



const WorkingProcess = () => {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
    <Box sx={{width:"100%", height:{xs:"41vh",sm:"50vh", md:"75vh", backgroundColor:"#ffffff"}}}>
         <Container fixed>
    <Typography sx={{color:"#0c5adb", textAlign:"center", fontSize:"16px", fontWeight:"600", letterSpacing:"4px", pt:{xs:"3rem", sm:"3rem", md:"5rem"},}}>PROCESS</Typography>
    <Typography sx={{textAlign:"center", fontSize:{xs:"20", sm:"25", md:`${theme.fontSize.titleSize}`}, fontWeight:"600", pt:"0.5rem"}}>Our Working Process</Typography>
      <LinearP align={"center"}/>
            <Box sx={{width:"80%",m:"auto", display:"flex", justifyContent:"space-around"}}>
            <Circle number={1} />
            <Box>
                <Typography sx={{color:"#0C5ADB", pt:{xs:"1.3rem", sm:"1.3rem", md:"1.8rem"}, fontWeight:"600", letterSpacing:"2px"}}>    {`${isMatch ? " --": "-----------------------------"}`}  </Typography>
        </Box>
            <Circle number={2} />
            <Box>
                <Typography sx={{color:"#0C5ADB", pt:{xs:"1.3rem", sm:"1.3rem", md:"1.8rem"}, fontWeight:"600", letterSpacing:"2px"}}>{`${isMatch ? " --": "-----------------------------"}`}</Typography>
        </Box>
            <Circle number={3}/>
            </Box>

<Box sx={{width:"100%",height:"20rem", mt:"1.5rem", display:"flex", justifyContent:"space-around"}}>

{
  Wprocess.map((curElem)=>{
    const {title, description}= curElem
    return(
      <>
<Box sx={{width:"20rem",height:"20rem",}}>
  <Typography sx={{fontSize:"13px",fontWeight:"600", textAlign:"center"}}>{title}</Typography>
  <Typography sx={{textAlign:"center", color:`gray`, fontSize:`${theme.fontSize.pText}`, display:{xs:"none", md:"inherit"}}}>{description}</Typography>

  </Box>
      </>
    )
  })
}



</Box>

         </Container>
    </Box>
  )
}

export default WorkingProcess