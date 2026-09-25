import React, { useState } from 'react';
import { mainServices, otherServices, ServiceItem, siteConfig } from '../config/site';
import { Wind, Wrench, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Flame, Zap, Home, MessageSquare, Info } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
  onOpenServiceDetails?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForQuote, onOpenServiceDetails }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'climatizacao' | 'outros'>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const displayedServices = activeTab === 'all'
    ? [...mainServices, ...otherServices]
    : activeTab === 'climatizacao'
      ? mainServices
      : otherServices;

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'instalacao-ar-condicionado':
        return <Wind className="w-5 h-5 text-cyan-400" />;
      case 'manutencao':
        return <Wrench className="w-5 h-5 text-sky-400" />;
      case 'limpeza-higienizacao':
        return <Sparkles className="w-5 h-5 text-emerald-400" />;
      case 'assistencia-tecnica':
        return <ShieldCheck className="w-5 h-5 text-blue-400" />;
      case 'bomba-calor':
        return <Flame className="w-5 h-5 text-amber-400" />;
      case 'eletricidade':
        return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'remodelacoes':
        return <Home className="w-5 h-5 text-indigo-400" />;
      default:
        return <Wind className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-slate-900 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            O que fazemos por si
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serviços Especializados em Climatização
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Soluções completas para habitações e espaços comerciais em Coimbra. Trabalhamos com rigor técnico, pontualidade e os melhores materiais do mercado.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-slate-950 rounded-2xl border border-slate-800 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todos ({mainServices.length + otherServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('climatizacao')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'climatizacao'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Climatização ({mainServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('outros')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'outros'
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Outros Serviços ({otherServices.length})
            </button>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayedServices.map((service) => (
            <div
              key={service.id}
              className="group rounded-2xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-cyan-950/20"
            >
              {/* Service Card Image */}
              {service.image && (
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-slate-900/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-md">
                    {service.category === 'climatizacao' ? 'Ar Condicionado' : 'Especialidade'}
                  </span>

                  {service.isPlaceholder && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] bg-slate-800/90 text-slate-400 border border-slate-700">
                      Serviço Complementar
                    </span>
                  )}
                </div>
              )}

              {/* Service Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-xl bg-slate-900 border border-slate-800">
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2 border-t border-slate-800/60">
                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500 hover:to-blue-600 text-cyan-300 hover:text-slate-950 font-semibold text-xs transition-all border border-cyan-500/30 hover:border-transparent cursor-pointer"
                  >
                    <span>Pedir Orçamento</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors cursor-pointer"
                    title="Ver detalhes do serviço"
                  >
                    <Info className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/351912603408?text=${encodeURIComponent(`Olá, gostaria de informações sobre o serviço de ${service.title} em Coimbra.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-600 text-emerald-400 hover:text-white border border-emerald-500/30 transition-colors"
                    title="Falar no WhatsApp sobre este serviço"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-xl bg-slate-900 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700">
                    {getServiceIcon(selectedService.id)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-xs text-cyan-400">Instalar Ar Condicionado • Coimbra</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800 hover:bg-slate-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {selectedService.image && (
                <div className="h-52 w-full rounded-xl overflow-hidden bg-slate-950">
                  <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  O que inclui este serviço:
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-colors text-center cursor-pointer"
                >
                  Pedir Orçamento para {selectedService.title}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium text-sm transition-colors cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
