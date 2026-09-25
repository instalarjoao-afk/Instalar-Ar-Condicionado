import React from 'react';
import { siteConfig } from '../config/site';
import { ShieldCheck, Zap, Volume2, Sparkles } from 'lucide-react';

export const Brands: React.FC = () => {
  return (
    <section id="marcas" className="py-20 bg-[#050505] text-neutral-100 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Qualidade & Fiabilidade
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Marcas de Confiança com que Trabalhamos
          </h2>
          <p className="mt-4 text-base text-neutral-400">
            Selecionamos equipamentos com garantia de fábrica, tecnologia Inverter de alta eficiência energética (A+++ e A++) e funcionamento ultra-silencioso.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteConfig.brands.map((brand, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-all text-center flex flex-col justify-between items-center group hover:bg-neutral-900/90 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Brand Logo Container replacing initials */}
              <div className="w-full h-18 rounded-xl bg-neutral-950/80 border border-neutral-800/80 flex items-center justify-center p-2.5 group-hover:border-neutral-700 group-hover:bg-neutral-950 transition-all">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`Logótipo ${brand.name}`}
                    className="max-h-10 w-auto max-w-[120px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <span className="text-white font-bold text-sm tracking-wide">
                    {brand.name}
                  </span>
                )}
              </div>

              <div className="mt-3 w-full">
                <h3 className="font-bold text-white text-sm group-hover:text-white transition-colors">
                  {brand.name}
                </h3>
                {brand.tag && (
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-800/90 text-neutral-300 border border-neutral-700/60">
                    {brand.tag}
                  </span>
                )}
                <p className="text-[11px] text-neutral-400 mt-1.5 line-clamp-2 leading-relaxed">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Advantages Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200">
            <Zap className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Classe Energética A+++ / A++</p>
              <p className="text-[11px] text-neutral-400">Poupança significativa na fatura elétrica</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200">
            <Volume2 className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Modo Silencioso (até 19dB)</p>
              <p className="text-[11px] text-neutral-400">Ideal para noites de sono tranquilas</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200">
            <Sparkles className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Conectividade Wi-Fi</p>
              <p className="text-[11px] text-neutral-400">Controlo no telemóvel por aplicação</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-200">
            <ShieldCheck className="w-5 h-5 text-white shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Garantia de 3 Anos</p>
              <p className="text-[11px] text-neutral-400">Garantia legal e suporte em Coimbra</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
