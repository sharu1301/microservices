
import React from 'react';
import Catalogpopup from '../../../components/Catalogpopup';

export default function Banner() {

  return (
    <>
      
      {/* banner container start */}
      <section id="bannerCntr"
      data-twic-background="url(image:home/banner.jpg)"
      >
        {/* banner box start */}
        <div className="bannerBox" >
            <div className="container">
              <div className="banner_text">
                <h1 className="banner_title">
                  Hinds Machine
                  <div className="taqline">Founded in 1999</div>
                </h1>
                <p>Keeps you Ahead....</p>
              </div>
              
              <Catalogpopup/>

            </div>
        </div>
        {/* banner box end */}

      </section>
      {/* banner container end */}
    </>
  );
}
