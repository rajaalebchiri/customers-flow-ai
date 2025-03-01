"use client";
import Hero from "@/components/(LandingPage)/Hero";
import { Features } from "@/components/(LandingPage)/Features";
import FAQs from "@/components/(LandingPage)/FAQs";
import CTA from "@/components/(LandingPage)/CTA";
import Posts from "@/components/(LandingPage)/Posts";
import Header from "@/components/Header";
import FooterSection from "@/components/sections/footer/default";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <FAQs />
      <Posts />
      <CTA />
      <FooterSection />
    </main>
  );
}
