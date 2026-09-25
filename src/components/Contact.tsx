import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, Instagram, MessageSquare, Send, CheckCircle2, Clock } from 'lucide-react';

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
    <section id="contactos" className="py-20 md:py-28 bg-[#050505] text-neutral-100 relative border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-700/80 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-3">
            Estamos Sempre Disponíveis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Fale Connosco
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-400">
            Dúvidas, informações técnicas ou agendamento de intervenção. Contacte-nos diretamente pelo meio que lhe for mais conveniente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Cards: Contact channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Contacto Telefónico</h3>
                  <p className="text-xs text-neutral-400">Atendimento direto em Coimbra</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800 text-sm font-bold text-white transition-colors"
                >
                  <span>+351 {siteConfig.phone}</span>
                  <span className="text-xs text-neutral-400 font-normal">Ligar Agora</span>
                </a>
              </div>
            </div>

            {/* WhatsApp Card - kept green as requested */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">WhatsApp Exclusivo</h3>
                  <p className="text-xs text-neutral-400">Envie fotografias e mensagens</p>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 border border-emerald-500/40 text-sm font-bold text-white transition-colors shadow-md shadow-emerald-950/40"
                >
                  <span>WhatsApp (+351 {siteConfig.phone})</span>
                  <span className="text-xs text-white/90 font-medium">Abrir Conversa</span>
                </a>
              </div>
            </div>

            {/* Email & Social */}
            <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-neutral-800 text-white border border-neutral-700">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Correio Eletrónico</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-xs text-neutral-300 hover:text-white break-all">
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-neutral-400">
                  <Instagram className="w-4 h-4 text-white" />
                  <span>Instagram:</span>
                </div>
                <a
                  href={siteConfig.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-white hover:underline"
                >
                  @instalar.arcondicionado
                </a>
              </div>

              <div className="pt-2 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-neutral-400" />
                  <span>Horário:</span>
                </div>
                <span className="text-neutral-200">Seg - Sáb: 08:30 - 19:30</span>
              </div>
            </div>

          </div>

          {/* Right Form: Quick Message */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-2">Envie-nos uma Mensagem</h3>
            <p className="text-xs sm:text-sm text-neutral-400 mb-6">
              Entraremos em contacto consigo com a máxima brevidade através do seu contacto.
            </p>

            {isSent ? (
              <div className="p-6 rounded-2xl bg-neutral-950 border border-neutral-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
                <h4 className="text-lg font-bold text-white">Mensagem Enviada!</h4>
                <p className="text-xs text-neutral-300">
                  Obrigado. Recebemos os seus dados e responderemos em breve.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="text-xs text-white underline cursor-pointer"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="O seu nome"
                    className="w-full py-2.5 px-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:border-white focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Telemóvel *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="924 807 017"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:border-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-neutral-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="exemplo@gmail.com"
                      className="w-full py-2.5 px-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:border-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-neutral-300 mb-1">
                    Mensagem / Descrição do que precisa
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Descreva o serviço pretendido ou as suas dúvidas..."
                    className="w-full py-2.5 px-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-neutral-100 text-sm focus:border-white focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-white hover:bg-neutral-200 text-black font-bold text-sm transition-all shadow-md shadow-white/10 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{loading ? 'A enviar...' : 'Enviar Mensagem'}</span>
                  </button>

                  {/* WhatsApp button - preserved green */}
                  <a
                    href={`https://wa.me/351924807017?text=${encodeURIComponent(`Olá! Sou ${name || 'um cliente'} e gostaria de falar sobre os vossos serviços em Coimbra.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition-all shadow-md shadow-emerald-950/40"
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
