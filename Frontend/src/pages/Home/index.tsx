import React from "react";
import { FeedbackSection, Header, Footer ,GetinTouch,Description,AllMachinery,Exhibition, NewsGallery} from "../../components";

export default function Home() {
    return (
        <>
            <Header />
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