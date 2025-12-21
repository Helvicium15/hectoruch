import profileImage from "@/assets/hector-profile.jpg";
const About = () => {
  return <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl transform rotate-3" />
              <img src={profileImage} alt="Hector Uribe Chacon - Media Designer" className="relative rounded-2xl w-full h-auto shadow-elegant grayscale hover:grayscale-0 transition-all duration-500" />
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="inline-block px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <p className="font-inter text-sm text-primary font-bold uppercase tracking-wider">Who I Am</p>
            </div>
            
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent uppercase tracking-wider">
              Creating Visual Impact
            </h2>
            
            <div className="space-y-6 font-inter text-base md:text-lg leading-relaxed text-foreground/90">
              <p className="font-semibold text-xl">
                I don't just design—I create experiences that demand attention.
              </p>
              
              <p>
                From childhood sketches to cutting-edge 3D worlds, I've turned my obsession with art and tech into a career 
                that blends <strong className="text-primary">bold creativity</strong> with technical precision.
              </p>
              
              <p>
                As a <strong className="text-foreground">Media Designer for Digital and Print</strong>, 
                I push boundaries in every project—whether it's immersive 3D art, striking print designs, or digital experiences 
                that leave a lasting impression.
              </p>
              
              <p className="font-semibold">
                Always evolving. Always innovating. Never settling.
              </p>
            </div>
          </div>
          
          <div className="space-y-6 order-3 md:col-span-2">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl font-semibold mb-4 text-foreground uppercase tracking-wide">Quick Facts</h3>
              <ul className="space-y-3 font-inter text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Based in Mainz, Germany</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Mexican Heritage</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Junior Graphic Designer </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Trilingual: Spanish, German, English and sometimes Italian</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/10 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl font-semibold mb-4 text-foreground uppercase tracking-wide">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["UX/UI Design", "Photography", "3D Modeling", "Print Design", "Web Development", "Motion Graphics"].map(area => <span key={area} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-inter text-foreground/80">
                    {area}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;