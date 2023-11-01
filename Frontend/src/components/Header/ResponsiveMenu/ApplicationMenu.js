import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import MenuData from "../../../resources/content/menu.json";

export default function ApplicationMenu() {
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
            {MenuData.filter((data) => data.menu === "applications").map(
              (data) => {
                return data.content.map((content, index) => {
                  return content.sub_menus ? (
                    <AccordionItem key={index}>
                      <AccordionItemHeading>
                        <AccordionItemButton>
                          {content.title}
                        </AccordionItemButton>
                      </AccordionItemHeading>
                      <AccordionItemPanel>
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
              }
            )}
          </>
        </Accordion>
      </AccordionItemPanel>
    </AccordionItem>
  );
}
