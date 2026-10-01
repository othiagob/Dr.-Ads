import React from 'react';
import { MessageSquare, Calendar, ShieldCheck, CheckCircle2, Star, Clock, FileText } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorHero({ doctor, onOpenBooking }) {
  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'hero_primary_button'
  });

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'hero_primary',
      specialty: doctor.specialtyName
    });
  };

  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-teal-50/50 via-white to-slate-50 pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200/60">
      {/* Background subtle mesh glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-emerald-100/30 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & High-Intent Conversion */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Specialty Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-100/70 border border-teal-200 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-teal-600 animate-pulse" />
              <span>{doctor.heroTag}</span>
              <span className="text-teal-400">•</span>
              <span className="font-semibold text-teal-800">{doctor.crm}</span>
            </div>

            {/* Main H1 - High-Intent Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-900 tracking-tight leading-[1.18]">
              {doctor.headline}
            </h1>

            {/* Subheadline with clear value proposition */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              {doctor.subheadline}
            </p>

            {/* Trust Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Atendimento humanizado de {doctor.consultationDuration}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Emite recibo para reembolso de convênios</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Receita digital ICP-Brasil com QR Code</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Especialista com RQE registrado no CRM</span>
              </div>
            </div>

            {/* High-Impact CTA Block */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="btn-whatsapp-conversion animate-pulse-subtle flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] text-white font-bold text-base shadow-xl hover:shadow-2xl hover:shadow-emerald-600/30 transition-all text-center"
              >
                <MessageSquare className="w-5 h-5 fill-white shrink-0" />
                <span>Agendar Consulta no WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm border border-slate-300 shadow-sm transition-all"
              >
                <Calendar className="w-4 h-4 text-slate-500" />
                <span>Verificar Horários</span>
              </button>
            </div>

            {/* Micro Trust Indicator under CTAs */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>Resposta média da recepção: <strong>em menos de 10 minutos</strong> no horário comercial</span>
            </div>

          </div>

          {/* Right Column: Hero Card with Professional Medical Photo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Card Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200/80 p-2 sm:p-3">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100">
                  <img
                    src={doctor.photoUrl}
                    alt={doctor.doctorName}
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                    loading="eager"
                    fetchPriority="high"
                  />
                  
                  {/* Subtle Gradient Overlay at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  
                  {/* Doctor badge inside image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xl font-extrabold tracking-tight">{doctor.doctorName}</p>
                    <p className="text-xs text-teal-200 font-semibold">{doctor.specialtyName}</p>
                    <div className="flex items-center gap-2 mt-1 text-[11px] text-slate-300">
                      <span>{doctor.crm}</span>
                      <span>•</span>
                      <span className="text-amber-300 font-bold">{doctor.rqe}</span>
                    </div>
                  </div>
                </div>

                {/* Floating Badge Top-Right: Rating & Social Proof */}
                <div className="absolute -top-3 -right-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-extrabold text-slate-900">4.9</span>
                      <span className="text-xs text-slate-400">/ 5.0</span>
                    </div>
                    <p className="text-[10px] font-semibold text-slate-500">Avaliações Verificadas</p>
                  </div>
                </div>

                {/* Floating Badge Bottom-Left: Consultation time */}
                <div className="absolute -bottom-4 -left-3 bg-white border border-slate-200 rounded-2xl p-3 shadow-xl flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center text-teal-700">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-slate-900">{doctor.consultationDuration}</p>
                    <p className="text-[10px] font-semibold text-slate-500">Sem pressa ou atrasos</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
