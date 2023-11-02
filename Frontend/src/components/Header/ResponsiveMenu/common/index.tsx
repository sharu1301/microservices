import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";

import { MenuDataInterface, ContentInterface, SubmenuInterface } from "../../../../interfaces/menu";


export default function CommonResponsiveMenu({ data }: { data: MenuDataInterface }) {
  return (
    <>
      {
        data.content.map((content: ContentInterface, innerIndex: number) => {
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
                {content.sub_menus.map((sub_menu: SubmenuInterface, subIndex: number) => {
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


