import React from "react";


export default function ExhibitionGallery(imageData: any) {
  console.log("Res", imageData.imageData, typeof imageData.imageData)

  return (
    <div className="container">
      {imageData?.imageData?.map((images, id) => (
        <div className="col-md-12">
          <img src={images.url} alt="" />
        </div>
        ))}
    </div>


  )
}
