
import { Link } from "react-router-dom";
export default function Services() {
  return (
    <>
      {/* services container start */}
      <section id="servicesCntr">
        <div className="container">
            <div className="d-flex flex-wrap justify-content-center">
                <div className="block">
                  <Link to="/">
                    <figure className="icon"><img src="icons/pages/home/corporate_icon.svg" alt="corporate_icon" /></figure>
                    <div>
                      <div className="title">Corporate</div>
                      <p>Presantation</p>
                    </div>
                  </Link>
                </div>
                <div className="block">
                  <Link to="/">
                    <figure className="icon"><img src="icons/pages/home/factory_svgrepo_icon.svg" alt="factory_svgrepo_icon" /></figure>
                    <div>
                      <div className="title">Factory</div>
                      <p>Walkthrough</p>
                    </div>
                  </Link>
                </div>
                <div className="block">
                  <Link to="/">
                    <figure className="icon"><img src="icons/pages/home/leaflet_icon.svg" alt="leaflet_icon" /></figure>
                    <div>
                      <div className="title">Catalogue</div>
                      <p>Download</p>
                    </div>
                  </Link>
                </div>
                <div className="block">
                  <Link to="/">
                    <figure className="icon"><img src="icons/pages/home/video_icon.svg" alt="video_icon" /></figure>
                    <div>
                      <div className="title">Video</div>
                      <p>Presents</p>
                    </div>
                  </Link>
                </div>
            </div>
        </div>
      </section>
      {/* services container end */}
    </>
  );
}
