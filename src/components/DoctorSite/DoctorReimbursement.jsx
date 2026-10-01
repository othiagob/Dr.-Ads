import React from 'react';
import { FileCheck2, HelpCircle, MessageSquare, Receipt, ShieldAlert, Sparkles, CheckCircle } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorReimbursement({ doctor }) {
  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'reimbursement_section'
  });

  const handleReimbursementInquiry = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'reimbursement_section',
      specialty: doctor.specialtyName
    });
  };

  const insurancePlans = [
    'Bradesco Saúde',
    'SulAmérica Saúde',
    'Amil / Amil One',
    'Omint',
    'Care Plus',
    'Porto Seguro Saúde',
    'Allianz Saúde',
    'Central Nacional Unimed',
    'Seguros Unimed',
    'Notredame Intermédica'
  ];

  return (
    <section id="reembolso" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Receipt className="w-3.5 h-3.5 text-emerald-600" />
            <span>Direito do Beneficiário ANS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Como utilizar o Reembolso do seu Plano de Saúde
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Você tem total liberdade para escolher o médico de sua confiança. Atendemos de forma particular e fornecemos toda a documentação necessária para que você receba o reembolso de até 100% do valor da consulta.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14 relative">
          
          {doctor.reimbursementSteps.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-600 text-white font-extrabold text-lg flex items-center justify-center shadow-md mb-5">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-teal-700">
                <CheckCircle className="w-4 h-4 text-emerald-600" />
                <span>Documentação 100% Aceita</span>
              </div>
            </div>
          ))}

        </div>

        {/* Plans Supported Badge List */}
        <div className="bg-slate-50/80 rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider">
              Principais convênios com sistema de reembolso ativo:
            </h4>
            <p className="text-xs text-slate-500 mt-1">
              Consulte seu plano para verificar o valor contratual de reembolso de consulta.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {insurancePlans.map((plan, i) => (
              <span
                key={i}
                className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs"
              >
                {plan}
              </span>
            ))}
          </div>

          {/* Assistant Note */}
          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm font-bold text-slate-800">
                  Dúvidas sobre como solicitar no aplicativo do seu convênio?
                </p>
                <p className="text-[11px] text-slate-500">
                  Nossa recepção orienta o passo a passo exato do seu plano para facilitar sua solicitação.
                </p>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleReimbursementInquiry}
              className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all active:scale-95"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Tirar Dúvidas sobre Reembolso</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
