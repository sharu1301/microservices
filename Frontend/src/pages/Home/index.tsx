import React from "react";
import { FeedbackSection, Header, Footer ,GetinTouch,Description,AllMachinery,Exhibition,Achievements} from "../../components";

export default function Home() {
    return (
        <>
            <Header />
            <Description/>
            <AllMachinery/>
            <Exhibition/>
            <Achievements/>
            <br/>
            <GetinTouch/>
            <FeedbackSection/>
            <Footer />
       
        </>
    )
}