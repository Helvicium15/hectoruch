const About = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Geometric accent */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <p className="font-inter text-sm text-accent font-medium">About Me</p>
            </div>
            
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Passionate Designer & 3D Artist
            </h2>
            
            <div className="space-y-6 font-inter text-base md:text-lg leading-relaxed text-foreground/80">
              <p>
                Since childhood, I've been fascinated by artistic drawing and technology. 
                The development and refinement of these two interests have led me to extensive 
                experience in creating digital and printed content, as well as 3D modeling.
              </p>
              
              <p>
                As a trained <strong className="text-foreground">Media Designer for Digital and Print</strong>, 
                I combine creative vision with technical expertise. My background in 3D art and animation 
                adds a unique dimension to my design work.
              </p>
              
              <p>
                The desire for continuous learning drives me to constantly seek new ways to develop 
                professionally and push the boundaries of visual design.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border border-primary/10 backdrop-blur-sm">
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">Quick Facts</h3>
              <ul className="space-y-3 font-inter text-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Based in Mainz, Germany</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span>Mexican-German Heritage</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Junior Graphic Designer at Vicampo</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Trilingual: Spanish, German, English</span>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl border border-accent/10 backdrop-blur-sm">
              <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">Focus Areas</h3>
              <div className="flex flex-wrap gap-2">
                {["UX/UI Design", "Photography", "3D Modeling", "Print Design", "Web Development", "Motion Graphics"].map((area) => (
                  <span key={area} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-full text-sm font-inter text-foreground/80">
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
