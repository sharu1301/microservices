import React from "react";
import { FeedbackSection, Header, Footer, GetinTouch, Description, AllMachinery, Exhibition, NewsGallery, HeroSection, Achievements, CustomerTestimonial } from "../../components";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <Description />
            <AllMachinery />
            <Exhibition />
            <CustomerTestimonial />
            <Achievements />

            <NewsGallery />
            <GetinTouch />
            <FeedbackSection />
            <Footer />

        </>
    )
}