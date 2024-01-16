import React from "react";
import './index.scss'

export default function ExhibitionGallery(imageData: any) {
  // console.log("Res", imageData.imageData, typeof imageData.imageData)

  return (
    <div className="container">
      {imageData?.imageData?.map((images, id) => (
        <div className="col-md-12" key={id}>
          <img src={images.url} alt="" />
        </div>
        ))}
    </div>


  )
}
