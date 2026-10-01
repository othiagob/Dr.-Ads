import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function FloatingWhatsApp({ doctor }) {
  const [isOpenTooltip, setIsOpenTooltip] = useState(true);

  const whatsappUrl = buildWhatsAppLink({
    phone: doctor.whatsapp,
    doctorName: doctor.doctorName,
    source: 'floating_whatsapp_btn'
  });

  const handleClick = () => {
    trackConversion('whatsapp_lead_click', {
      doctor_name: doctor.doctorName,
      location: 'floating_button',
      specialty: doctor.specialtyName
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Dynamic Speech Bubble */}
      {isOpenTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-2xl border border-slate-200/90 text-xs max-w-xs animate-fade-in relative flex items-start gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 mt-1 animate-pulse" />
          <div className="space-y-0.5">
            <p className="font-bold text-slate-900 leading-tight">
              Recepção {doctor.doctorName}
            </p>
            <p className="text-slate-600 text-[11px] leading-snug">
              Olá! Podemos te ajudar com horários ou dúvidas sobre reembolso?
            </p>
          </div>
          <button
            onClick={() => setIsOpenTooltip(false)}
            className="text-slate-400 hover:text-slate-700 ml-1"
            title="Fechar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="btn-whatsapp-conversion w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white flex items-center justify-center shadow-xl hover:shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 relative group animate-pulse-subtle"
        aria-label="Abrir conversa no WhatsApp"
      >
        <MessageSquare className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        
        {/* Active Ping */}
        <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-300 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
