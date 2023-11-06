

export default function Gallery() {
  return (
    <>
      {/* gallary container start */}
      <section id="gallaryCntr">
        <div className="container">
            <h2>Gallery</h2>

            <div className="d-flex flex-column">
                <div className="row">
                  <div className="col-md-6">
                      <figure className="block">
                        <img data-twic-src="image:home/gallary_video.jpg" alt="gallary_video" />  
                      </figure>
                  </div>
                  <div className="col-md-6">
                      <div className="row">
                          <div className="col-md-6">
                            <div className="block mb-3">
                              <img data-twic-src="image:home/gallary_img1.jpg" alt="gallary_img" />     
                            </div>
                            <div className="block mb-3">
                              <img data-twic-src="image:home/gallary_img1.jpg" alt="gallary_img" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="block">
                              <img data-twic-src="image:home/gallary_img2.jpg" alt="gallary_img" />
                            </div> 
                          </div>
                      </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
      {/* gallary container end */}
    </>
  );
}
