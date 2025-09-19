"use client";

import { useToast } from "@/hooks/use-toast";

export default function CTA() {
  const { toast } = useToast();

  const handleEnrollNow = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download",
      description: "Please contact us using the form below to receive our digital brochure!",
    });
  };

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl font-bold">
            Your Child&apos;s Bright Future Starts Here
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Join hundreds of families who have chosen BrightMinds Academy for their children&apos;s educational journey. Excellence, creativity, and personalized care await.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleEnrollNow}
              className="bg-primary-foreground text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/90 transition-colors"
              data-testid="button-enroll-now-cta"
            >
              Enroll Now
            </button>
            <button
              onClick={handleDownloadBrochure}
              className="border-2 border-primary-foreground text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
              data-testid="button-download-brochure"
            >
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
