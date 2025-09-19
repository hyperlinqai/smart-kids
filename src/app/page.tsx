"use client";

import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Hero from "@/components/sections/hero";
import Approach from "@/components/sections/approach";
import FAQ from "@/components/sections/faq";
import Contact from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Approach />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

 
