import Header from "../../components/Header";
import Banner from "./Banner";
import AboutUs from "./AboutUs";
//import Content from "./Content";
import OurJourney from "./OurJourney";
import OurMachines from "./OurMachines";
import Exhibitions from "./Exhibitions";
import Applications from "./Applications";
import LatestNews from "./LatestNews";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import Achievement from "./Achievement";
import Services from "./Services";
import Footer from "../../components/Footer";
import { useEffect, useState } from "react";
import metadata from "../../resources/content/meta.json";
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Home() {
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaKeywords, setMetaKeywords] = useState("");

  useEffect(() => {
    const matchingMetadata = metadata.filter(item => item.url === window.location.pathname);
    if (matchingMetadata.length > 0) {
      const matchedItem = matchingMetadata[0];
      setMetaTitle(matchedItem.title);
      setMetaDescription(matchedItem.description);
      setMetaKeywords(matchedItem.keywords);
    }
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <title>{metaTitle}</title>
          <meta name="description" content={metaDescription} />
          <meta name="keywords" content={metaKeywords} />
        </Helmet>
        {/* wraper container start */}
        <div className="wraperCntr">
          <Header />
          <Banner />
          <AboutUs />
          <OurJourney />
          <OurMachines />
          <Exhibitions />
          <Applications />
          <LatestNews /> 
          <Gallery />
          <Testimonial />
          <Achievement />
          <Services />
          <Footer />
        </div>
        {/* wraper container end */}
      </>
    </HelmetProvider>
  );
}
