import { ArrowDown } from "lucide-react";
import profileImage from "@/assets/hector-profile.jpg";
import heroVideo from "@/assets/hero-background.mp4";
const Hero = () => {
  return <section className="min-h-screen flex flex-col relative overflow-hidden bg-background">
      {/* Header */}
      <header className="relative z-20 px-6 py-6 flex justify-between items-start">
        <div className="flex flex-col">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">HECTOR URIBE</h2>
          <p className="text-sm text-muted-foreground mt-1">Visual Designer • 3D Artist</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">For Inquiries</p>
          <a href="mailto:hectoruch18@gmail.com" className="text-sm text-foreground hover:text-primary transition-colors">
            hectoruch18@gmail.com
          </a>
        </div>
      </header>

      {/* Service Tags */}
      <div className="relative z-20 px-6 flex flex-wrap gap-3 mb-12">
        <span className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium">Design</span>
        <span className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium">3D Modeling</span>
        <span className="px-6 py-2 bg-foreground text-background rounded-full text-sm font-medium">Photography</span>
      </div>

      {/* Video Background */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity">
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Main Hero Content */}
      <div className="flex-1 relative px-6 pb-20">
        {/* Grid overlay */}
        <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10">
          {Array.from({
          length: 36
        }).map((_, i) => <div key={i} className="border border-foreground/20" />)}
        </div>

        {/* Central Image with Text Overlay */}
        <div className="relative max-w-6xl mx-auto h-[600px] flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full max-w-4xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl" />
              
            </div>
          </div>

          {/* Large Text Overlay */}
          <div className="relative z-10 text-center">
            <h1 className="font-black text-7xl md:text-9xl tracking-tighter mb-6">
              <span className="text-foreground">HEC</span>
              <span className="text-primary">TOR</span>
              <span className="text-foreground"></span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 font-light max-w-2xl mx-auto leading-relaxed">
              Making the world a little more beautiful, 
one pixel at a time
            </p>
          </div>

          {/* Decorative Labels */}
          <div className="absolute top-10 left-10 px-3 py-2 border border-foreground/30 text-xs text-foreground/60">
            [creative]
          </div>
          <div className="absolute top-1/4 right-20 px-3 py-2 border border-foreground/30 text-xs text-foreground/60">
            [bold]
          </div>
          <div className="absolute bottom-20 left-1/4 px-3 py-2 border border-foreground/30 text-xs text-foreground/60">
            [innovative]
          </div>
          
        </div>
      </div>

      <a href="#problems" className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce z-20" aria-label="Scroll to next section">
        <ArrowDown className="w-6 h-6 text-primary" />
      </a>
    </section>;
};
export default Hero;