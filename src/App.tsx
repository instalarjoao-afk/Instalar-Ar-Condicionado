import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Brands } from './components/Brands';
import { Process } from './components/Process';
import { CoverageArea } from './components/CoverageArea';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { LegalModal } from './components/LegalModal';

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>('#inicio');
  const [legalModalType, setLegalModalType] = useState<'privacidade' | 'termos' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setCurrentPath(`#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-100 flex flex-col font-sans selection:bg-white selection:text-black">
      {/* Sticky Header with navigation & contact CTAs */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onNavigate={handleNavigate}
        />

        {/* Supported Brands & Technology */}
        <Brands />

        {/* Services Section */}
        <Services />

        {/* Gallery of Real Work with Before/After */}
        <Gallery />

        {/* Working Process */}
        <Process />

        {/* Service Coverage Area in Coimbra */}
        <CoverageArea />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegal={(type) => setLegalModalType(type)}
      />

      {/* Interactive Floating WhatsApp Widget */}
      <WhatsAppButton />

      {/* Legal & Privacy RGPD Modal */}
      {legalModalType && (
        <LegalModal
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
      )}
    </div>
  );
}
