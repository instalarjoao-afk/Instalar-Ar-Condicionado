import React from 'react';
import { Phone, MessageSquare, ShieldCheck, Clock, CheckCircle2, MapPin, Wrench } from 'lucide-react';
import { siteConfig } from '../config/site';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-transparent via-[#050505]/40 to-transparent text-neutral-100">
      {/* Background Glows & Architectural Grid Lines in Neutral Grays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/[0.03] rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-neutral-600/[0.04] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(#262626_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Value Proposition, Action CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 text-neutral-300 text-xs sm:text-sm font-medium shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-neutral-400 animate-ping" />
              <MapPin className="w-3.5 h-3.5 text-neutral-400" />
              <span>Especialistas em Climatização em Coimbra e Região</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              Instalação e Manutenção de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">Ar Condicionado</span> em Coimbra
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Conforto térmico todo o ano para a sua habitação ou empresa. Equipamentos eficientes, instalação limpa, manutenção preventiva e assistência técnica de confiança.
            </p>

            {/* Value Highlights List */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs sm:text-sm text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-white shrink-0" />
                <span>Atendimento Direto</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs sm:text-sm text-neutral-200">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span>Resposta Rápida</span>
              </div>
              <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs sm:text-sm text-neutral-200">
                <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                <span>Acabamento Cuidado</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-4">
              {/* WhatsApp Button remains Green */}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm border border-emerald-500/40 shadow-lg shadow-emerald-950/40 transition-all hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar no WhatsApp ({siteConfig.phone})</span>
              </a>

              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 font-medium border border-neutral-700/80 transition-all hover:border-neutral-600"
                title="Ligar agora"
              >
                <Phone className="w-4 h-4 text-neutral-300" />
                <span>Ligar: {siteConfig.phone}</span>
              </a>
            </div>

            {/* Schedule Note */}
            <p className="text-xs text-neutral-400 text-center lg:text-left pt-1">
              Segunda a Sábado das 08h30 às 19h30 • Contacto exclusivo: {' '}
              <a href={`tel:${siteConfig.phoneRaw}`} className="text-white hover:underline font-semibold">
                +351 {siteConfig.phone}
              </a>
            </p>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/80 p-2 shadow-2xl shadow-black">
                <div className="relative h-80 sm:h-96 w-full rounded-xl overflow-hidden bg-neutral-950">
                  <img
                    src="/images/Imagem 3.jpeg"
                    alt="Instalação profissional de ar condicionado em Coimbra"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />
                  
                  {/* Floating Badge on Image */}
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Trabalho Realizado</p>
                      <p className="text-sm font-bold text-white">Instalação Split Residencial</p>
                      <p className="text-xs text-neutral-300">Passagem oculta e acabamento perfeito</p>
                    </div>
                    <button
                      onClick={() => onNavigate('galeria')}
                      className="px-3 py-1.5 rounded-lg bg-neutral-800 text-white hover:bg-neutral-700 border border-neutral-700 text-xs font-medium cursor-pointer transition-colors"
                    >
                      Ver Galeria
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Review/Confidence Badge */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 p-4 rounded-xl bg-neutral-900/95 border border-neutral-700 shadow-xl backdrop-blur-md flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center shrink-0">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="flex items-center gap-1 text-white text-xs">
                    {'★'.repeat(5)}
                    <span className="text-neutral-300 font-semibold ml-1 text-xs">5.0</span>
                  </div>
                  <p className="text-xs font-semibold text-white">Serviço de Confiança</p>
                  <p className="text-[11px] text-neutral-400">Coimbra e Municípios Vizinhos</p>
                </div>
              </div>

              {/* Floating Brand/Model Badge */}
              <div className="hidden sm:flex absolute -top-5 -right-4 p-3 rounded-xl bg-neutral-900/90 border border-neutral-700 shadow-xl backdrop-blur-md items-center gap-2 text-xs text-neutral-200">
                <img src="/logo.png" alt="Instalar Ar Condicionado" className="w-8 h-8 rounded-full border border-neutral-700" />
                <div>
                  <p className="font-bold text-white text-[12px]">Equipamentos Certificados</p>
                  <p className="text-[10px] text-neutral-400">CoolSmart • Nipon • Haier • Mitsubishi</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
