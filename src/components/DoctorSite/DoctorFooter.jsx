import React from 'react';
import { AlertCircle, ShieldCheck } from 'lucide-react';

export function DoctorFooter({ doctor }) {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Disclaimer Box - Mandatory CFM 2.336/2023 */}
        <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-slate-200">
              Aviso Ético Legal (Resolução CFM nº 2.336/2023 & Código de Ética Médica):
            </p>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              As informações contidas neste site têm objetivo estritamente informativo e educativo, não devendo ser utilizadas para automedicação, autodiagnóstico ou para substituir a avaliação clínica presencial com médico especialista. Em situações de urgência ou emergência médica, dirija-se imediatamente ao pronto-socorro mais próximo ou ligue para o <strong>SAMU 192</strong>.
            </p>
          </div>
        </div>

        {/* Doctor Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4">
          <div>
            <h4 className="text-sm font-bold text-white mb-2">{doctor.doctorName}</h4>
            <p className="text-slate-300 font-medium">{doctor.specialtyName}</p>
            <p className="mt-1 text-slate-400">{doctor.crm} · {doctor.rqe}</p>
            <p className="mt-1 text-[11px] text-teal-400">Responsável Técnico: {doctor.doctorName}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2">Atendimento Presencial</h4>
            <p className="text-slate-300">{doctor.clinicAddress}</p>
            <p className="mt-1 text-slate-400">{doctor.clinicNeighborhood}</p>
            <p className="mt-1 text-slate-400">WhatsApp Oficial: {doctor.whatsappDisplay}</p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-2">Privacidade & Conformidade</h4>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Tratamento de dados em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018). Prontuário médico sob sigilo profissional inviolável.
            </p>
            <div className="mt-3 flex gap-4 text-[11px]">
              <a href="#inicio" className="hover:text-teal-400 transition-colors">Política de Privacidade</a>
              <a href="#inicio" className="hover:text-teal-400 transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Tag */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {doctor.doctorName}. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Powered by</span>
            <span className="font-extrabold text-teal-400">Dr. Ads</span>
            <span>— Plataforma de Performance Médica</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
