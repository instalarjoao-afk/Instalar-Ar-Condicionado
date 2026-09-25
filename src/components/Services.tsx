import React, { useState } from 'react';
import { mainServices, otherServices, ServiceItem, siteConfig } from '../config/site';
import { Wind, Wrench, Sparkles, CheckCircle2, ShieldCheck, Flame, Zap, Home, MessageSquare, Info } from 'lucide-react';

interface ServicesProps {
  onOpenServiceDetails?: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = () => {
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
        return <Wind className="w-5 h-5 text-white" />;
      case 'manutencao':
        return <Wrench className="w-5 h-5 text-neutral-300" />;
      case 'limpeza-higienizacao':
        return <Sparkles className="w-5 h-5 text-white" />;
      case 'assistencia-tecnica':
        return <ShieldCheck className="w-5 h-5 text-neutral-300" />;
      case 'bomba-calor':
        return <Flame className="w-5 h-5 text-white" />;
      case 'eletricidade':
        return <Zap className="w-5 h-5 text-neutral-300" />;
      case 'remodelacoes':
        return <Home className="w-5 h-5 text-white" />;
      default:
        return <Wind className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-black/30 text-neutral-100 relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            O que fazemos por si
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Serviços Especializados em Climatização
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Soluções completas para habitações e espaços comerciais em Coimbra. Trabalhamos com rigor técnico, pontualidade e os melhores materiais do mercado.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-neutral-950 rounded-2xl border border-neutral-800 max-w-md mx-auto">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Todos ({mainServices.length + otherServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('climatizacao')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'climatizacao'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Climatização ({mainServices.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('outros')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeTab === 'outros'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'text-neutral-400 hover:text-white'
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
              className="group rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 flex flex-col overflow-hidden hover:shadow-xl hover:shadow-black"
            >
              {/* Service Card Image */}
              {service.image && (
                <div className="relative h-48 w-full overflow-hidden bg-neutral-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill on Image */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-black/80 text-neutral-200 border border-neutral-700 backdrop-blur-md">
                    {service.category === 'climatizacao' ? 'Ar Condicionado' : 'Especialidade'}
                  </span>

                  {service.isPlaceholder && (
                    <span className="absolute top-3 right-3 px-2 py-0.5 rounded text-[10px] bg-neutral-900/90 text-neutral-400 border border-neutral-800">
                      Serviço Complementar
                    </span>
                  )}
                </div>
              )}

              {/* Service Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="p-2 rounded-xl bg-neutral-800 border border-neutral-700">
                      {getServiceIcon(service.id)}
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-neutral-200 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Key Features Bullet List */}
                  {service.features && service.features.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-neutral-800 pt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-white shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center gap-2 border-t border-neutral-800">
                  <a
                    href={`https://wa.me/351924807017?text=${encodeURIComponent(`Olá, gostaria de informações sobre o serviço de ${service.title} em Coimbra.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs transition-all shadow-sm"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Consultar no WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="p-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 transition-colors cursor-pointer"
                    title="Ver detalhes do serviço"
                  >
                    <Info className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
            <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-700 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-neutral-800 border border-neutral-700">
                    {getServiceIcon(selectedService.id)}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{selectedService.title}</h3>
                    <p className="text-xs text-neutral-400">Instalar Ar Condicionado • Coimbra</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="text-neutral-400 hover:text-white p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 cursor-pointer"
                >
                  ✕
                </button>
              </div>

              {selectedService.image && (
                <div className="h-52 w-full rounded-xl overflow-hidden bg-neutral-950">
                  <img src={selectedService.image} alt={selectedService.title} className="w-full h-full object-cover" />
                </div>
              )}

              <p className="text-sm text-neutral-300 leading-relaxed">
                {selectedService.description}
              </p>

              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                  O que inclui este serviço:
                </h4>
                <ul className="space-y-2">
                  {selectedService.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle2 className="w-4 h-4 text-white shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href={`https://wa.me/351924807017?text=${encodeURIComponent(`Olá, gostaria de esclarecer dúvidas sobre o serviço de ${selectedService.title} em Coimbra.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-colors text-center flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Falar no WhatsApp sobre este Serviço</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 font-medium text-sm transition-colors cursor-pointer"
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
