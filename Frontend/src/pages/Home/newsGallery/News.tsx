import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import moment from "moment";
import parse from "html-react-parser";
import Pagination from "react-js-pagination";
import './index.scss'

import { getServerBaseURL } from "../../../Functions/getBaseURL";
const serverBaseUrl = getServerBaseURL();
const deskId=process.env.REACT_APP_STORIPRESS_DESK_ID;

interface Article {
    id: string;
    sid: string;
    slug: string;
    published_at: string;
    cover: string | null;
    title: string;
    plaintext: string;
    authors: { full_name: string }[];
    html: string;
}


const News = ({ limit }: { limit: number }) => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [activePage, setActivePage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    const [connectionError, setConnectionError] = useState(false);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                let response = await fetch(`${serverBaseUrl}/articles?desk=${deskId}&page=${activePage}&limit=${limit}`);

                if (response.ok) {
                    let responseJson = await response.json();
                    // console.log('line 40', responseJson.data.articles.data)
                    setArticles(responseJson.data.articles.data);
                    setTotalPages(responseJson.data.articles.paginatorInfo.lastPage);
                    setConnectionError(false);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
                setConnectionError(true);
            } finally {
                setLoading(false);
            }
        };

        setLoading(true);
        fetchArticles();
    }, [activePage, limit]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [articles]);

    const handlePageChange = (pageNumber: number) => {
        setActivePage(pageNumber);
    };

    const renderArticleCards = () => {
        if (articles.length > 0) {
            const rows: JSX.Element[] = [];
            let currentRow: JSX.Element[] = [];

            articles.forEach((article, index) => {
                // const publishedDay = moment(article.published_at).format("DD");
                // const publishedMonth = moment(article.published_at).format("MMMM");
                // const publishedYear = moment(article.published_at).format("YYYY");

                currentRow.push(
                    <div className='vertialContainer'>
                        <div className='newsCard'>
                            <img
                                src={
                                    article.cover === null
                                        ? "images/pages/about_us/blog_default.jpg"
                                        : JSON.parse(article.cover).url
                                }
                                alt="blog"
                                className='newsImage'
                            />
                            <div>
                                <p className='title'> {parse(article.title.substring(3, article.title.length - 1))}</p>
                                <p className='subtitle'>{article.plaintext.slice(0,90)}</p>
                                <div></div>
                              
                            </div>
                        </div>


                    </div>

                    // <div className="col-md-12 mainNewsSection">
                    //     <div className="row newsCard">
                    //         <img
                    //             src={
                    //                 article.cover === null
                    //                     ? "images/pages/about_us/blog_default.jpg"
                    //                     : JSON.parse(article.cover).url
                    //             }
                    //             alt="blog"
                    //             className='newsImage'
                    //         />
                    //         <div className="col-md-9" 
                    //       >
                    //             <h4 className="newHead" >
                    //                 {parse(article.title.substring(3, article.title.length - 1))}
                    //             </h4>
                    //             <p className="subtitle">{article.plaintext.slice(0,90)}</p>
                    //         </div>
                    //     </div>

                    // </div>
                    // <div
                    //     className="col-md-12 mainNewsSection"
                    //     //  style={{backgroundColor:'red',alignItems:'center'}}
                    //     key={index}
                    // >
                    //     <div className="col"

                    //         >
                    //         <div className='row newsCard' style={{ borderWidth: '2px', borderStyle: 'solid', borderColor: 'green' }}>

                    //                 <img
                    //                     src={
                    //                         article.cover === null
                    //                             ? "images/pages/about_us/blog_default.jpg"
                    //                             : JSON.parse(article.cover).url
                    //                     }
                    //                     alt="blog"
                    //                     className='newsImage'
                    //                 />


                    //             <div className="col-md-9" 
                    //             style={{borderWidth: '2px', borderStyle: 'solid', borderColor: 'black',display:'flex',flexDirection:'column'}}

                    //             >
                    //                 <h6>
                    //                     <Link to={`/Blog/${article.id}/${article.sid}/${article.slug}`}>
                    //                         {parse(article.title)}
                    //                     </Link>
                    //                 </h6>
                    //                 <p aria-multiline='false'>{article.plaintext.slice(0,100)}</p>

                    //             </div>
                    //         </div>
                    //     </div>
                    // </div>
                );

                if ((index + 1) % 4 === 0 || index === articles.length - 1) {
                    rows.push(
                        <div key={index} className="row">
                            {currentRow}
                        </div>
                    );
                    currentRow = [];
                }
            });

            return rows;
        }

        return null;
    };

    return (
        <div>
            {(loading || connectionError) && (
                <div className="d-flex justify-content-center mb-3">
                    <div className="loader-container">
                        <ClipLoader color="green" loading={true} size={60} />
                    </div>
                </div>
            )}

            {!loading && !connectionError && (
                <>
                    <div className="grid">{renderArticleCards()}</div>
                    {limit <= 4 && (
                        <div className="col-12 my-3 d-flex justify-content-end">
                            <Link className="viewall" to="/Blogs">
                                View all
                            </Link>
                        </div>
                    )}
                </>
            )}

            {!loading && limit >= 12 && !connectionError && (
                <div className="d-flex justify-content-center mb-3">
                    <div className="pagination">
                        <Pagination
                            activePage={activePage}
                            itemsCountPerPage={limit}
                            totalItemsCount={totalPages * limit}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                            itemClass="page-item"
                            linkClass="page-link"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default News;
