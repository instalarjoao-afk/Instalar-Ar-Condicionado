import React from 'react';

export const SiteBackground: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
    >
      {/* Real user-provided image (Imagem 8 - Nipon Outdoor AC units on rooftop) */}
      <img
        src="/images/nipon-outdoor-bg.jpg"
        alt="Instalação de unidades exteriores de ar condicionado Nipon"
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover object-center opacity-85 scale-100"
      />

      {/* Subtle dark overlay to guarantee 100% text readability while keeping the photo prominent and clear */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Soft gradient vignette towards the edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
    </div>
  );
};
