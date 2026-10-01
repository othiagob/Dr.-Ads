import React from 'react';
import { MessageSquare, Phone, ShieldCheck, MapPin } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorHeader({ doctor, onOpenBooking }) {
  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'header_cta'
  });

  const handleWhatsAppClick = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'header_cta',
      specialty: doctor.specialtyName
    });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all shadow-xs">
      {/* Top Banner CFM Notice */}
      <div className="bg-slate-900 text-slate-300 text-[11px] py-1.5 px-4 text-center font-medium flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 text-teal-400">
          <ShieldCheck className="w-3.5 h-3.5" />
          Atendimento Médico Regulamentado
        </span>
        <span className="text-slate-500">|</span>
        <span>{doctor.crm} · {doctor.rqe}</span>
        <span className="hidden sm:inline text-slate-500">|</span>
        <span className="hidden sm:inline">Consultas Presenciais & Telemedicina</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Doctor Identity */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full bg-teal-600/10 border border-teal-600/20 text-teal-800 font-bold flex items-center justify-center text-lg shadow-inner">
            {doctor.doctorName.replace(/Dr\.|Dra\./, '').trim().charAt(0)}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <a href="#inicio" className="text-lg font-bold text-slate-900 tracking-tight hover:text-teal-700 transition-colors">
                {doctor.doctorName}
              </a>
              <span className="hidden md:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-teal-50 text-teal-700 border border-teal-200 uppercase tracking-wider">
                {doctor.specialtyId}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-slate-400" />
              {doctor.clinicNeighborhood}
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <a href="#tratamentos" className="hover:text-teal-600 transition-colors">Tratamentos</a>
          <a href="#reembolso" className="hover:text-teal-600 transition-colors flex items-center gap-1">
            <span>Reembolso do Plano</span>
            <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-emerald-100 text-emerald-800 font-bold">100%</span>
          </a>
          <a href="#sobre" className="hover:text-teal-600 transition-colors">Formação & CRM</a>
          <a href="#consultorio" className="hover:text-teal-600 transition-colors">Localização</a>
          <a href="#faq" className="hover:text-teal-600 transition-colors">Dúvidas Frequentes</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenBooking}
            className="hidden sm:inline-flex items-center px-4 py-2 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-200"
          >
            Pré-Agendar
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="btn-whatsapp-conversion inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
