import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import GalaxyBackground from '@/components/GalaxyBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import PricingSection from '@/components/PricingSection';
import RulesSection from '@/components/RulesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        {/* Animated Galaxy Background */}
        <GalaxyBackground />

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
          <HowItWorks />
          <PricingSection />
          <RulesSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </LanguageProvider>
  );
};

export default Index;
