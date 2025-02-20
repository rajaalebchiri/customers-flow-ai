"use client";
import Hero from "@/components/(LandingPage)/Hero";
import { Features } from "@/components/(LandingPage)/Features";
import FAQs from "@/components/(LandingPage)/FAQs";
import CTA from "@/components/(LandingPage)/CTA";
import Posts from "@/components/(LandingPage)/Posts";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* Features */}
      <Features />

      {/* FAQs */}
      <FAQs />

      {/* CTAs */}

      {/* Blog Posts Section */}
      <Posts />

      <CTA />
    </main>
  );
}
