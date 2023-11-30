import React from "react";
import { Header } from "../../components";


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import FAQData from "../../data/faqdata.json";
import Faq from 'react-faq-component';
import './index.scss';

const FAQScreen = () => {
    const config = {
        animate: true,
        arrowIcon: "V",
        openOnload: 0,
        expandIcon: "+",
        collapseIcon: "-",
    };
    return (
        <div>
            <Header />
            <div className="faqSection">
                <h3>Frequently Asked Questions</h3>
                <p>Need help with something? Here are our most frequently asked questions.
                </p>
                <div className="container faqData">

                    <Faq data={FAQData} config={config} />

                </div>
            </div>
        </div>
    )
};

export default FAQScreen;