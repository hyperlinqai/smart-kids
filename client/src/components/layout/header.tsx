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
            <img
              src="/logo.jpeg"
              alt="HomeNest Logo"
              className="w-10 h-10 rounded-lg object-cover"
            />
            <span className="font-bold text-xl text-foreground">STEM Kids Workshop</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleNavClick('activities')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-activities"
            >
              Activities
            </button>
            <button
              onClick={() => handleNavClick('details')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-details"
            >
              Details
            </button>
            <button
              onClick={() => handleNavClick('testimonials')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-testimonials"
            >
              Educator
            </button>
            <button
              onClick={() => handleNavClick('faq')}
              className="text-muted-foreground hover:text-foreground transition-colors"
              data-testid="nav-faq"
            >
              FAQ
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={() => window.open('https://wa.me/971501234567?text=Hi! I want to book a STEM workshop for my child', '_blank')}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium"
              data-testid="button-book-header"
            >
              Book Now
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
                onClick={() => handleNavClick('activities')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-activities-mobile"
              >
                Activities
              </button>
              <button
                onClick={() => handleNavClick('details')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-details-mobile"
              >
                Details
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-testimonials-mobile"
              >
                Educator
              </button>
              <button
                onClick={() => handleNavClick('faq')}
                className="text-muted-foreground hover:text-foreground transition-colors text-left"
                data-testid="nav-faq-mobile"
              >
                FAQ
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
