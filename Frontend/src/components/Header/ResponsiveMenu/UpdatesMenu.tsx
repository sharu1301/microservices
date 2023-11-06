import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import MenuData from "../../../resources/content/menu.json";
import { MenuDataInterface } from "../../../interfaces/menu";
import CommonResponsiveMenu from './common'



export default function UpdatesMenu() {
  const updateMenuData:MenuDataInterface=require('../../../resources/content/about_us_menu.json')
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Updates</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Accordion allowZeroExpanded>
          <>
            <div>
              <Link to="/Updates">Updates</Link>
            </div>
            <CommonResponsiveMenu data={updateMenuData}/>
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
