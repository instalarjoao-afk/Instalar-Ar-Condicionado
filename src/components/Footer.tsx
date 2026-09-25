import React from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, MapPin, Instagram, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegal: (type: 'privacidade' | 'termos') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Col 1: Branding & Intro (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={siteConfig.logo}
                alt={siteConfig.companyName}
                className="w-12 h-12 rounded-full border border-slate-700 bg-slate-900 object-cover"
              />
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block">
                  {siteConfig.companyName}
                </span>
                <span className="text-[11px] text-cyan-400 uppercase tracking-wider block">
                  Climatização • Coimbra
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Especialistas em instalação, manutenção e assistência de ar condicionado em Coimbra e região. Soluções complementares em eletricidade, bombas de calor e remodelações.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-pink-950/60 border border-slate-800 hover:border-pink-500/40 text-slate-300 hover:text-pink-400 transition-colors"
                title="Siga-nos no Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.whatsapp1}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-900 hover:bg-emerald-950/60 border border-slate-800 hover:border-emerald-500/40 text-slate-300 hover:text-emerald-400 transition-colors"
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
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Instalação de Ar Condicionado
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Manutenção e Revisão Preventiva
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Limpeza e Higienização Antibacteriana
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Assistência Técnica e Avarias
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
                >
                  Bombas de Calor & Eletricidade
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('servicos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left"
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
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Início
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('galeria')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Galeria de Trabalhos
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('orcamento')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Simulador de Orçamento
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('marcas')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Marcas Parceiras
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('faq')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Perguntas Frequentes
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('contactos')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer"
                >
                  Contactos
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacto Rápido & Legal (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Coimbra e Região
            </h4>
            <div className="space-y-2 text-xs sm:text-sm">
              <p className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Distrito de Coimbra, Portugal</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`tel:${siteConfig.phone1Raw}`} className="text-slate-300 hover:text-cyan-400">
                  {siteConfig.phone1}
                </a>
                <span>/</span>
                <a href={`tel:${siteConfig.phone2Raw}`} className="text-slate-300 hover:text-cyan-400">
                  {siteConfig.phone2}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-slate-300 hover:text-cyan-400 break-all">
                  {siteConfig.email}
                </a>
              </p>
            </div>

            {/* Livro de Reclamações & Legal Portugal */}
            <div className="pt-3 border-t border-slate-900 space-y-2">
              <a
                href="https://www.livroreclamacoes.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-slate-200"
              >
                <span>Livro de Reclamações Eletrónico</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
              <div className="flex items-center gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacidade')}
                  className="text-slate-400 hover:text-cyan-400 underline cursor-pointer"
                >
                  Política de Privacidade
                </button>
                <span>•</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('termos')}
                  className="text-slate-400 hover:text-cyan-400 underline cursor-pointer"
                >
                  Termos & Condições
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} {siteConfig.companyName}. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Desenvolvido para máxima rapidez e eficiência térmica</span>
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
          </p>
        </div>

      </div>
    </footer>
  );
};
