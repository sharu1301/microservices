import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CustomerTestimonial from "./CustomerTestimonial";
import GetinTouch from "./GetInTouchSection";
import HeroSection from "./HeroSection";
import Achievements from "./achievements";
import AllMachinery from "./allMachinery";
import Description from "./descriptionSection";
import Exhibition from "./exhibition";
import FeedbackSection from "./feedbackSection";
import NewsGallery from "./newsGallery";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Description />
      <AllMachinery />
      <Exhibition />
      <CustomerTestimonial />
      <Achievements />
      <NewsGallery />
      <GetinTouch />
      <FeedbackSection />
      <Footer />
    </>
  );
}
