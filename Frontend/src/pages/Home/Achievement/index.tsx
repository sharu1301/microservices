import { Link } from "react-router-dom";

export default function Achievement() {
  return (
    <>
      {/* achievemen container start */}
      <section id="achievementCntr">
        <div className="container">
            <h2>Achievement</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 px-4">

              {/* achievemen box start */}
                <figure>
                  <img data-twic-src="image:home/news.jpg" alt="news" />
                </figure>
              {/* achievemen box end */}
            </div>

            <div className="col-md-6 px-4">

              {/* achievemen box start */}
                <figure>
                  <img data-twic-src="image:home/news.jpg" alt="news" />
                </figure>
              {/* achievemen box end */}
            </div>

            <div className="col-sm-12 d-flex justify-content-center">
                <Link className="viewMorebtn" to="/Updates">View More</Link>
            </div>

          </div>
        </div>
      </section>
      {/* achievemen container end */}
    </>
  );
}
