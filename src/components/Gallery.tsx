import React, { useState } from 'react';
import { galleryImages, GalleryItem } from '../config/site';
import { ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, CheckCircle2, MessageSquare } from 'lucide-react';

interface GalleryProps {}

export const Gallery: React.FC<GalleryProps> = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);
  const [sliderPosition, setSliderPosition] = useState<number>(50);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(item => item.category === selectedCategory);

  const currentIndex = activeImage
    ? filteredImages.findIndex(img => img.id === activeImage.id)
    : -1;

  const handleNext = () => {
    if (currentIndex >= 0 && currentIndex < filteredImages.length - 1) {
      setActiveImage(filteredImages[currentIndex + 1]);
    } else {
      setActiveImage(filteredImages[0]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setActiveImage(filteredImages[currentIndex - 1]);
    } else {
      setActiveImage(filteredImages[filteredImages.length - 1]);
    }
  };

  return (
    <section id="galeria" className="py-20 md:py-28 bg-[#050505] text-neutral-100 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            O Nosso Trabalho em Fotografias
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Galeria de Trabalhos Realizados
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400 leading-relaxed">
            Fotografias reais das nossas intervenções em Coimbra e concelhos vizinhos. Veja a qualidade dos acabamentos, passagens de tubagem protegidas e o cuidado na higienização.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Todas as Fotos ({galleryImages.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('instalacao')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'instalacao'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Instalações Interiores
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('exterior')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'exterior'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Unidades Exteriores
            </button>
            <button
              type="button"
              onClick={() => setSelectedCategory('higienizacao')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === 'higienizacao'
                  ? 'bg-white text-black shadow-md shadow-white/10'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white border border-neutral-800'
              }`}
            >
              Higienização & Filtros
            </button>
          </div>
        </div>

        {/* Interactive Before / After Spotlight */}
        <div className="mb-16 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2 space-y-4 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                Destaque Higienização
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Antes e Depois: A Importância da Limpeza Profissional
              </h3>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
                Filtros sujos e bactérias acumuladas reduzem a eficiência energética em até 30% e libertam ácaros e maus odores para o ar que a sua família respira.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Eliminação de poeiras, fungos e odores desagradáveis</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Redução imediata no consumo da fatura da luz</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                  <span>Proteção da durabilidade do compressor e turbina</span>
                </li>
              </ul>
              <div className="pt-2">
                {/* WhatsApp Button remains Green */}
                <a
                  href={`https://wa.me/351924807017?text=${encodeURIComponent("Olá! Gostaria de agendar uma limpeza e higienização de ar condicionado em Coimbra.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-950/40"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Marcar Higienização no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Before/After Split Viewer */}
            <div className="lg:w-1/2 w-full">
              <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden select-none border border-neutral-700 bg-neutral-950 shadow-inner">
                {/* Clean Image (After) */}
                <img
                  src="/images/servico-05.jpeg"
                  alt="Depois da higienização"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 z-10 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-600 text-white text-xs font-bold backdrop-blur-md">
                  DEPOIS (Higienizado)
                </span>

                {/* Dirty Image (Before) clipped by slider */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src="/images/servico-04.jpeg"
                    alt="Antes da limpeza - filtros com pó"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: '100%', minWidth: '100%' }}
                  />
                  <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded-md bg-black/90 border border-neutral-700 text-neutral-300 text-xs font-bold backdrop-blur-md">
                    ANTES (Poeira e sujidade)
                  </span>
                </div>

                {/* Slider divider line and handle in crisp white */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.7)] cursor-ew-resize z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-lg font-bold text-xs pointer-events-none">
                    ↔
                  </div>
                </div>

                {/* Interactive Slider Input */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  aria-label="Controlo deslizante de antes e depois"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                />
              </div>
              <p className="text-[11px] text-neutral-400 text-center mt-2">
                Arraste o cursor para comparar o estado inicial com o resultado final da higienização
              </p>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setActiveImage(image)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl hover:shadow-black"
            >
              <div className="relative h-64 w-full overflow-hidden bg-neutral-950">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Category Badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[11px] font-semibold uppercase bg-black/80 text-neutral-200 border border-neutral-700 backdrop-blur-md">
                  {image.categoryLabel}
                </span>

                {/* Zoom Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Title & Brief Caption */}
              <div className="p-4 bg-neutral-950 border-t border-neutral-800">
                <h4 className="text-sm font-bold text-white group-hover:text-neutral-200 transition-colors">
                  {image.title}
                </h4>
                <p className="text-xs text-neutral-400 mt-1 line-clamp-2">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in">
            <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
              
              {/* Header */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-b border-neutral-800 bg-neutral-950/80">
                <div>
                  <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider">
                    {activeImage.categoryLabel} • Coimbra
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{activeImage.title}</h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Image Frame */}
              <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[420px]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[65vh] w-auto max-w-full object-contain"
                />

                {/* Left/Right Navigation */}
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-white hover:text-black text-white border border-neutral-700 transition-all cursor-pointer"
                  title="Foto anterior"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-white hover:text-black text-white border border-neutral-700 transition-all cursor-pointer"
                  title="Próxima foto"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Description & Action Footer */}
              <div className="p-4 sm:p-6 bg-neutral-950 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-neutral-300 text-center sm:text-left flex-1">
                  {activeImage.description}
                </p>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  {/* WhatsApp button - preserved green */}
                  <a
                    href={`https://wa.me/351924807017?text=${encodeURIComponent(`Olá, vi a fotografia "${activeImage.title}" no vosso site e gostaria de saber se realizam um trabalho semelhante no meu espaço em Coimbra.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Perguntar no WhatsApp</span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
