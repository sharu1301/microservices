import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import MenuData from "../../../resources/content/menu.json";

export default function ServicesMenu() {
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
            {MenuData.filter((data) => data.menu === "services").map((data) => {
              return data.content.map((content, index) => {
                return content.sub_menus ? (
                  <AccordionItem key={index}>
                    <AccordionItemHeading>
                      <AccordionItemButton>{content.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div>
                        <Link to={content.url}>{content.title}</Link>
                      </div>
                      {content.sub_menus.map((sub_menu, index) => {
                        return (
                          <div key={index}>
                            <Link to={sub_menu.url}>{sub_menu.title}</Link>
                          </div>
                        );
                      })}
                    </AccordionItemPanel>
                  </AccordionItem>
                ) : (
                  <div>
                    <Link to={content.url}>{content.title}</Link>
                  </div>
                );
              });
            })}
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
