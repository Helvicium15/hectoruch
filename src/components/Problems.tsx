const Problems = () => {
  const problems = [{
    title: "No Strategy",
    subtitle: "Just random steps",
    description: "Without a clear plan, projects lack direction. Random design decisions lead nowhere and waste resources."
  }, {
    title: "No Analytics",
    subtitle: "No understanding of results",
    description: "Flying blind without data. Can't measure success or identify what works and what doesn't."
  }, {
    title: "Generic Communication",
    subtitle: "No uniqueness",
    description: "Bland messages that don't stand out. Your audience won't notice or remember generic content."
  }, {
    title: "Wrong Audience",
    subtitle: "No leads",
    description: "Targeting everyone means reaching no one. Without the right audience, even great work goes unnoticed."
  }];
  return <section id="problems" className="py-32 px-6 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          
          <h2 className="font-black text-5xl md:text-7xl mb-6">
            
            <span className="text-primary"></span>
          </h2>
          
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => <div key={index} className="group relative p-8 border border-foreground/20 bg-card hover:border-primary/50 transition-all duration-300">
              <div className="absolute top-4 right-4 text-5xl font-black text-foreground/5 group-hover:text-primary/10 transition-colors">
                0{index + 1}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">{problem.title}</h3>
              <p className="text-primary mb-4 font-medium">{problem.subtitle}</p>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Problems;