import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/site';

interface LegalModalProps {
  type: 'privacidade' | 'termos';
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-in fade-in">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col max-h-[85vh] text-slate-200">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-cyan-400" />
            <h3 className="text-xl font-bold text-white">
              {type === 'privacidade' ? 'Política de Privacidade e Proteção de Dados' : 'Termos e Condições Gerais'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto py-5 space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed pr-2">
          {type === 'privacidade' ? (
            <>
              <p>
                A <strong>{siteConfig.companyName}</strong>, com atuação em Coimbra e concelhos vizinhos, está empenhada em proteger a privacidade dos seus utilizadores e clientes, em estrito cumprimento com o Regulamento Geral sobre a Proteção de Dados (RGPD - Regulamento UE 2016/679) e demais legislação portuguesa aplicável.
              </p>

              <h4 className="font-bold text-white text-sm pt-2">1. Recolha e Finalidade dos Dados</h4>
              <p>
                Os dados fornecidos nos nossos formulários de simulação e contacto (tais como nome, número de telemóvel, endereço de email, localidade e eventuais fotografias do espaço) destinam-se exclusivamente à elaboração de propostas de orçamento, agendamento de visitas técnicas e prestação de assistência solicitada.
              </p>

              <h4 className="font-bold text-white text-sm pt-2">2. Partilha com Terceiros</h4>
              <p>
                Os seus dados pessoais nunca são vendidos, alugados ou cedidos a terceiros para efeitos de marketing ou publicidade. Apenas a nossa equipa técnica autorizada tem acesso aos mesmos para executar o serviço acordado.
              </p>

              <h4 className="font-bold text-white text-sm pt-2">3. Direitos do Titular</h4>
              <p>
                Nos termos da lei, pode a qualquer momento solicitar o acesso, retificação ou eliminação definitiva dos seus dados enviando um email para <strong>{siteConfig.email}</strong>.
              </p>

              <h4 className="font-bold text-white text-sm pt-2">4. Cookies e Tecnologias de Navegação</h4>
              <p>
                Este sítio Web utiliza apenas cookies estritamente técnicos e de sessão necessários ao seu correto funcionamento, não recolhendo dados de rastreamento intrusivo sem o seu consentimento.
              </p>
            </>
          ) : (
            <>
              <p>
                Bem-vindo ao sítio Web oficial da <strong>{siteConfig.companyName}</strong>. Ao utilizar este sítio Web ou solicitar os nossos serviços em Coimbra, concorda com as seguintes condições:
              </p>

              <h4 className="font-bold text-white text-sm pt-2">1. Orçamentos e Estimativas Online</h4>
              <p>
                Os valores apresentados no Simulador de Orçamento deste sítio Web constituem estimativas orientativas. O orçamento final vinculativo é sempre validado pela nossa equipa após verificação técnica das características específicas do espaço e infraestrutura elétrica existente.
              </p>

              <h4 className="font-bold text-white text-sm pt-2">2. Garantia dos Equipamentos e Instalações</h4>
              <p>
                Todos os aparelhos de climatização novos fornecidos beneficiam da garantia legal de 3 anos do fabricante (nos termos do Decreto-Lei n.º 84/2021 em Portugal). O serviço de instalação executado pela nossa equipa beneficia de garantia técnica de boa execução.
              </p>

              <h4 className="font-bold text-white text-sm pt-2">3. Livro de Reclamações</h4>
              <p>
                Nos termos da legislação portuguesa, disponibilizamos aos consumidores o acesso ao Livro de Reclamações Eletrónico em www.livroreclamacoes.pt.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs sm:text-sm cursor-pointer"
          >
            Entendido
          </button>
        </div>

      </div>
    </div>
  );
};
