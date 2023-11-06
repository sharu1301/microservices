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

export default function ApplicationMenu() {
  const applicationMenuData:MenuDataInterface=require('../../../resources/content/application_menu.json')
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Application</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Accordion allowZeroExpanded>
          <>
            <div>
              <Link to="/Application">Application</Link>
            </div>
          <CustomResponsiveMenu data={applicationMenuData}/>
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
