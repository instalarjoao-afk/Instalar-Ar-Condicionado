import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const cleanId = target.replace('#', '').replace('/', '');
    if (onNavigate) {
      onNavigate(cleanId || 'inicio');
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/90 backdrop-blur-md border-b border-[#282828] py-3 shadow-xl'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, '/')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#BFC0C2] rounded-lg p-1"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-[#BFC0C2]/30 p-0.5 bg-[#171717] group-hover:border-[#BFC0C2] transition-colors">
              <img
                src={siteConfig.logo}
                alt="Logótipo Instalar Ar Condicionado"
                className="w-full h-full object-contain rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-white transition-colors">
                {siteConfig.companyName}
              </span>
              <span className="text-[11px] sm:text-xs text-[#BFC0C2] tracking-wider uppercase">
                {siteConfig.serviceArea}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="text-sm font-medium text-[#E5E5E5] hover:text-white transition-colors"
            >
              Início
            </a>
            <a
              href="#marcas"
              onClick={(e) => handleLinkClick(e, '#marcas')}
              className="text-sm font-medium text-[#E5E5E5] hover:text-white transition-colors"
            >
              Marcas
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleLinkClick(e, '#servicos')}
              className="text-sm font-medium text-[#E5E5E5] hover:text-white transition-colors"
            >
              Serviços
            </a>
            <a
              href="#contactos"
              onClick={(e) => handleLinkClick(e, '#contactos')}
              className="text-sm font-medium text-[#E5E5E5] hover:text-white transition-colors"
            >
              Contactos
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-[#BFC0C2] hover:text-white transition-colors"
            >
              <span>Instagram</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="metal-button-secondary px-3.5 py-2 rounded-lg text-xs font-semibold inline-flex items-center gap-2"
              title="Ligar"
            >
              <Phone className="w-3.5 h-3.5 text-neutral-300" />
              <span>{siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar pelo WhatsApp"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-lg inline-flex items-center gap-2 shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
              title="Falar pelo WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Actions: WhatsApp & Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-600 text-white"
              aria-label="WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#171717] border border-[#282828] text-[#E5E5E5] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#BFC0C2]"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0A0A] border-b border-[#282828] px-4 pt-4 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="px-3 py-2.5 rounded-md text-base font-medium text-white hover:bg-[#171717]"
            >
              Início
            </a>
            <a
              href="#marcas"
              onClick={(e) => handleLinkClick(e, '#marcas')}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#E5E5E5] hover:bg-[#171717] hover:text-white"
            >
              Marcas
            </a>
            <a
              href="#servicos"
              onClick={(e) => handleLinkClick(e, '#servicos')}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#E5E5E5] hover:bg-[#171717] hover:text-white"
            >
              Serviços
            </a>
            <a
              href="#contactos"
              onClick={(e) => handleLinkClick(e, '#contactos')}
              className="px-3 py-2.5 rounded-md text-base font-medium text-[#E5E5E5] hover:bg-[#171717] hover:text-white"
            >
              Contactos
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-3 py-2.5 rounded-md text-base font-medium text-[#BFC0C2] hover:bg-[#171717] hover:text-white"
            >
              <span>Ver Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <div className="pt-3 border-t border-[#282828] flex flex-col gap-2">
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-center text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+351 {siteConfig.phone})</span>
              </a>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="metal-button-secondary w-full py-2.5 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Ligar: {siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
