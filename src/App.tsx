import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { AtAGlanceHero } from './components/AtAGlanceHero';
import { ServicesSection } from './components/ServicesSection';
import { SkinStudio } from './components/SkinStudio';
import { RepairEstimator } from './components/RepairEstimator';
import { CustomerTestimonials } from './components/CustomerTestimonials';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white transition-colors duration-200">
        {/* 1. Top Announcement Bar */}
        <TopBar />

        {/* 2. Sticky Header Navbar with Dark / Light Mode Switcher */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-1">
          {/* 3. At a Glance Hero Card Section */}
          <AtAGlanceHero />

          {/* 4. Products & Services Section */}
          <ServicesSection />

          {/* 5. Interactive Mobile Lamination & Skins Studio */}
          <SkinStudio />

          {/* 6. Repair Time & Quote Estimator */}
          <RepairEstimator />

          {/* 7. Customer Testimonials & Repaired Devices Grid */}
          <CustomerTestimonials />

          {/* 8. Contact Us Section */}
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Actions */}
        <FloatingActions />
      </div>
    </ThemeProvider>
  );
}
