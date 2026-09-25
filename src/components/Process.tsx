import React from 'react';
import { siteConfig } from '../config/site';
import { MessageSquare, ClipboardCheck, FileText, Wrench, ThumbsUp, ArrowRight, Phone } from 'lucide-react';

export const Process: React.FC = () => {
  const stepIcons = [
    <MessageSquare className="w-5 h-5 text-white" key="1" />,
    <ClipboardCheck className="w-5 h-5 text-neutral-300" key="2" />,
    <FileText className="w-5 h-5 text-white" key="3" />,
    <Wrench className="w-5 h-5 text-neutral-300" key="4" />,
    <ThumbsUp className="w-5 h-5 text-white" key="5" />
  ];

  return (
    <section className="py-20 md:py-28 bg-black/30 text-neutral-100 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Simples, Rápido & Sem Complicações
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Como Funciona o Nosso Processo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Desde o primeiro contacto até à conclusão do trabalho, garantimos clareza, rigor nos prazos e total acompanhamento.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {siteConfig.processSteps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 rounded-2xl bg-neutral-950 border border-neutral-800 flex flex-col justify-between hover:border-neutral-600 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-neutral-700 group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-110 transition-transform">
                    {stepIcons[idx]}
                  </div>
                </div>

                <h3 className="font-bold text-white text-base mb-2 group-hover:text-neutral-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {idx < siteConfig.processSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-neutral-700">
                  <ArrowRight className="w-5 h-5 text-neutral-600" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-xl sm:text-2xl font-bold text-white">Pronto para climatizar o seu espaço?</h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              Fale diretamente connosco para a sua habitação ou empresa em Coimbra.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {/* WhatsApp button - preserved green */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-950/40 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Falar no WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="px-5 py-3 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-200 font-medium text-sm border border-neutral-700 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-neutral-300" />
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
