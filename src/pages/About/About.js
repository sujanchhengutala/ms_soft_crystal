import React from "react";
import Layout from "../../components/Layout/Layout";
import Banner from "../Banner";
import AboutCompany from "./AboutCompany";
import OurMission from "./OurMission";
import Testimonial from "../../components/Testimonial";
import BecomeTeam from "./BecomeTeam";

const About = () => {
  return (
    <Layout>
      <Banner title={"About us"}  />
      <AboutCompany />
      <OurMission />
      <Testimonial />
      <BecomeTeam />
    </Layout>
  );
};

export default About;
