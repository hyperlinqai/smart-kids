import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Fatima Al-Zahra",
    role: "Parent of Omar, Age 7",
    quote: "Omar came home so excited after the STEM workshop! He kept talking about the volcano experiment for days. Sarah made learning so much fun and engaging.",
    initials: "FA",
    color: "primary"
  },
  {
    name: "Ahmed Hassan",
    role: "Parent of Layla, Age 6",
    quote: "The small group size was perfect for Layla. She's usually shy but Sarah made her feel comfortable to participate. Great value for AED 75!",
    initials: "AH",
    color: "secondary"
  },
  {
    name: "Priya Sharma",
    role: "Parent of Arjun, Age 8",
    quote: "My son is now obsessed with science! He built a simple robot at home after the workshop and keeps asking when the next session is. Sarah's passion for STEM is truly infectious.",
    initials: "PS",
    color: "accent"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Tutor Bio Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Meet Your <span className="text-primary">STEM Educator</span>
          </h2>

          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl border border-border">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="Sarah Ahmed - STEM Educator"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                />
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-bold text-foreground mb-2">Sarah Ahmed</h3>
                <p className="text-lg text-primary mb-4">Passionate STEM Educator</p>
                <p className="text-muted-foreground leading-relaxed">
                  Led by Sarah Ahmed, passionate STEM educator with 8+ years experience in making science fun and accessible for young minds.
                  Specialized in hands-on learning approaches that spark curiosity and build confidence in children aged 5-10.
                </p>
                <div className="mt-4 text-sm text-muted-foreground">
                  <span className="font-semibold">✨ Trusted by Dubai parents</span> • 200+ kids taught • 98% satisfaction rate
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
            What <span className="text-secondary">Parents Say</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const colorClasses = {
              primary: "bg-primary text-primary-foreground",
              secondary: "bg-secondary text-secondary-foreground",
              accent: "bg-accent text-accent-foreground"
            };

            return (
              <div
                key={testimonial.name}
                className="bg-card p-8 rounded-2xl shadow-lg border border-border"
                data-testid={`testimonial-card-${index}`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${colorClasses[testimonial.color as keyof typeof colorClasses]} rounded-full flex items-center justify-center font-semibold mr-4`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground" data-testid={`testimonial-name-${index}`}>
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground" data-testid={`testimonial-role-${index}`}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4" data-testid={`testimonial-quote-${index}`}>
                  {testimonial.quote}
                </p>
                <div className="flex text-primary">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-current" data-testid={`star-${index}-${starIndex}`} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
