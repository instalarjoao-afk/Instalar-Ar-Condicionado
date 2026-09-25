import React from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, MapPin, Instagram, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: 'privacidade' | 'termos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="bg-black/40 text-neutral-400 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-neutral-900">
          
          {/* Col 1: Branding & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt={siteConfig.companyName}
                className="w-12 h-12 rounded-full border border-neutral-700 bg-neutral-900 object-cover"
              />
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  {siteConfig.companyName}
                </span>
                <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                  Climatização • Coimbra
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              Especialistas em instalação, manutenção e assistência de ar condicionado em Coimbra e região. Soluções complementares em eletricidade, bombas de calor e remodelações.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
                title="Siga-nos no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              {/* WhatsApp button - preserved green */}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white border border-emerald-500/40 transition-colors"
                title="WhatsApp Directo"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Serviços (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Instalação de Ar Condicionado
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Manutenção e Revisão Preventiva
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Limpeza e Higienização Antibacteriana
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Assistência Técnica e Avarias
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Bombas de Calor & Eletricidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Remodelações e Tetos Falsos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Navegação Rápida (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('marcas')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Marcas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contactos')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contactos
                </button>
              </li>
              <li>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors inline-block"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Rápido & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Coimbra e Região
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="flex items-center gap-2 text-neutral-300">
                <MapPin className="w-4 h-4 text-white shrink-0" />
                <span>Distrito de Coimbra, Portugal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${siteConfig.phoneRaw}`} className="text-neutral-300 hover:text-white font-medium">
                  +351 {siteConfig.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-neutral-300 hover:text-white break-all">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            {/* Livro de Reclamações & Legal Portugal */}
            <div className="pt-3 border-t border-neutral-900 space-y-2">
              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-neutral-200"
              >
                <span>Livro de Reclamações Eletrónico</span>
                <ExternalLink className="w-3 h-3 text-neutral-500" />
              </a>
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacidade')}
                  className="text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Política de Privacidade
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('termos')}
                  className="text-neutral-400 hover:text-white underline cursor-pointer"
                >
                  Termos & Condições
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido para máxima rapidez e eficiência térmica</span>
            <ShieldCheck className="w-3.5 h-3.5 text-white" />
          </p>
        </div>

      </div>
    </footer>
  );
};
