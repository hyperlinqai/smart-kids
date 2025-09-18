import { CheckCircle, Users, GraduationCap, Calendar } from "lucide-react";
import heroImage from "@assets/pexels-rdne-8035138_1758180883690.jpg";

export default function Hero() {
  const handleScheduleDemo = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Nurturing <span className="text-primary">Young Minds</span> for Tomorrow
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Give your child the gift of personalized education, creative development, and academic excellence in our supportive learning environment.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleScheduleDemo}
                className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                data-testid="button-schedule-demo"
              >
                Schedule a Demo
              </button>
              <button 
                onClick={handleLearnMore}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors"
                data-testid="button-learn-more"
              >
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="stat-students">500+</div>
                <div className="text-sm text-muted-foreground">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="stat-teachers">25+</div>
                <div className="text-sm text-muted-foreground">Expert Teachers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="stat-years">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={heroImage} 
              alt="Happy students playing with colorful parachute in outdoor school setting" 
              className="rounded-2xl shadow-2xl w-full h-auto animate-float" 
              loading="eager"
              data-testid="img-hero"
            />
            
            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg animate-float" style={{animationDelay: '-2s'}}>
              <CheckCircle className="w-8 h-8" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-full shadow-lg animate-float" style={{animationDelay: '-4s'}}>
              <GraduationCap className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
