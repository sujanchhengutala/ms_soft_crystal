import React from 'react'
import Layout from '../../components/Layout/Layout'
// import Layout from '../../component/Layout/Layout'
// import Testimonial from '../Testimonial/Testimonial'
// import Banner from '../../Banner'
import Banner from '../Banner'
import ServiceList from './ServiceList'
// import { serviceData } from '../../data'
import {serviceData} from "../../data/data.js"
import Technology_partner from './Technology_partner'
// import Technology_partner from './Technology_partner'
// import WhatWeDo from '../WhatWeDo'
// import ServiceCard from './ServiceCard'

const Services = () => {
  return (
    <Layout>

      <Banner title = {"Service One"} subTitle = {`Home > Service`} />
      {serviceData.map((currElem, index)=>{
        const {image, title, description, bgColor} = currElem
        return(<>
      <ServiceList image = {image} title={title} bgColor = {bgColor} description={description} dire={index} />
        </>)
      })}
      <Technology_partner />
      {/* <Testimonial /> */}
    </Layout>
  )
}

export default Services