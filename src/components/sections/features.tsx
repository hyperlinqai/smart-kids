import { FlaskConical, Wrench, Award } from "lucide-react";

const features = [
  {
    icon: FlaskConical,
    title: "Do Real Experiments",
    description: "Hands-on science experiments that spark curiosity and make learning fun and memorable.",
    color: "primary"
  },
  {
    icon: Wrench,
    title: "Build and Create Projects",
    description: "Design and construct amazing projects using everyday materials and STEM principles.",
    color: "secondary"
  },
  {
    icon: Award,
    title: "Get a Participation Certificate",
    description: "Every child receives a beautiful certificate to celebrate their STEM learning journey.",
    color: "accent"
  }
];

export default function Features() {
  return (
    <section id="activities" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What <span className="text-primary">They&apos;ll Do</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exciting hands-on activities that make STEM learning fun and engaging for young minds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const colorClasses = {
              primary: "bg-primary/10 text-primary",
              secondary: "bg-secondary/10 text-secondary",
              accent: "bg-accent/10 text-accent",
              destructive: "bg-destructive/10 text-destructive"
            };

            return (
              <div
                key={feature.title}
                className="bg-card p-8 rounded-2xl shadow-lg card-hover border border-border"
                data-testid={`feature-card-${index}`}
              >
                <div className={`w-16 h-16 ${colorClasses[feature.color as keyof typeof colorClasses]} rounded-xl flex items-center justify-center mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`feature-description-${index}`}>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
