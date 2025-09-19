"use client";

export default function Approach() {
  return (
    <section id="details" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
                Workshop <span className="text-secondary">Details</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Everything you need to know about our exciting STEM workshop for kids.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">📅 Dates/Times</h3>
                <p className="text-muted-foreground">
                  • Saturday, Dec 16 - 10:00 AM to 12:00 PM<br />
                  • Sunday, Dec 17 - 2:00 PM to 4:00 PM<br />
                  • Saturday, Dec 23 - 10:00 AM to 12:00 PM
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">👥 Capacity</h3>
                <p className="text-muted-foreground">
                  Only 6–8 kids per session for personalized attention and safe, interactive learning environment.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">📍 Venue</h3>
                <p className="text-muted-foreground">
                  Home-based workshop in Jumeirah, Dubai. Safe, clean, and fully equipped learning space.
                </p>
              </div>

              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">🎒 Materials</h3>
                <p className="text-muted-foreground">
                  All materials included in the AED 75 fee. No need to bring anything except enthusiasm to learn!
                </p>
              </div>
            </div>

            <button
              onClick={() => window.open('https://wa.me/97521234476?text=Hi! I want to book a STEM workshop for my child', '_blank')}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
              data-testid="button-whatsapp-booking-2"
            >
              Book via WhatsApp – Limited Seats
            </button>
          </div>

          <div className="relative">
            <img
              src="/our-learning.jpg"
              alt="Kids engaged in STEM learning activities"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
              data-testid="img-classroom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
