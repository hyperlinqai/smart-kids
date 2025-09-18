import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MapPin, Phone, Mail } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { insertContactSubmissionSchema } from "@shared/schema";

type FormData = z.infer<typeof insertContactSubmissionSchema>;

export default function Contact() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<FormData>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      parentName: "",
      childName: "",
      email: "",
      phone: "",
      childAge: "",
      programInterest: "",
      message: "",
    },
  });

  const submitContactForm = useMutation({
    mutationFn: async (data: FormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We'll get back to you soon.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact-submissions"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "There was an error sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitContactForm.mutate(data);
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
              Ready to <span className="text-primary">Get Started</span>?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Schedule a visit, ask questions, or begin your child's enrollment process today. We're here to help you every step of the way.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Address</div>
                      <div className="text-muted-foreground" data-testid="contact-address">123 Learning Lane, Education City, EC 12345</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Phone</div>
                      <div className="text-muted-foreground" data-testid="contact-phone">(555) 123-BRIGHT</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">Email</div>
                      <div className="text-muted-foreground" data-testid="contact-email">hello@brightmindsacademy.com</div>
                    </div>
                  </div>
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
              <h3 className="text-2xl font-semibold text-foreground mb-6">Send us a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Parent Name *</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-parent-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="childName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Child Name *</FormLabel>
                          <FormControl>
                            <Input {...field} data-testid="input-child-name" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" {...field} data-testid="input-email" />
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
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" {...field} data-testid="input-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="childAge"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Child Age</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-child-age">
                                <SelectValue placeholder="Select age" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="5">5 years old</SelectItem>
                              <SelectItem value="6">6 years old</SelectItem>
                              <SelectItem value="7">7 years old</SelectItem>
                              <SelectItem value="8">8 years old</SelectItem>
                              <SelectItem value="9">9 years old</SelectItem>
                              <SelectItem value="10">10 years old</SelectItem>
                              <SelectItem value="11">11 years old</SelectItem>
                              <SelectItem value="12">12 years old</SelectItem>
                              <SelectItem value="13">13 years old</SelectItem>
                              <SelectItem value="14">14 years old</SelectItem>
                              <SelectItem value="15">15 years old</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="programInterest"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Program Interest</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-program-interest">
                                <SelectValue placeholder="Select program" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="elementary">Elementary Program</SelectItem>
                              <SelectItem value="middle">Middle School Program</SelectItem>
                              <SelectItem value="stem">STEM Excellence</SelectItem>
                              <SelectItem value="arts">Creative Arts</SelectItem>
                              <SelectItem value="all">All Programs</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            rows={4}
                            placeholder="Tell us about your child's interests and any questions you have..."
                            data-testid="textarea-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    disabled={submitContactForm.isPending}
                    className="w-full bg-primary text-primary-foreground py-4 text-lg font-semibold hover:bg-primary/90"
                    data-testid="button-submit-contact"
                  >
                    {submitContactForm.isPending ? "Sending..." : "Send Message"}
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
