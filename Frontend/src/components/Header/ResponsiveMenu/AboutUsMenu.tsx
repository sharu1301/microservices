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
import { AboutUsMenuProps } from "../../../interfaces";
import CommonResponsiveMenu from "./common";

export default function AboutUsMenu() {
  const aboutUsMenu:MenuDataInterface=require('../../../resources/content/about_us_menu.json')
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>About Us</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>



        <Accordion allowZeroExpanded>
          <>
            <div>
              <Link to="/About-Us">About Us</Link>
            </div>
           <CommonResponsiveMenu data={aboutUsMenu}/>
                
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
