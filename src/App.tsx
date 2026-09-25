import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { QuoteCalculator } from './components/QuoteCalculator';
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
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacidade' | 'termos' | null>(null);

  const handleNavigate = (sectionId: string) => {
    setCurrentPath(`#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenQuote = (serviceTitle?: string) => {
    if (serviceTitle) {
      setPreselectedService(serviceTitle);
    }
    handleNavigate('orcamento');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Sticky Header with navigation & contact CTAs */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onNavigate={handleNavigate}
        />

        {/* Services Section */}
        <Services
          onSelectServiceForQuote={handleOpenQuote}
        />

        {/* Instant Quote Simulation Tool */}
        <QuoteCalculator
          initialService={preselectedService}
        />

        {/* Gallery of Real Work with Before/After */}
        <Gallery
          onSelectPhotoForQuote={handleOpenQuote}
        />

        {/* Supported Brands & Technology */}
        <Brands />

        {/* Working Process */}
        <Process
          onOpenQuote={() => handleOpenQuote()}
        />

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
