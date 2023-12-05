import React from 'react';

import './index.scss';
import Header from '../../components/Header';
import PageTitle from '../../components/pageTitle';
import AppCard from './AppCard';


import image1 from '../../assets/images/applications/img1.png';
import image2 from '../../assets/images/applications/img2.png';
import image3 from '../../assets/images/applications/img3.png';
import image4 from '../../assets/images/applications/img4.png';
import image5 from '../../assets/images/applications/img5.png';
import image6 from '../../assets/images/applications/img6.png';
import image7 from '../../assets/images/applications/img7.png';
import image8 from '../../assets/images/applications/img8.png';


import icon1 from '../../assets/images/applications/icons/icon1.png';
import icon2 from '../../assets/images/applications/icons/icon2.png';
import icon3 from '../../assets/images/applications/icons/icon3.png';
import icon4 from '../../assets/images/applications/icons/icon4.png';
import icon5 from '../../assets/images/applications/icons/icon5.png';
import icon6 from '../../assets/images/applications/icons/icon6.png';
import icon7 from '../../assets/images/applications/icons/icon7.png';
import icon8 from '../../assets/images/applications/icons/icon8.png';
import Footer from '../../components/Footer';
import SubFooter from '../../components/subFooter';

export default function Applications(){
    return(
        <>
          <Header/>
          <PageTitle title="Applications"/>
          <AppCard
           image={image1}
           icon={icon1}
           reverse={false}
           title={'Precision-Crafted Machinery Powering Automotive Industry'}
           description={"Hinds Plastic Machines Pvt. Ltd. empowers the automotive industry with state-of-the-art injection moulding machines, enabling the production of robust, high-precision automotive parts. Our machines are designed to meet the sector's demand for components that combine aesthetic appeal with functional resilience."}
          />

           <AppCard
           image={image2}
           icon={icon2}
           reverse={true}
           title={'Packaging Solutions Perfected by Industry-Leading Machines'}
           description={"Our injection moulding solutions at Hinds Plastic Machines Pvt. Ltd. are integral to the packaging industry, facilitating the manufacture of a diverse range of products including caps, closures, and various containers. We provide the technology for high-volume, consistent production, essential for maintaining product safety and integrity."}
          />

       <AppCard
           image={image3}
           icon={icon3}
           reverse={false}
           title={'Elevating Everyday Living with High-Performance Moulding Machines'}
           description={
            "Lorem ipsum dolor sit amet consectetur. Rhoncus ullamcorper neque nibh ultricies dictumst massa porta malesuada. Lorem ipsum dolor sit amet consectetur. Rhoncus ullamcorper neque nibh ultricies dictumst massa porta malesuada."}
          />

         <AppCard
           image={image4}
           icon={icon4}
           reverse={true}
           title={'Building with Confidence: Superior Machinery for Construction Needs'}
           description={"Hinds Plastic Machines Pvt. Ltd. provides the construction industry with injection moulding machines capable of producing PVC and CPVC components, essential for modern building infrastructures. Our machines are engineered to produce parts that are as reliable as they are essential for both residential and commercial construction."}
          />

        <AppCard
           image={image5}
           icon={icon5}
           reverse={false}
           title={'Empowering Electrical Innovation with Top-Level Moulding Machines'}
           description={"In the realm of electronics and electrical manufacturing, Hinds Plastic Machines Pvt. Ltd. stands out with injection moulding machines that ensure precision and reliability. Our machines are instrumental in creating components that meet the exacting standards of safety and functionality required in this high-stakes industry."}
          />

        <AppCard
           image={image6}
           icon={icon6}
           reverse={true}
           title={'Unmatched Quality for Perfectly Moulded Pet Products'}
           description={"Hinds Plastic Machines Pvt. Ltd. is at the forefront of PET preform production with our injection moulding machines, which are pivotal in creating high-quality preforms for the beverage and consumer goods industries. Our technology ensures efficiency and precision in the production of lightweight, strong preforms ready for blow moulding."}
          />

          <AppCard
           image={image7}
           icon={icon7}
           reverse={false}
           title={'Unleash Imagination with World-Class Machinery for Toy Manufacturing'}
           description={"The toy industry benefits from the innovative injection moulding machines provided by Hinds Plastic Machines Pvt. Ltd., which allow for the creation of safe, engaging, and durable toys. Our machines are designed to handle the playful imagination of children, ensuring products are as fun as they are safe."}
          />

         <AppCard
           image={image8}
           icon={icon8}
           reverse={true}
           title={'Driving the Plastic Industry Forward with Cutting-Edge Machinery'}
           description={"Hinds Plastic Machines Pvt. Ltd. caters to the precision plastic industry with injection moulding machines that deliver accuracy and consistency for high-tolerance applications. Our machines are the backbone of industries that require meticulous attention to detail, from medical devices to aerospace components."}
          />
        <SubFooter/>
         <Footer/>
        </>
    )
}