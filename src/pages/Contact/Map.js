import { Box } from '@mui/material'
import React from 'react'

const Map = () => {
  return (
    <Box sx={{width:"100%", height:"50vh"}}>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56521.10546058998!2d85.33757644513874!3d27.699710141206573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1aae4db96d65%3A0xe5fac03979032025!2sBhaktapur%20Mini%20Mart!5e0!3m2!1sen!2snp!4v1666514046588!5m2!1sen!2snp"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

    </Box>
  )
}

export default Map