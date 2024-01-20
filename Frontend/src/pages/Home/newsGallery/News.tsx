import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import parse from "html-react-parser";
import "./index.scss";
import { getServerBaseURL } from "../../../Functions/getBaseURL";


const serverBaseUrl = getServerBaseURL();
const deskId = process.env.REACT_APP_STORIPRESS_DESK_ID;

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
  const [selectedNews, setSelectedNews] = useState<any>()

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        let response = await fetch(
          `${serverBaseUrl}/articles?desk=${deskId}&page=${activePage}&limit=${limit}`
        );

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


  const handleTestimonialHover = (article) => {
    setSelectedNews(article);
  };

  const handleTestimonialLeave = () => {
    setSelectedNews(null);
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
          <div className="grid" onMouseLeave={handleTestimonialLeave}>
            {selectedNews ?
              (
                <div  >
                  <div onClick={()=>handleTestimonialLeave()}><i className="fa-solid fa-xmark"></i></div>


                  <div >
                    <h6 >
                      {" "}
                      {parse(selectedNews?.title.substring(3, selectedNews?.title.length - 1))}
                    </h6>
                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                  </div>
                  <div >
                    <p className="subtitle">{selectedNews.plaintext.slice(0, 180)}</p>
                  </div>
                  <div >
                    <a href="/">View more</a>
                  </div>
                </div>
              ) :
              <div >
                {articles.map((article, index) => (

                  <div className="vertialContainer">
                    <div className="newsCard" onClick={() => setSelectedNews(article)}>
                      <img
                        src={
                          article.cover === null
                            ? "images/pages/about_us/blog_default.jpg"
                            : JSON.parse(article.cover).url
                        }
                        alt="blog"
                        className="newsImage"
                      />
                      <div>
                        <p className="title">
                          {" "}
                          {parse(article.title.substring(3, article.title.length - 1))}
                        </p>
                        <div className="date">
                          <h6>12 Aug 2023</h6>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            }
          </div>



        </>
      )}


    </div>
  );
};

export default News;
