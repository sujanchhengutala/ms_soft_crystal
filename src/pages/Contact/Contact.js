import React from "react";
import Layout from "../../components/Layout/Layout";
// import HeroContact from "./HeroContact";
// import ContactForm from "./ContactForm";
import Map from "./Map";
import HeroContact from "./HeroContact";
import ContactForm from "./ContactForm";
import Banner from "../Banner";

const Contact = () => {
  return (
    <Layout>
      <Banner title={"Contact"} />
      <HeroContact />
      <ContactForm />
      <Map />
    </Layout>
  );
};

export default Contact;
