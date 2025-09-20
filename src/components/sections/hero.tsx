"use client";

import { CheckCircle, Users, GraduationCap, Calendar, MessageCircle } from "lucide-react";

export default function Hero() {
  const handleWhatsAppBooking = () => {
    window.open('https://wa.me/97521234476?text=Hi! I want to book a STEM workshop for my child', '_blank');
  };

  const handleLearnMore = () => {
    const detailsSection = document.getElementById('details');
    if (detailsSection) {
      detailsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="hero-gradient py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Hands-on <span className="text-primary">STEM Workshop</span> for Kids (5–10 yrs) — Just <span className="text-secondary">AED 75</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Fun, safe, small-group learning (6–8 kids only)
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleWhatsAppBooking}
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg flex items-center justify-center gap-2"
                data-testid="button-whatsapp-booking"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp – Limited Seats
              </button>
              <button
                onClick={handleLearnMore}
                className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 hover:scale-105 hover:shadow-xl transition-all duration-200 shadow-lg"
                data-testid="button-learn-more"
              >
                View Details
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="stat-students">6-8</div>
                <div className="text-sm text-muted-foreground">Kids Only</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="stat-teachers">AED 75</div>
                <div className="text-sm text-muted-foreground">All Inclusive</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground" data-testid="stat-years">5-10</div>
                <div className="text-sm text-muted-foreground">Years Age</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/hero.jpg"
              alt="Kids doing fun STEM experiments and activities"
              className="rounded-2xl shadow-2xl w-full h-auto animate-float object-cover"
              loading="eager"
              data-testid="img-hero"
            />

            {/* Floating elements for visual interest */}
            <div className="absolute -top-6 -right-6 bg-accent text-accent-foreground p-4 rounded-full shadow-lg animate-float" style={{ animationDelay: '-2s' }}>
              <CheckCircle className="w-8 h-8" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground p-4 rounded-full shadow-lg animate-float" style={{ animationDelay: '-4s' }}>
              <GraduationCap className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
