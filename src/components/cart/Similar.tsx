import { images } from "../../data/index";

const Similar = () => {
  return (
    <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8">
      {images.map((image) => (
        <div key={image.id} className="flex justify-center">
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover rounded-lg   h-auto"
          />
        </div>
      ))}
    </div>
  );
};

export default Similar;
