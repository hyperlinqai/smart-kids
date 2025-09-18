import { CheckCircle, Users, Code, Heart, GraduationCap, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Personalized Learning",
    description: "Tailored curriculum adapted to each child's learning style, pace, and interests for maximum engagement and growth.",
    color: "primary"
  },
  {
    icon: Users,
    title: "Expert Teachers",
    description: "Certified educators with specialized training in child development and innovative teaching methodologies.",
    color: "secondary"
  },
  {
    icon: Code,
    title: "STEM Excellence",
    description: "Hands-on science, technology, engineering, and math programs that prepare students for future success.",
    color: "accent"
  },
  {
    icon: Heart,
    title: "Creative Arts",
    description: "Music, visual arts, and creative writing programs that foster imagination and self-expression.",
    color: "destructive"
  },
  {
    icon: GraduationCap,
    title: "Small Class Sizes",
    description: "Maximum 12 students per class ensuring individual attention and meaningful teacher-student relationships.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Secure, nurturing campus with comprehensive safety protocols and 24/7 supervision for peace of mind.",
    color: "secondary"
  }
];

export default function Features() {
  return (
    <section id="programs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose <span className="text-primary">BrightMinds</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive approach combines academic excellence with creative development, ensuring every child reaches their full potential.
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
