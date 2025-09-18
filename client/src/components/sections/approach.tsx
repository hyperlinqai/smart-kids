import classroomImage from "@assets/pexels-tima-miroshnichenko-5427648_1758180883690.jpg";

export default function Approach() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-secondary">Learning Approach</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe every child learns differently. Our multi-sensory approach combines traditional academics with hands-on experiences, technology integration, and creative expression.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-primary-foreground font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2" data-testid="step-title-1">Assessment & Planning</h3>
                  <p className="text-muted-foreground" data-testid="step-description-1">Individual learning assessment to create personalized education plans.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-secondary-foreground font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2" data-testid="step-title-2">Interactive Learning</h3>
                  <p className="text-muted-foreground" data-testid="step-description-2">Hands-on activities, group projects, and technology-enhanced lessons.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-accent-foreground font-bold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2" data-testid="step-title-3">Progress Tracking</h3>
                  <p className="text-muted-foreground" data-testid="step-description-3">Regular assessments and parent communications to monitor growth.</p>
                </div>
              </div>
            </div>
            
            <button className="bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors" data-testid="button-view-curriculum">
              View Our Curriculum
            </button>
          </div>
          
          <div className="relative">
            <img 
              src={classroomImage} 
              alt="Students collaborating in modern classroom with teacher guidance" 
              className="rounded-2xl shadow-2xl w-full h-auto" 
              loading="lazy"
              data-testid="img-classroom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
