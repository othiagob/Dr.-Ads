import React from 'react';
import { Award, CheckCircle2, GraduationCap, ShieldCheck, Stethoscope } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorAbout({ doctor }) {
  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'about_section'
  });

  const handleAboutClick = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'about_section',
      specialty: doctor.specialtyName
    });
  };

  return (
    <section id="sobre" className="py-16 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Doctor Photo & Official Credentials */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              
              <div className="relative rounded-3xl overflow-hidden shadow-xl bg-white border border-slate-200 p-3">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={doctor.photoUrl}
                    alt={`Foto oficial de ${doctor.doctorName}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>

                <div className="p-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-extrabold text-slate-900 text-lg leading-tight">{doctor.doctorName}</h3>
                      <p className="text-xs text-teal-700 font-semibold">{doctor.specialtyName}</p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-2.5 py-1 rounded bg-teal-50 border border-teal-200 text-teal-800 text-[10px] font-bold">
                        {doctor.experienceYears}
                      </span>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{doctor.crm}</span>
                    <span className="text-slate-300">•</span>
                    <span className="font-bold text-slate-800">{doctor.rqe}</span>
                  </div>
                </div>
              </div>

              {/* Verified CFM Badge */}
              <div className="mt-4 p-3 rounded-xl bg-white border border-emerald-200 flex items-center gap-3 shadow-xs">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <div className="text-[11px] text-slate-600 leading-tight">
                  Cadastro e qualificação de especialista conferidos e ativos junto ao Conselho Regional de Medicina (CRM).
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Bio & Academic Pedigree */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
              <span>Trajetória Acadêmica & Filosofia Clínica</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
              Medicina com rigor técnico, escuta genuína e respeito à individualidade do paciente
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Acreditamos que a relação médico-paciente é a base para o sucesso de qualquer plano terapêutico. As consultas são estruturadas para que você tenha tempo suficiente de relatar todo o seu histórico, tirar dúvidas sem pressa e participar ativamente das decisões sobre a sua saúde.
            </p>

            {/* Academic Pedigree List */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Formação e Títulos de Especialista:
              </h4>

              <div className="space-y-2.5">
                {doctor.academicPedigree.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reassurance Callout */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleAboutClick}
                className="btn-whatsapp-conversion w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md transition-all text-center"
              >
                <span>Agendar com {doctor.doctorName}</span>
              </a>

              <span className="text-xs text-slate-500 text-center sm:text-left">
                Recepção disponível para conferência de datas e dúvidas prévias.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
