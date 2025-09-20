"use client";

import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src="/logo.png"
                alt="HomeNest Logo"
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="font-bold text-xl">STEM Kids Workshop</span>
            </div>
            <p className="text-background/70">
              Fun, hands-on STEM learning for kids aged 5-10. Small groups, big discoveries, and unforgettable learning experiences.
            </p>
            <div className="bg-primary/20 p-4 rounded-lg mt-4">
              <p className="text-background font-semibold">🎯 AED 75 per child - All materials included!</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-background/70 hover:text-background hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-background/10"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-background/70 hover:text-background hover:scale-110 transition-all duration-200 p-2 rounded-lg hover:bg-background/10"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-background/70">
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-background hover:translate-x-1 transition-all duration-200 text-left"
                  data-testid="footer-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('programs')}
                  className="hover:text-background hover:translate-x-1 transition-all duration-200 text-left"
                  data-testid="footer-programs"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('testimonials')}
                  className="hover:text-background hover:translate-x-1 transition-all duration-200 text-left"
                  data-testid="footer-testimonials"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-background hover:translate-x-1 transition-all duration-200 text-left"
                  data-testid="footer-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-background/70">
              <li><span className="hover:text-background transition-colors">Elementary Education</span></li>
              <li><span className="hover:text-background transition-colors">Middle School</span></li>
              <li><span className="hover:text-background transition-colors">STEM Excellence</span></li>
              <li><span className="hover:text-background transition-colors">Creative Arts</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-background/70">
              <p data-testid="text-address"> Al Nahada Dubai</p>
              <p data-testid="text-phone">+97-521234476</p>
              <p data-testid="text-email">hello@smart-kids.xxyz</p>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center">
          <div className="text-background/70">
            © 2025 Smart Kids. All rights reserved. |
            <button className="hover:text-background hover:underline transition-all duration-200 ml-1" data-testid="link-privacy">Privacy Policy</button> |
            <button className="hover:text-background hover:underline transition-all duration-200 ml-1" data-testid="link-terms">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
