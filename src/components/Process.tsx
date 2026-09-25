import React from 'react';
import { siteConfig } from '../config/site';
import { MessageSquare, ClipboardCheck, FileText, Wrench, ThumbsUp, ArrowRight } from 'lucide-react';

interface ProcessProps {
  onOpenQuote: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenQuote }) => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-cyan-400" key="1" />,
    <ClipboardCheck className="w-5 h-5 text-sky-400" key="2" />,
    <FileText className="w-5 h-5 text-emerald-400" key="3" />,
    <Wrench className="w-5 h-5 text-amber-400" key="4" />,
    <ThumbsUp className="w-5 h-5 text-blue-400" key="5" />
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Simples, Rápido & Sem Complicações
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Como Funciona o Nosso Processo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Desde o primeiro contacto até à conclusão do trabalho, garantimos clareza, rigor nos prazos e total acompanhamento.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-700 group-hover:text-cyan-400/80 transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="font-bold text-white text-base mb-2 group-hover:text-cyan-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < siteConfig.processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                  <ArrowRight className="w-5 h-5 text-slate-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-cyan-950/60 via-slate-950 to-blue-950/60 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-xl sm:text-2xl font-bold text-white">Pronto para climatizar o seu espaço?</h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Solicite uma avaliação sem compromisso para a sua casa ou empresa em Coimbra.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
            >
              Solicitar Orçamento Grátis
            </button>
            <a
              href={siteConfig.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
              title="Falar no WhatsApp"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
