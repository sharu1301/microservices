import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";

import { MenuData, ContentInterface, SubmenuInterface } from "../../../../interfaces/menu";


export default function CommonResponsiveMenu(prop) {
    return (
        <>
            {
                data.content.map((content, innerIndex) => {
                    return content.sub_menus ? (
                        <AccordionItem
                            key={`inner-${innerIndex}`}
                        >
                            <AccordionItemHeading>
                                <AccordionItemButton>
                                    {content.title}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                <div>
                                    <Link to={content.url}>{content.title}</Link>
                                </div>
                                {content.sub_menus.map((sub_menu, subIndex) => {
                                    return (
                                        <div
                                            key={`inner-${innerIndex}-sub-${subIndex}`}
                                        >
                                            <Link to={sub_menu.url}>{sub_menu.title}</Link>
                                        </div>
                                    );
                                })}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ) : (
                        <div key={`inner-${innerIndex}`}>
                            <Link to={content.url}>{content.title}</Link>
                        </div>
                    );
                })
            }
        </>
    )
}


