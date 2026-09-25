import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2, ChevronRight, Sparkles, MapPin, Wrench } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onOpenQuote: (serviceId?: string) => void;
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Glows & Architectural Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-400 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>Especialistas em Climatização em Coimbra e Região</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Instalação e Manutenção de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">Ar Condicionado</span> em Coimbra
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Conforto térmico todo o ano para a sua habitação ou empresa. Equipamentos eficientes, instalação limpa, manutenção preventiva e assistência técnica de confiança.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Orçamento Gratuito</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Resposta Rápida</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Acabamento Cuidado</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              <button
                type="button"
                onClick={() => onOpenQuote()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Simular Orçamento Online</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.whatsapp1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-semibold border border-emerald-500/40 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp ({siteConfig.phone1})</span>
              </a>

              <a
                href={`tel:${siteConfig.phone1Raw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-medium border border-slate-700/80 transition-all hover:border-slate-600"
                title="Ligar agora"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span className="sm:hidden lg:inline">{siteConfig.phone1}</span>
                <span className="hidden sm:inline lg:hidden">Ligar</span>
              </a>
            </div>

            {/* Secondary Contact Note */}
            <p className="text-xs text-slate-400 text-center lg:text-left pt-1">
              Também disponível no segundo contacto:{' '}
              <a href={`tel:${siteConfig.phone2Raw}`} className="text-cyan-400 hover:underline font-medium">
                {siteConfig.phone2}
              </a>
              {' '}• Segunda a Sábado das 08h30 às 19h30
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/80 p-2 shadow-2xl shadow-cyan-950/30">
                <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-slate-950">
                  <img
                    src="/images/servico-01.jpeg"
                    alt="Instalação profissional de ar condicionado em Coimbra"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/60 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">Trabalho Realizado</p>
                      <p className="text-sm font-bold text-white">Instalação Split Residencial</p>
                      <p className="text-xs text-slate-300">Passagem oculta e acabamento perfeito</p>
                    </div>
                    <button
                      onClick={() => onNavigate('galeria')}
                      className="px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border border-cyan-500/30 text-xs font-medium cursor-pointer transition-colors"
                    >
                      Ver Galeria
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Review/Confidence Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-xl bg-slate-900/95 border border-slate-700 shadow-xl backdrop-blur-md flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400 text-xs">
                    {'★'.repeat(5)}
                    <span className="text-slate-300 font-semibold ml-1 text-xs">5.0</span>
                  </div>
                  <p className="text-xs font-semibold text-white">Serviço de Confiança</p>
                  <p className="text-[11px] text-slate-400">Coimbra e Municípios Vizinhos</p>
                </div>
              </div>

              {/* Floating Brand/Model Badge */}
              <div className="hidden sm:flex absolute -top-5 -right-4 p-3 rounded-xl bg-slate-900/90 border border-slate-700 shadow-xl backdrop-blur-md items-center gap-2 text-xs text-slate-200">
                <img src="/logo.png" alt="Instalar Ar Condicionado" className="w-8 h-8 rounded-full border border-slate-700" />
                <div>
                  <p className="font-bold text-white text-[12px]">Equipamentos Certificados</p>
                  <p className="text-[10px] text-cyan-400">CoolSmart • Nipon • Haier • Mitsubishi</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
