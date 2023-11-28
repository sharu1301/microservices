import React from "react";
import { FeedbackSection, Header, Footer ,GetinTouch,Description,AllMachinery,Exhibition,Achievements, CustomerTestimonial} from "../../components";

export default function Home() {
    return (
        <>
            <Header />
            <Description/>
            <AllMachinery/>
            <Exhibition/>
<CustomerTestimonial/>
            <Achievements/>
           
            <GetinTouch/>
            <FeedbackSection/>
            <Footer />
       
        </>
    )
}