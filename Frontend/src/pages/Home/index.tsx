import React from "react";
import { FeedbackSection, Header, Footer ,GetinTouch,Description,AllMachinery,Exhibition, NewsGallery, HeroSection} from "../../components";

export default function Home() {
    return (
        <>
            <Header />
            <HeroSection/>
            <Description/>
            <AllMachinery/>
            <Exhibition/>
            <NewsGallery/>
            <GetinTouch/>
            <FeedbackSection/>
            <Footer />
       
        </>
    )
}