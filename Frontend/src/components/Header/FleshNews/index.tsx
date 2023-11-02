

import React from "react";
import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import axios from "axios";

interface NewInterface{
  map(arg0: (data: any, index: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
  field:{
    url:string,
    title:string
  }
}
export default function FleshNews() {

  const [newsData, setNewsData] = useState<NewInterface>();
  const [isNewDataAdded] = useState(false);

  useEffect(() => {
    axios
      .get(
        "https://stackby.com/api/betav1/rowlist/sthY4FT7hDG3xsbqTl/news_section",

        { headers: { "api-key": "q2dxQPAIMmQcK2aS" } }
      )
      .then((res) => res.data && setNewsData(res.data))
      .catch((err) => console.log(err));
  }, [isNewDataAdded])
  
  return (
    <div className="marqueeCntr">
      <div className="title"> Latest News</div>
      <Marquee className="marqueeBox" pauseOnHover>

        {newsData && newsData.map((data, index) => {
          return <div key={index}>
            <div className="child1">
              <span>{index + 1}</span> <a href={data?.field.url}>{data?.field.title}</a>
            </div>
          </div>
        })}

      </Marquee>
    </div>

  );
}
