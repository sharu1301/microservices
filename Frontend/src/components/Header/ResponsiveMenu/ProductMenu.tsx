import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import { MenuDataInterface } from "../../../interfaces/menu";
import CommonResponsiveMenu from "./common";

export default function ProductMenu() {
  const  productMenuData:MenuDataInterface=require('../../../resources/content/product_menu.json')
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton>Product</AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <Accordion allowZeroExpanded>
          <>
            <div>
              <Link to="/Product">Product</Link>
            </div>
          <CommonResponsiveMenu data={productMenuData}/>
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
