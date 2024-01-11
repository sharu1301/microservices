import React from "react";

import ReactPlayer from 'react-player'



export default function VideoGallery({ videoData }: { videoData: any }) {
  
    console.log("Vido", videoData)

    return (
        <div className="container">
            <div className="col-md-12">

                {videoData?.map((images, id) => (
                    <div>

                        <ReactPlayer
                            key={id}
                            url={images?.url?.split(';')[0]} loop={true} controls={true} />
                    </div>
                ))}

            </div>

        </div>


    )
}