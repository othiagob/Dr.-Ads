import React from 'react';
import { Building2, Car, Globe, MapPin, Navigation, ShieldCheck, Video, Clock } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorLocation({ doctor }) {
  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'location_section'
  });

  const handleLocationClick = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'location_section',
      specialty: doctor.specialtyName
    });
  };

  return (
    <section id="consultorio" className="py-16 lg:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-teal-600" />
            <span>Consultório & Atendimento</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Estrutura acolhedora presencial ou a conveniência do atendimento online
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Você escolhe o formato mais confortável para o seu dia a dia, com a mesma dedicação médica e confidencialidade.
          </p>
        </div>

        {/* Dual Cards: Presencial & Telemedicina */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Presencial */}
          <div className="bg-slate-50 rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-600 text-white flex items-center justify-center shadow-md">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold">
                  Atendimento Presencial
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Consultório em {doctor.clinicNeighborhood}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {doctor.clinicAddress}
                </p>
              </div>

              {/* Amenities */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Car className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Estacionamento com manobrista no próprio edifício comercial</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Building2 className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Acessibilidade total, elevadores modernos e recepção privativa</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-700">
                  <Clock className="w-4 h-4 text-teal-600 shrink-0" />
                  <span>Horários com intervalo programado para evitar salas de espera cheias</span>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80 flex flex-col sm:flex-row gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLocationClick}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-sm transition-all"
              >
                <span>Agendar Presencial</span>
              </a>
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(doctor.clinicAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs border border-slate-300 transition-all"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Ver no Google Maps</span>
              </a>
            </div>

          </div>

          {/* Card 2: Telemedicina */}
          <div className="bg-gradient-to-br from-teal-900 to-slate-900 text-white rounded-3xl p-7 sm:p-9 border border-teal-800/50 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-teal-500 text-slate-950 flex items-center justify-center shadow-md">
                  <Video className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
                  Todo o Brasil
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Telemedicina & Consultas Online
                </h3>
                <p className="text-sm text-teal-100 leading-relaxed font-normal">
                  {doctor.telemedicineDetails}
                </p>
              </div>

              {/* Online Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-teal-100">
                  <Globe className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Consulte do conforto de sua casa sem necessidade de deslocamento</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-teal-100">
                  <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Plataforma de vídeo segura em conformidade estrita com a LGPD e o CFM</span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-teal-100">
                  <Building2 className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Prescrições digitais assinadas por certificado ICP-Brasil aceitas em todo o país</span>
                </div>
              </div>

            </div>

            <div className="mt-8 pt-6 border-t border-teal-800/80">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLocationClick}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-xs sm:text-sm shadow-md transition-all active:scale-95"
              >
                <span>Agendar Consulta Online</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
