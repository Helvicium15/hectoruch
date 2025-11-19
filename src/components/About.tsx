const About = () => {
  return (
    <section className="py-32 px-6 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-playfair text-4xl md:text-5xl font-semibold mb-12 text-foreground">
          About
        </h2>
        
        <div className="space-y-6 font-inter text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a graphic designer passionate about creating meaningful visual experiences. 
            My work focuses on clean aesthetics, thoughtful composition, and design that 
            communicates with clarity and sophistication.
          </p>
          
          <p>
            With a minimalist approach, I believe that every element should serve a purpose, 
            and that great design emerges from the balance between form and function.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
