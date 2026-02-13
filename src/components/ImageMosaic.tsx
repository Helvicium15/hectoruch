import mosaicAztec from "@/assets/mosaic-aztec.png";
import mosaicCandyGun from "@/assets/mosaic-candy-gun.png";
import mosaicFrog from "@/assets/mosaic-frog.png";
import mosaicSweet from "@/assets/mosaic-sweet.png";

const images = [
  { src: mosaicAztec, alt: "Aztec Priest 3D Model" },
  { src: mosaicCandyGun, alt: "Candy Gun 3D Model" },
  { src: mosaicFrog, alt: "Boxing Frog 3D Model" },
  { src: mosaicSweet, alt: "Sweet Gummy Bears Poster" },
];

const ImageMosaic = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl bg-card/80 backdrop-blur-md border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageMosaic;
