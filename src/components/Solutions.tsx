const Solutions = () => {
  const solutions = [
    {
      number: "01",
      title: "Strategy & Vision",
      description: "Clear roadmap from concept to execution. Every design decision is backed by research and purpose."
    },
    {
      number: "02",
      title: "Analytics & Insights",
      description: "Data-driven approach to measure impact. Track what works and continuously optimize for better results."
    },
    {
      number: "03",
      title: "Unique Brand Voice",
      description: "Distinctive visual language that stands out. Create memorable experiences that resonate with your audience."
    },
    {
      number: "04",
      title: "Quality Engagement",
      description: "Target the right audience with precision. Build meaningful connections that convert into loyal clients."
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 border border-foreground/30 mb-6">
            <p className="text-xs text-foreground/60 uppercase tracking-wider">[agency of systematic promotion]</p>
          </div>
          <h2 className="font-black text-5xl md:text-7xl mb-6">
            <span className="text-foreground">MY SOLUTION – </span>
            <span className="text-primary">WITHOUT RANDOMNESS</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Precise calculation instead of continuous coverage
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution) => (
            <div 
              key={solution.number}
              className="group relative p-8 border border-foreground/20 bg-card hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-6xl font-black text-primary/20 mb-4 group-hover:text-primary/40 transition-colors">
                {solution.number}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4 leading-tight">{solution.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 border border-primary/30 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-2xl font-bold text-foreground mb-4">What You Get</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
              <span>Comprehensive strategy tailored to your brand and goals</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
              <span>Bold, memorable designs that capture attention and drive action</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
              <span>Data-backed decisions that maximize your return on investment</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2" />
              <span>Long-term partnership focused on sustainable growth</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
