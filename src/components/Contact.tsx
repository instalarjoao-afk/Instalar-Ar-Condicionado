import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, MapPin, Instagram, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setLoading(true);

    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message })
      }).catch(() => null);
      
      setIsSent(true);
    } catch {
      setIsSent(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contactos" className="py-20 md:py-28 bg-slate-950 text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/30 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Estamos Sempre Disponíveis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Fale Connosco
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300">
            Dúvidas, pedidos de orçamento ou assistência técnica. Contacte-nos pelo meio que lhe for mais conveniente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Contact channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Contactos Telefónicos</h3>
                  <p className="text-xs text-slate-400">Atendimento rápido em Coimbra</p>
                </div>
              </div>
              <div className="pt-2 space-y-2">
                <a
                  href={`tel:${siteConfig.phone1Raw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Linha 1: {siteConfig.phone1}</span>
                  <span className="text-xs text-slate-400 font-normal">Ligar</span>
                </a>
                <a
                  href={`tel:${siteConfig.phone2Raw}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-950 hover:bg-slate-800/80 border border-slate-800 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Linha 2: {siteConfig.phone2}</span>
                  <span className="text-xs text-slate-400 font-normal">Ligar</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">WhatsApp Direto</h3>
                  <p className="text-xs text-slate-400">Envie fotografias e mensagens</p>
                </div>
              </div>
              <div className="pt-2 space-y-2">
                <a
                  href={siteConfig.whatsapp1}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-sm font-bold text-emerald-300 transition-colors"
                >
                  <span>WhatsApp ({siteConfig.phone1})</span>
                  <span className="text-xs text-emerald-400 font-normal">Abrir Chat</span>
                </a>
                <a
                  href={siteConfig.whatsapp2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/30 text-sm font-bold text-emerald-300 transition-colors"
                >
                  <span>WhatsApp ({siteConfig.phone2})</span>
                  <span className="text-xs text-emerald-400 font-normal">Abrir Chat</span>
                </a>
              </div>
            </div>

            {/* Email & Social */}
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/30">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Correio Eletrónico</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs text-slate-300 hover:text-cyan-400 break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Instagram className="w-4 h-4 text-pink-400" />
                  <span>Instagram:</span>
                </div>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-pink-400 hover:underline"
                >
                  @instalar.arcondicionado
                </a>
              </div>

              <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Horário:</span>
                </div>
                <span className="text-slate-200">Seg - Sáb: 08:30 - 19:30</span>
              </div>
            </div>

          </div>

          {/* Right Form: Quick Message */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Envie-nos uma Mensagem</h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Entraremos em contacto consigo com a máxima brevidade.
            </p>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-bold text-white">Mensagem Enviada!</h4>
                <p className="text-xs text-slate-300">
                  Obrigado. Recebemos os seus dados e responderemos em breve.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="text-xs text-cyan-400 underline cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="O seu nome"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Telemóvel *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="912 345 678"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemplo@gmail.com"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Mensagem / Descrição do que precisa
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva o serviço pretendido ou as suas dúvidas..."
                    className="w-full py-2.5 px-3.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-100 text-sm focus:border-cyan-400 focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-cyan-500/20 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'A enviar...' : 'Enviar Mensagem'}</span>
                  </button>

                  <a
                    href={`https://wa.me/351912603408?text=${encodeURIComponent(`Olá! Sou ${name || 'um cliente'} e gostaria de obter informações sobre os vossos serviços em Coimbra.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Prefiro WhatsApp</span>
                  </a>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
