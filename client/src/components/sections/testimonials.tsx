import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Parent of Emma, Grade 3",
    quote: "Emma absolutely loves going to BrightMinds! Her confidence has grown tremendously, and she's genuinely excited about learning. The teachers really understand how to connect with each child.",
    initials: "SM",
    color: "primary"
  },
  {
    name: "Michael Johnson",
    role: "Parent of Alex, Grade 5",
    quote: "The STEM program here is exceptional. Alex has discovered a passion for robotics and coding that I never knew existed. The hands-on approach really works!",
    initials: "MJ",
    color: "secondary"
  },
  {
    name: "Lisa Park",
    role: "Parent of Sophie, Grade 2",
    quote: "The teachers at BrightMinds genuinely care about each child's success. Sophie was struggling with reading, but the personalized support has been amazing.",
    initials: "LP",
    color: "accent"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            What <span className="text-primary">Parents Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from families who have experienced the BrightMinds difference firsthand.
          </p>
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
