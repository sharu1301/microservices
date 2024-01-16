
import './index.scss';
import ReactPlayer from 'react-player'


const AllGallery=({ imageData }: { imageData: any })=>{
    

    return (
        <div className="container">
            {/* <h2> All Gallery section </h2> */}
            <div className="gallery">
                {imageData?.map((data: any, i) => (
                    <div key={i}>
                        {data.title === "Exhibition Gallery"
                            && (data.photos.map((images, id) => (
                                <div className="row" key={id}>
                                    {(i % 2 === 0 || i === 0) ?
                                        <div className="col-md-4 ol-12">
                                            <img className="image" src={images.url} alt="" />
                                        </div> :
                                        <div className="col-md-8 col-12">
                                            <img className="image" src={images.url} alt="" />
                                        </div>}
                                </div>))

                            )}

                        <div className="row mt-2">
                            {data.title === "Machine Gallery" && (
                                <div className="col-md-8">
                                    <div className="row mt-3">
                                        {data.photos.map((images, id) => (
                                            <div className="col-md-6 col-12" key={id}>
                                                <img className="image" src={images.url} alt="" />
                                            </div>))}

                                    </div>
                                </div>)}
                            {data.type === "native-video" && (
                                <div className="col-md-12">

                                    {data.photos.map((images, id) => (
                                        <ReactPlayer
                                            key={id}
                                            url={images.url.split(';')[0]} loop={true} controls={true} />))}


                                </div>)}


                        </div>
                    </div>

                ))}



            </div>
        </div>
    )
}

export default AllGallery