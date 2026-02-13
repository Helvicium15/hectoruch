import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import mosaicAztec from "@/assets/mosaic-aztec.png";
import mosaicCandyGun from "@/assets/mosaic-candy-gun.png";
import mosaicFrog from "@/assets/mosaic-frog.png";
import mosaicSweet from "@/assets/mosaic-sweet.png";
import mosaicMetaball from "@/assets/mosaic-metaball.png";
import mosaicSmile from "@/assets/mosaic-smile.png";
import mosaicRobot from "@/assets/mosaic-robot.png";

const images = [
  { src: mosaicAztec, alt: "Aztec Priest", category: "3D Modeling" },
  { src: mosaicCandyGun, alt: "Candy Gun", category: "3D Modeling" },
  { src: mosaicFrog, alt: "Boxing Frog", category: "3D Modeling" },
  { src: mosaicSweet, alt: "Sweet Poster", category: "Graphic Design" },
  { src: mosaicMetaball, alt: "Metaball", category: "3D Art" },
  { src: mosaicSmile, alt: "Smile Grenade", category: "Graphic Design" },
  { src: mosaicRobot, alt: "Robot", category: "3D Modeling" },
];

const ImageMosaic = () => {
  const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.6;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const formatNumber = (num: number) => `0${num}`.slice(-2);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">3D & Design</span>
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
              {t.gallery}
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <span className="font-orbitron text-sm text-muted-foreground mr-4 hidden md:block">
              {formatNumber(images.length)} {t.gallery.toLowerCase()}
            </span>
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 disabled:opacity-30 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={checkScroll}
        className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-6 md:px-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))] pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="group flex-shrink-0 w-[280px] md:w-[340px] snap-start"
          >
            <div className="overflow-hidden rounded-2xl bg-card/80 backdrop-blur-md border border-border/30 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-4">
                <span className="font-orbitron text-[10px] text-muted-foreground tracking-wider">
                  [{formatNumber(index + 1)}]
                </span>
                <h3 className="font-orbitron text-sm font-semibold text-foreground uppercase tracking-wide mt-1">
                  {image.alt}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">{image.category}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageMosaic;
