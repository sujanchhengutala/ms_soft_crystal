import { Box, Container, Typography } from '@mui/material'
import React from 'react'

const techData = [{
    icon:"/images/p1.png",
},
{
    icon:"/images/p2.png",
},
{
    icon:"/images/p1.png",
},
{
    icon:"/images/p2.png",
},]

const Technology_partner = () => {
  return (
    <Box width={"100%"} height={"40vh"} backgroundColor="#f7f8fa" sx={{mt:"6rem"}}>
        <Container fixed sx={{width:"100%",height:"100%", display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column" }}>
            <Typography sx={{p:"3rem 0 0 0", fontSize:{xs:"20px", md:"30px"}, textShadow:"2px 2px 4px #000000", color:"#ffffff"}}>** Technology partner ** </Typography>
        <Box sx={{width:"100%",height:"100%", display:"flex", justifyContent:{xs:"space-around", sm:"space-around", md:"space-between"}, alignItems:"center", flexWrap:"wrap" }}>
            {techData.map((currElem)=>{
                const {icon} = currElem
                return(<>
                <Typography component="img" src= {icon} sx={{height:{xs:"8rem", sm:"8rem", md:"15rem"}, width:{xs:"8rem", sm:"8rem", md:"15rem"}}}/>
                
                </>)
            })}

        </Box>
        </Container>
    </Box>
  )
}

export default Technology_partner