import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What age group is this workshop for?",
    answer: "The workshop is designed for kids aged 5–10 years. Activities are adapted to be engaging and age-appropriate for this range."
  },
  {
    question: "What's included in the AED 75 fee?",
    answer: "Everything is included! All materials, supplies, experiments, and a participation certificate. No need to bring anything except enthusiasm to learn."
  },
  {
    question: "What's your refund policy?",
    answer: "If you can't make your booked session, your seat is transferable to another available session. We want to make sure every child gets to experience the fun!"
  },
  {
    question: "How do you ensure safety?",
    answer: "We maintain small groups (6-8 kids only), use child-safe materials, have a sanitized setup, and provide constant supervision throughout the workshop."
  },
  {
    question: "Where exactly is the workshop held?",
    answer: "The workshop is held in a home-based learning space in Jumeirah, Dubai. The exact address will be shared upon booking confirmation."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Got questions? We&apos;ve got answers! Here are the most common questions parents ask.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA after FAQ */}
        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://wa.me/97521234476?text=Hi! I have a question about the STEM workshop', '_blank')}
            className="bg-secondary text-secondary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Still have questions? Ask us on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
