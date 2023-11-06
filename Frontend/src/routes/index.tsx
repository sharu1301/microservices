import getUpdatesRoutes from "./updates";
import getAboutUsRoutes from "./about_us";
import getProductRoutes from "./product";
import getServicesRoutes from "./services";
import getApplicationRoutes from "./application";
import getGallaryRoutes from "./gallary";
import getContactUsRoutes from "./contact_us";
import getEnquiryRoutes from "./enquiry";
import getAdminPanelRoutes from "./adminpanel";


const getRoutes = () => {
  return (
    <>
      {getUpdatesRoutes()}
      {getAboutUsRoutes()}
      {getProductRoutes()}
      {getServicesRoutes()}
      {getApplicationRoutes()}
      {getGallaryRoutes()}
      {getContactUsRoutes()}
      {getEnquiryRoutes()}
      {getAdminPanelRoutes()}
    </>
  );
};

export default getRoutes;
