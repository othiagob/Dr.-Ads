import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorServices({ doctor }) {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const filteredServices = selectedCategory === 'todos'
    ? doctor.services
    : doctor.services.filter(s => s.id === selectedCategory);

  const handleServiceInquiry = (service) => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'service_card',
      service_title: service.title,
      specialty: doctor.specialtyName
    });

    const url = buildWhatsAppLink({
      phone: doctor.whatsapp,
      doctorName: doctor.doctorName,
      serviceTitle: service.title,
      source: `service_${service.id}`
    });

    window.open(url, '_blank');
  };

  return (
    <section id="tratamentos" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Áreas de Atuação & Tratamentos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Diagnóstico e cuidado médico especializado para a sua queixa
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Cada paciente recebe uma abordagem individualizada, fundamentada nas diretrizes clínicas mais recentes e com tempo adequado para esclarecimento.
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('todos')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              selectedCategory === 'todos'
                ? 'bg-teal-700 text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            Todos os Atendimentos ({doctor.services.length})
          </button>
          {doctor.services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setSelectedCategory(svc.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === svc.id
                  ? 'bg-teal-700 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {svc.title.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-soft hover:shadow-hover hover:border-teal-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Accent Tag */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-md border border-teal-100">
                    Tratamento Clínico
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    CFM 2.336/2023
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {service.shortDesc}
                </p>

                {/* Symptoms / Indications checklist */}
                {service.symptoms && service.symptoms.length > 0 && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      Sintomas & Sinais Comuns:
                    </p>
                    <ul className="space-y-2">
                      {service.symptoms.map((symptom, sIdx) => (
                        <li key={sIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span>{symptom}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={() => handleServiceInquiry(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-800 font-bold text-xs transition-all shadow-xs group-hover:bg-emerald-600 group-hover:text-white"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Consultar sobre este tratamento</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-auto" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner Google Ads Advantage Note */}
        <div className="mt-12 bg-teal-900 text-teal-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">
              Precisa de orientação para uma queixa não listada?
            </h4>
            <p className="text-xs sm:text-sm text-teal-200">
              Nossa equipe de recepção médica pode esclarecer se o {doctor.doctorName} atende a sua condição específica.
            </p>
          </div>
          <button
            onClick={() => handleServiceInquiry({ title: 'Dúvida Geral sobre Sintomas' })}
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md active:scale-95"
          >
            <MessageSquare className="w-4 h-4 fill-slate-950" />
            <span>Falar com a Recepção Médica</span>
          </button>
        </div>

      </div>
    </section>
  );
}
