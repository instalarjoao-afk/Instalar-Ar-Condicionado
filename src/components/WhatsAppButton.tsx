import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const starters = [
    { title: 'Instalação de Ar Condicionado', msg: 'Olá! Gostaria de falar sobre instalação de ar condicionado no meu espaço em Coimbra.' },
    { title: 'Limpeza e Higienização', msg: 'Olá! Gostaria de agendar uma limpeza e higienização para o meu ar condicionado.' },
    { title: 'Assistência Técnica', msg: 'Olá! O meu equipamento de ar condicionado precisa de assistência técnica em Coimbra.' }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40">
      
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-neutral-900 border border-neutral-700 shadow-2xl p-5 text-neutral-100 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{siteConfig.companyName}</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Atendimento direto em Coimbra
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-300 py-3 leading-relaxed">
            Olá! Como podemos ajudar hoje? Escolha um assunto para iniciar conversa direta no WhatsApp (+351 {siteConfig.phone}):
          </p>

          <div className="space-y-2 mb-4">
            {starters.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/351924807017?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-xs text-neutral-200 transition-colors"
              >
                <div className="font-semibold text-white flex items-center justify-between">
                  <span>{item.title}</span>
                  <Send className="w-3 h-3 text-neutral-500" />
                </div>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-neutral-800">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-md shadow-emerald-950/40 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Abrir WhatsApp (+351 {siteConfig.phone})</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button - preserved in Green */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-black/80 border border-emerald-400/40 transition-all hover:scale-105 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-emerald-600 animate-pulse" />
        </div>
        <span className="hidden sm:inline font-bold text-sm">
          Falar no WhatsApp
        </span>
      </button>

    </div>
  );
};
