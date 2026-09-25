import React from 'react';
import { MapPin, CheckCircle2, Phone, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/site';

export const CoverageArea: React.FC = () => {
  const municipalities = [
    { name: 'Coimbra', desc: 'Sede e intervenção prioritária (todas as freguesias)' },
    { name: 'Cantanhede', desc: 'Habitações, moradias e comércio' },
    { name: 'Condeixa-a-Nova', desc: 'Instalação e manutenção residencial' },
    { name: 'Figueira da Foz', desc: 'Climatização adaptada ao litoral' },
    { name: 'Lousã', desc: 'Soluções para frio rigoroso e calor' },
    { name: 'Mealhada', desc: 'Instalação residencial e comercial' },
    { name: 'Mira', desc: 'Sistemas eficientes de ar condicionado' },
    { name: 'Miranda do Corvo', desc: 'Manutenção e novas instalações' },
    { name: 'Montemor-o-Velho', desc: 'Assistência e climatização geral' },
    { name: 'Penacova', desc: 'Bombas de calor e ar condicionado' },
    { name: 'Penela', desc: 'Intervenções técnicas e remodelações' },
    { name: 'Soure', desc: 'Habitações e espaços industriais' }
  ];

  return (
    <section id="area-atuacao" className="py-20 bg-slate-950 text-slate-100 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text & Municipalities */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" />
              Proximidade e Rapidez
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Área de Atuação: Coimbra e Concelhos Vizinhos
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Com base operacional na região de Coimbra, garantimos deslocações pontuais, acompanhamento direto e facilidade no suporte pós-venda. Atendemos particulares e empresas em todo o distrito.
            </p>

            {/* Municipalities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {municipalities.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start gap-2 hover:border-cyan-500/40 transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-white">{item.name}</p>
                    <p className="text-[10px] text-slate-400 leading-tight">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Deslocação agendada sem complicações
              </span>
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                Orçamento gratuito no concelho de Coimbra
              </span>
            </div>
          </div>

          {/* Right Visual Map Card */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Central de Atendimento</h3>
                  <p className="text-xs text-cyan-400">Distrito de Coimbra, Portugal</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center border border-cyan-500/30">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Linha Principal:</span>
                  <a href={`tel:${siteConfig.phone1Raw}`} className="font-bold text-cyan-400 hover:underline">
                    {siteConfig.phone1}
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Segunda Linha:</span>
                  <a href={`tel:${siteConfig.phone2Raw}`} className="font-bold text-cyan-400 hover:underline">
                    {siteConfig.phone2}
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Email Oficial:</span>
                  <a href={`mailto:${siteConfig.email}`} className="font-medium text-slate-200 hover:text-white">
                    {siteConfig.email}
                  </a>
                </div>
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400">Horário:</span>
                  <span className="text-slate-200">Segunda a Sábado, 08h30 - 19h30</span>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={`tel:${siteConfig.phone1Raw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Ligar Direto</span>
                </a>
                <a
                  href={siteConfig.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
