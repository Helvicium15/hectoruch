import { Mail, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase bg-black px-3 py-1.5 rounded-md">
            {t.letsConnect}
          </span>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Left Column - Title */}
          <div className="md:col-span-7">
            <h2 
              className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] leading-[0.95] mb-8"
              style={{
                textShadow: '0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)'
              }}
            >
              <span className="block text-foreground">{t.readyToCreate.split(' ').slice(0, 2).join(' ')}</span>
              <span className="block text-foreground">{t.readyToCreate.split(' ').slice(2).join(' ')}</span>
            </h2>

            <p className="text-sm md:text-base text-muted-foreground leading-relaxed bg-black px-4 py-3 rounded-lg inline-block max-w-md">
              {t.contactText}
            </p>
          </div>

          {/* Right Column - Contact Options */}
          <div className="md:col-span-5 space-y-6">
            {/* Email Card */}
            <a 
              href="mailto:hectoruch18@gmail.com"
              className="group block bg-black rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Email</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">hectoruch18@gmail.com</span>
              </div>
            </a>

            {/* Portfolio Card */}
            <a 
              href="https://www.behance.net/hectoruribe2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-black rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Behance</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <span className="text-foreground font-medium">{t.viewPortfolio}</span>
            </a>

            {/* Unsplash Card */}
            <a 
              href="https://unsplash.com/de/@helvicium" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group block bg-black rounded-lg p-6 border border-foreground/10 hover:border-foreground/30 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Unsplash</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <span className="text-foreground font-medium">{t.unsplashPhotography}</span>
            </a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-16 flex justify-end">
          <span className="text-sm text-muted-foreground bg-black px-4 py-3 rounded-lg">
            {t.basedIn}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
