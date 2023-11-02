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

export default function GallaryMenu() {
  const galleryDataMenu:MenuDataInterface=require('../../../resources/content/gallery_menu.json')
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Gallary</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Accordion allowZeroExpanded>
          <>
            <div>
              <Link to="/Gallary">Gallary</Link>
            </div>
            <CustomResponsiveMenu data={galleryDataMenu}/>
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
