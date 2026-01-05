import profileImage from "@/assets/hector-profile.jpg";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowUpRight } from "lucide-react";

const About = () => {
  const { t } = useLanguage();

  const focusAreas = ["UX/UI Design", "Photography", "3D Modeling", "Print Design", "Web Development", "Motion Graphics"];

  return (
    <section id="about" className="py-32 px-6 md:px-12 relative overflow-hidden bg-background">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase bg-black px-3 py-1.5 rounded-md">
            {t.whoIAm}
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          {/* Left Column - Image */}
          <div className="md:col-span-5">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Hector Uribe Chacon - Media Designer" 
                className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Image overlay label */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-black px-4 py-3 rounded-lg inline-block">
                  <span className="text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {t.mediaDesigner}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="md:col-span-7 flex flex-col justify-center">
            {/* Main Title */}
            <h2 
              className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl tracking-[0.15em] leading-[0.95] mb-8"
              style={{
                textShadow: '0 0 30px hsl(var(--primary) / 0.4), 0 0 60px hsl(var(--primary) / 0.2)'
              }}
            >
              <span className="block text-foreground">{t.creatingVisualImpact.split(' ')[0]}</span>
              <span className="block text-foreground">{t.creatingVisualImpact.split(' ').slice(1).join(' ')}</span>
            </h2>

            {/* Description */}
            <div className="space-y-4 mb-8">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed bg-black px-4 py-3 rounded-lg inline-block">
                {t.aboutIntro}
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {t.aboutText1} <span className="text-primary font-medium">{t.boldCreativity}</span> {t.aboutText2}
              </p>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4">
              <a 
                href="#contact" 
                className="group flex items-center gap-3 px-6 py-3 rounded-full bg-black border border-foreground/20 hover:bg-foreground hover:text-background transition-all duration-300"
              >
                <span className="text-sm font-medium">{t.letsConnect}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Quick Facts & Focus Areas */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {/* Quick Facts */}
          <div className="bg-black rounded-lg p-6 border border-foreground/10">
            <h3 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
              {t.quickFacts}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{t.basedIn}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{t.heritage}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{t.role}</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-foreground/80">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>{t.languages}</span>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="bg-black rounded-lg p-6 border border-foreground/10">
            <h3 className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
              {t.focusAreas}
            </h3>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map(area => (
                <span 
                  key={area} 
                  className="px-4 py-2 bg-foreground/5 border border-foreground/20 rounded-full text-sm text-foreground/80 hover:bg-foreground/10 transition-colors"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12 flex justify-end">
          <p className="text-sm md:text-base text-muted-foreground bg-black px-4 py-3 rounded-lg inline-block">
            {t.aboutOutro}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
