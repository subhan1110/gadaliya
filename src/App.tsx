import React from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { AtAGlanceHero } from './components/AtAGlanceHero';
import { ServicesSection } from './components/ServicesSection';
import { SkinStudio } from './components/SkinStudio';
import { RepairEstimator } from './components/RepairEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* 1. Top Announcement Bar matching item-shop-mobile */}
      <TopBar />

      {/* 2. Sticky Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 3. At a Glance Hero Card Section */}
        <AtAGlanceHero />

        {/* 4. Products & Services Section with Gujarati & English info */}
        <ServicesSection />

        {/* 5. Interactive Mobile Lamination & Skins Studio */}
        <SkinStudio />

        {/* 6. Repair Time & Quote Estimator */}
        <RepairEstimator />

        {/* 7. Exact 3-Column Contact Us Section matching reference */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action */}
      <FloatingActions />
    </div>
  );
}
