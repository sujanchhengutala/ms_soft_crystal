import React from 'react'
import Layout from '../../components/Layout/Layout'
import HomeHero from './HomeHero'
// import Experience from './Experience'
// import Card from "../../components/Card/Card.js";
// import {HeroCdata} from '../../data/data.js'
// import { Box } from '@mui/material';
import Team from './Team';
import Testimonial from "../../components/Testimonial"
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import HomeBody from './HomeBody';
import HomeService from './HomeService';
import BecomeTeam from '../About/BecomeTeam';
// import Technology from './Technology';

// const typography = {
//     zIndex: "999",
//     px: "0.5rem",
//     color: "#fff",
//     fontWeight: "600",
//     textAlign:"center"
    
//   };

  // const Cstyles = {
  //   Fb: {
  //     zindex:"9999",
  //     height: "14rem",
  //     width: {sm:"100%", md:"17rem"},
  //     backgroundColor: "#FFFFFF",
  //     mt: "0",
  //     boxShadow: 5,
  //   },
  //   Sb: {
  //     height: "12rem",
  //     width: "15rem",
  //   },
  // };
  // const Ctext = {
  //   color: "#000",
  //   filter : "none"
  // };

const Home = () => {
  return (
    <Layout>
      <HomeHero />
      {/* <Technology /> */}
        <HomeBody />
        <HomeService />
      <WorkingProcess />
      <Team />
      <Testimonial />
      <BecomeTeam />
    </Layout>
  )
}

export default Home