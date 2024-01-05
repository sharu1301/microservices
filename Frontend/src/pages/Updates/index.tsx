import "./index.scss";
import SubFooter from "../../components/subFooter";
import PageTitle from "../../components/pageTitle";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewsGallery from "../../pages/Home/newsGallery";

const Updates = () => {
    return (
        <>
            <Header />
            <PageTitle title=" Get Your Dream job with Hinds." />
            <NewsGallery />
            <div className="article-section">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h4 className="head">Our Articles</h4>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-md-4 col-12">
                            <div className="article-card">
                                <div className="article-img">
                                    <img src="../../images/pages/updates/article1.jpg" alt="article" />
                                </div>
                                <div className="article-content text-center">
                                    <h6 className="article-title">Lorem Ipsum dolor sit</h6>
                                    <p>Stay ahead of the competition with tailored
                                        marketing strategies and informed
                                        product choices tailored to your unique.</p>
                                    <button>view more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="article-card">
                                <div className="article-img">
                                    <img src="../../images/pages/updates/article1.jpg" alt="article" />
                                </div>
                                <div className="article-content text-center">
                                    <h6 className="article-title">Lorem Ipsum dolor sit</h6>
                                    <p>Stay ahead of the competition with tailored
                                        marketing strategies and informed
                                        product choices tailored to your unique.</p>
                                    <button>view more</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-12">
                            <div className="article-card">
                                <div className="article-img">
                                    <img src="../../images/pages/updates/article1.jpg" alt="article" />
                                </div>
                                <div className="article-content text-center">
                                    <h6 className="article-title">Lorem Ipsum dolor sit</h6>
                                    <p>Stay ahead of the competition with tailored
                                        marketing strategies and informed
                                        product choices tailored to your unique.</p>
                                    <button>view more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="broucher-section">
                <div className="container">
                    <div className="row w-100">
                        <div className="col-md-12">
                            <h4 className="head">Our Brochures</h4>
                        </div>
                    </div>
                    <div className="row w-100">
                        <div className="col-md-4">
                            <div className="broucher-card">
                                <div className="broucher-img">
                                    <img src="../../images/pages/updates/broucher1.jpg" alt="broucher" />
                                </div>
                                <div className="broucher-content">
                                    <h6>at massa nulla quisque posuere.</h6>
                                    <p>Lorem ipsum dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="broucher-card">
                                <div className="broucher-img">
                                    <img src="../../images/pages/updates/broucher2.jpg" alt="broucher" />
                                </div>
                                <div className="broucher-content">
                                    <h6>at massa nulla quisque posuere.</h6>
                                    <p>Lorem ipsum dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                        <div className="broucher-card">
                                <div className="broucher-img">
                                    <img src="../../images/pages/updates/broucher3.jpg" alt="broucher" />
                                </div>
                                <div className="broucher-content">
                                    <h6>at massa nulla quisque posuere.</h6>
                                    <p>Lorem ipsum dolor sit amet </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubFooter />
            <Footer />
        </>
    )
}

export default Updates;