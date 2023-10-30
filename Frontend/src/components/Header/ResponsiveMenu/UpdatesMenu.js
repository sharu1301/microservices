import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Link } from "react-router-dom";
import MenuData from "../../../resources/content/menu.json";

export default function UpdatesMenu() {
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
            {MenuData.filter((data) => data.menu === "updates").map(
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
