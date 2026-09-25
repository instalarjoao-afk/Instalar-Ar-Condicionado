import React from 'react';
import { siteConfig } from '../config/site';
import { ShieldCheck, Zap, Volume2, Award, Sparkles } from 'lucide-react';

export const Brands: React.FC = () => {
  return (
    <section id="marcas" className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Qualidade & Fiabilidade
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Marcas de Confiança com que Trabalhamos
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Selecionamos equipamentos com garantia de fábrica, tecnologia Inverter de alta eficiência energética (A+++ e A++) e funcionamento ultra-silencioso.
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {siteConfig.brands.map((brand, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all text-center flex flex-col justify-between items-center group hover:bg-slate-900"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-800/80 flex items-center justify-center text-cyan-400 font-black text-lg group-hover:scale-110 transition-transform">
                {brand.name.substring(0, 2).toUpperCase()}
              </div>
              <div className="mt-3">
                <h3 className="font-bold text-white text-sm group-hover:text-cyan-400 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  {brand.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technical Advantages Badges */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-200">
            <Zap className="w-5 h-5 text-amber-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Classe Energética A+++ / A++</p>
              <p className="text-[11px] text-slate-400">Poupança significativa na fatura elétrica</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-200">
            <Volume2 className="w-5 h-5 text-cyan-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Modo Silencioso (até 19dB)</p>
              <p className="text-[11px] text-slate-400">Ideal para noites de sono tranquilas</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-200">
            <Sparkles className="w-5 h-5 text-emerald-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Conectividade Wi-Fi</p>
              <p className="text-[11px] text-slate-400">Controlo no telemóvel por aplicação</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-200">
            <ShieldCheck className="w-5 h-5 text-blue-400 shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Garantia de 3 Anos</p>
              <p className="text-[11px] text-slate-400">Garantia legal e suporte em Coimbra</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
