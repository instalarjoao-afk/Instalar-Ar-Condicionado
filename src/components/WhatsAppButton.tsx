import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { MessageSquare, X, Send, PhoneCall } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const starters = [
    { title: 'Pedir Orçamento de Instalação', msg: 'Olá! Gostaria de pedir um orçamento para instalação de ar condicionado em Coimbra.' },
    { title: 'Limpeza e Higienização', msg: 'Olá! Gostaria de agendar uma limpeza e higienização para o meu ar condicionado.' },
    { title: 'Assistência Técnica Urgente', msg: 'Olá! O meu equipamento de ar condicionado não está a funcionar bem e preciso de assistência técnica em Coimbra.' }
  ];

  return (
    <div className="fixed bottom-5 right-5 z-40">
      
      {/* Expanded Quick Chat Window */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-96 rounded-3xl bg-slate-900 border border-slate-700 shadow-2xl p-5 text-slate-100 animate-in slide-in-from-bottom-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white">{siteConfig.companyName}</h4>
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Atendimento em Coimbra
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-slate-300 py-3 leading-relaxed">
            Olá! Como podemos ajudar hoje? Escolha um assunto rápido ou envie uma mensagem direta:
          </p>

          <div className="space-y-2 mb-4">
            {starters.map((item, idx) => (
              <a
                key={idx}
                href={`https://wa.me/351912603408?text=${encodeURIComponent(item.msg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2.5 rounded-xl bg-slate-950 hover:bg-emerald-950/40 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-200 transition-colors"
              >
                <div className="font-semibold text-emerald-300 flex items-center justify-between">
                  <span>{item.title}</span>
                  <Send className="w-3 h-3 text-slate-500" />
                </div>
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex gap-2">
            <a
              href={siteConfig.whatsapp1}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center flex items-center justify-center gap-1.5 shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{siteConfig.phone1}</span>
            </a>
            <a
              href={siteConfig.whatsapp2}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-2 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs text-center flex items-center justify-center gap-1.5 border border-slate-700"
            >
              <PhoneCall className="w-3.5 h-3.5 text-cyan-400" />
              <span>{siteConfig.phone2}</span>
            </a>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2.5 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-2xl shadow-emerald-950/80 border border-emerald-400/40 transition-all hover:scale-105 cursor-pointer"
        aria-label="Abrir WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 border-2 border-emerald-600 animate-pulse" />
        </div>
        <span className="hidden sm:inline font-bold text-sm">
          Falar no WhatsApp
        </span>
      </button>

    </div>
  );
};
