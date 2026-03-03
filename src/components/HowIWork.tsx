import { Lightbulb, PenTool, Code2, Rocket } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const steps = [
  { icon: Lightbulb, key: "discover" as const },
  { icon: PenTool, key: "design" as const },
  { icon: Code2, key: "develop" as const },
  { icon: Rocket, key: "deliver" as const },
];

const HowIWork = () => {
  const { t } = useLanguage();

  const stepData = [
    { title: t.howStep1Title, desc: t.howStep1Desc },
    { title: t.howStep2Title, desc: t.howStep2Desc },
    { title: t.howStep3Title, desc: t.howStep3Desc },
    { title: t.howStep4Title, desc: t.howStep4Desc },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-14">
          <span className="text-xs tracking-[0.3em] text-muted-foreground uppercase mb-4 block">
            {t.howProcess}
          </span>
          <h2 className="font-orbitron text-3xl md:text-5xl font-bold text-foreground uppercase tracking-wider">
            {t.howIWork}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const data = stepData[i];
            return (
              <div
                key={step.key}
                className="group rounded-2xl bg-card/80 backdrop-blur-md border border-border/30 hover:border-primary/50 p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-orbitron text-[10px] text-muted-foreground tracking-wider">
                    [{`0${i + 1}`}]
                  </span>
                </div>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-orbitron text-sm font-semibold text-foreground uppercase tracking-wide mb-2">
                  {data.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {data.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
