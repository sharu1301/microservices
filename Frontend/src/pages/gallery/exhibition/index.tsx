import "./index.scss";


export default function ExhibitionGallery(imageData: any) {
// console.log("Exhibition Gallery",imageData)
  return (
    <div className="grid-exhibition-container img-aspect">
      {imageData?.imageData?.map((images, id) => (
        <div key={id}>
          <img src={images.url} alt={images.alt_text} />
        </div>
      ))}
    </div>
  );
}
