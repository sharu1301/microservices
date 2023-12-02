import React from "react";
import "./index.scss";
function SubFooter() {
  return (
    <section className="bg-light ptb-56 call-to-action">
      <div className="row justify-content-center">
        <div className="col-md-10 col-lg-7 text-center">
          <div className="primary-heading">
            Get the Marketing Insights and Product Advice You Need from Industry
            Experts
          </div>
          <p>
            Stay ahead of the competition with tailored marketing strategies and
            informed product choices tailored to your unique business needs
          </p>
          <div>
            <a className="btn custom-btn" href="tel:1800 1187 7718">
              <span className="icon">
                <img
                  src="../../images/pages/call-icon.svg"
                  className="img-fluid"
                  alt=""
                />
              </span>
              1800 1187 7718
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SubFooter;
