import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <>
      {/* about container start */}
      <section id="aboutusCntr">
        <div className="container">
          <div className="d-flex flex-wrap">

            {/* image box start */}
            <div className="imageBox">
              <h2 className="d-sm-none d-block">About Us</h2>
              <figure>
                <img data-twic-src="image:home/about_img.jpg" alt="About" />
              </figure>
            </div>
            {/* image box end */}

            {/* about box start */}
            <div className="aboutusBox">
              <div>
                <h2 className="d-none d-sm-block">About Us</h2>
                <p>
                  HINDS Machineries founded in 1999, by Mr. PARVEEN SHARMA, a
                  Mechanical engineer, HINDS machineries started with a small
                  workshop at Subhash Nagar, New Delhi. In 2003 company
                  introduced the Euro Series of Injection molding during the
                  PLAST-INDIA 2003.
                </p>
                <Link to="/About-Us" className="aboutBtn">Know more about Us</Link>
              </div>
            </div>
            {/* about box end */}
            
          </div>
        </div>
      </section>
      {/* about container end */}
    </>
  );
}
