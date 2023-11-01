import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <>
      {/* latestNews container start */}
      <section id="aboutusCntr" className="latestNews">
        <div className="container">
            <h2>Latest News</h2>
        </div>
        <div className="container">
          <div className="d-flex flex-row-reverse flex-wrap">

            {/* image box start */}
            <div className="imageBox">
              <figure>
                <img data-twic-src="image:home/news.jpg" alt="news" />
              </figure>
            </div>
            {/* image box end */}

            {/* latestNews box start */}
            <div className="aboutusBox">
              <div>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                </p>
                <Link to="/Updates" className="aboutBtn">Read More</Link>
              </div>
            </div>
            {/* latestNews box end */}

          </div>
        </div>
      </section>
      {/* latestNews container end */}
    </>
  );
}
