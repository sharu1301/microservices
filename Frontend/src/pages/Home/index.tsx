import React from "react";
import { FeedbackSection, Header, Footer ,GetinTouch,Description,AllMachinery,Exhibition} from "../../components";

export default function Home() {
    return (
        <>
            <Header />
            <Description/>
            <AllMachinery/>
            <Exhibition/>
            <GetinTouch/>
            <FeedbackSection/>
            <Footer />
       
        </>
    )
}