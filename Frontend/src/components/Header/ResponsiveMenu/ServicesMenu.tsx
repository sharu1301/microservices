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
import CustomResponsiveMenu from './common'

export default function ServicesMenu() {
  const serviceMenuData:MenuDataInterface=require('../../../resources/content/services_menu.json')
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Services</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Accordion allowZeroExpanded>
          <>
            <div>
              <Link to="/Services">Services</Link>
            </div>
            <CustomResponsiveMenu data={serviceMenuData}/>
      
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
