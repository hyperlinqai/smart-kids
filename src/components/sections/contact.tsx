"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  city: z.string().min(1, "City is required"),
  phone: z
    .string()
    .min(5, "Phone is required")
    .regex(/^[0-9+\-()\s]*$/, "Invalid phone number format"),
});

type FormData = z.infer<typeof leadSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(leadSchema),
    defaultValues: {
      name: "",
      city: "",
      phone: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        const err = await res.json().catch(() => ({}))
        throw new Error(err.error || 'Failed to send lead')
      }

      toast({
        title: "Thanks!",
        description: "Your details have been sent. We'll contact you shortly.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was an error sending your details. Please try WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleScheduleTour = () => {
    toast({
      title: "Tour Scheduling",
      description: "Please fill out the contact form below and mention 'tour' in your message, and we'll get back to you shortly!",
    });
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="text-primary">Book Your Spot</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Secure your child&apos;s spot in our exciting STEM workshop! Limited seats available - book now via WhatsApp or fill out the form below.
            </p>

            {/* Primary WhatsApp CTA */}
            <div className="mt-8">
              <button
                onClick={() => window.open('https://wa.me/97521234476?text=Hi! I want to book a STEM workshop for my child', '_blank')}
                className="bg-green-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-green-700 transition-colors shadow-lg inline-flex items-center gap-3"
              >
                📱 Book via WhatsApp – Limited Seats
              </button>
              <p className="text-sm text-muted-foreground mt-2">Fastest way to secure your spot!</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Workshop Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Location</div>
                      <div className="text-muted-foreground" data-testid="contact-address">Jumeirah, Dubai (exact address shared upon booking)</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">WhatsApp</div>
                      <div className="text-muted-foreground" data-testid="contact-phone">+97 52 123 4476</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground" data-testid="contact-email">sarah@stemkidsworkshop.com</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">💰 Price: AED 75 per child</h4>
                  <p className="text-sm text-muted-foreground">Includes all materials + participation certificate</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Visit Our Campus</h3>
                <p className="text-muted-foreground mb-4">
                  Schedule a tour to see our facilities, meet our teachers, and experience the BrightMinds environment firsthand.
                </p>
                <Button
                  onClick={handleScheduleTour}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  data-testid="button-schedule-tour"
                >
                  Schedule a Tour
                </Button>
              </div>
            </div>

            <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Quick Lead Capture</h3>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City *</FormLabel>
                        <FormControl>
                          <Input {...field} data-testid="input-city" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone *</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold hover:bg-primary/90"
                    data-testid="button-submit-contact"
                  >
                    {isSubmitting ? "Processing..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
