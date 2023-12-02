import React from "react";

const PageTitle = (props: { title: string }) => {
  return (
    <div className="pageBanner">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="pageTitle">{props.title}</div>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {props.title}
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
