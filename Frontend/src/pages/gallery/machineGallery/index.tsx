export default function MachineGallery(imageData: any) {
  return (
    <div className="container img-aspect">
      <div className="col-md-12">
        {imageData?.imageData?.map((images, id) => (
          <div className="col-md-12">
            <img src={images.url} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
