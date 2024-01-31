import './index.scss'
import Header from "../../components/Header";
import PageTitle from "../../components/pageTitle";
import Footer from "../../components/Footer";
import SubFooter from "../../components/subFooter";

const TermsOfUse = () => {
    return (
        <>
            <Header />
            <PageTitle title="Terms Of Use" subtitle="Terms of Use" />
            <div className="main section">
                <div className="container up-date">
                    <div className="row w-100 ml-0">
                        <div className="col-md-12 text-center">
                            <button>Will Update Soon</button>
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
            <Footer />
        </>
    )
}

export default TermsOfUse;