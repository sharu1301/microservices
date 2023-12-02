import "react-accessible-accordion/dist/fancy-example.css";
import FAQData from "../../data/faqdata.json";
import Faq from "react-faq-component";
import "./index.scss";
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import SubFooter from "../../components/subFooter";
import Footer from "../../components/Footer";

const FAQScreen = () => {
  const config = {
    animate: true,
    arrowIcon: "V",
    openOnload: 0,
    expandIcon: "+",
    collapseIcon: "-",
  };
  return (
    <div>
      <Header />
      <PageTitle title={"FAQ"} />
      <div className="faqSection">
        <h3>Frequently Asked Questions</h3>
        <p>
          Need help with something? Here are our most frequently asked
          questions.
        </p>
        <div className="container faqData">
          <Faq data={FAQData} config={config} />
        </div>
      </div>
      <SubFooter />
      <Footer />
    </div>
  );
};

export default FAQScreen;
