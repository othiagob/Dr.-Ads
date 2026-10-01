import React from 'react';
import { HelpCircle, ChevronDown, MessageSquare } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorFaq({ doctor }) {
  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'faq_section'
  });

  const handleFaqInquiry = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'faq_section',
      specialty: doctor.specialtyName
    });
  };

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-teal-600" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Respostas transparentes sobre o formato de atendimento, valores e procedimentos.
          </p>
        </div>

        {/* Semantic Native Details FAQ */}
        <div className="space-y-4">
          {doctor.faqs.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-slate-200 shadow-soft overflow-hidden transition-all duration-200 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer select-none font-bold text-slate-900 text-sm sm:text-base hover:text-teal-700 transition-colors">
                <span className="pr-4">{faq.q}</span>
                <div className="w-8 h-8 rounded-full bg-slate-100 group-open:bg-teal-100 flex items-center justify-center shrink-0 transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="w-4 h-4 text-slate-600 group-open:text-teal-700" />
                </div>
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

        {/* Support Callout */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-slate-900">Ainda tem alguma dúvida específica?</p>
            <p className="text-xs text-slate-500">Nossa equipe de recepção está disponível no WhatsApp para te ajudar.</p>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleFaqInquiry}
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs transition-all shadow-xs"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Falar com Atendimento</span>
          </a>
        </div>

      </div>
    </section>
  );
}
