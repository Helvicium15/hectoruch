import { useLanguage } from "@/contexts/LanguageContext";
import mosaicAztec from "@/assets/mosaic-aztec.png";
import mosaicCandyGun from "@/assets/mosaic-candy-gun.png";
import mosaicFrog from "@/assets/mosaic-frog.png";
import mosaicSweet from "@/assets/mosaic-sweet.png";
import mosaicMetaball from "@/assets/mosaic-metaball.png";
import mosaicSmile from "@/assets/mosaic-smile.png";

const images = [
  { src: mosaicAztec, alt: "Aztec Priest 3D Model" },
  { src: mosaicCandyGun, alt: "Candy Gun 3D Model" },
  { src: mosaicFrog, alt: "Boxing Frog 3D Model" },
  { src: mosaicSweet, alt: "Sweet Gummy Bears Poster" },
  { src: mosaicMetaball, alt: "Metaball 3D Art" },
  { src: mosaicSmile, alt: "Smile Grenade Art" },
];

const ImageMosaic = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-6 mb-12">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">3D</span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            {t.gallery}
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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
