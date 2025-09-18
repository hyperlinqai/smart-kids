import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleEnrollClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="container mx-auto px-4 lg:px-6 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">BM</span>
            </div>
            <span className="font-bold text-xl text-foreground">BrightMinds Academy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('about')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => handleNavClick('programs')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-programs"
            >
              Programs
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-testimonials"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('contact')} 
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleEnrollClick}
              className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-enroll-header"
            >
              Enroll Now
            </button>
            
            <button 
              className="md:hidden p-2" 
              aria-label="Toggle menu"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavClick('about')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-about-mobile"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('programs')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-programs-mobile"
              >
                Programs
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-testimonials-mobile"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('contact')} 
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-contact-mobile"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
