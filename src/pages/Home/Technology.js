import { Box } from '@mui/material'
import React from 'react'

const Technology = (props) => {
  // console.log(props, "chhengutala")
  const {item, index} = props
  console.log(item, "chhengutala")

  return (
    <Box sx={{width:"100%", height:"12vh", display:'flex', justifyContent:"center", alignItems:"center"}}>
        <Box component={"img"} height={"2.5rem"} width={{xs:"7rem", md:"10rem"}} src={`${item}`} key={index} />
    </Box>
  )
}

export default Technology