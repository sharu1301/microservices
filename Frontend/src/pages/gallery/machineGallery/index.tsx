import "./index.scss";
export default function MachineGallery(imageData: any) {
  return (
    <div className="continer">
      <div className="grid-machine-container img-aspect px-8">
        {imageData?.imageData?.map((images, id) => (
          <div key={id}>
            <img src={images.url} alt="" />{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
