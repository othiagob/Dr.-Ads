import React, { useState, useEffect, useRef } from 'react';
import { X, Calendar, Clock, CheckCircle2, MessageSquare, ShieldCheck, User, Phone } from 'lucide-react';
import { buildWhatsAppLink, trackConversion } from '../../utils/tracking';

export function DoctorBookingModal({ doctor, isOpen, onClose }) {
  const dialogRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: doctor.services[0]?.title || '',
    modality: 'presencial',
    preferredTime: 'manha',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
      setIsSubmitted(false);
    }
  }, [isOpen]);

  const handleLightDismiss = (e) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    trackConversion('form_lead_submit', {
      doctor_name: doctor.doctorName,
      lead_name: formData.name,
      modality: formData.modality,
      treatment: formData.treatment,
      preferred_time: formData.preferredTime
    });

    setIsSubmitted(true);

    // Constrói mensagem estruturada para o WhatsApp
    const message = `Olá! Preenchi o formulário de agendamento no site:\n\n` +
      `👤 *Nome:* ${formData.name}\n` +
      `📞 *Telefone:* ${formData.phone}\n` +
      `🩺 *Interesse:* ${formData.treatment}\n` +
      `📍 *Modalidade:* ${formData.modality === 'presencial' ? 'Presencial (Consultório)' : 'Telemedicina (Online)'}\n` +
      `⏰ *Período preferido:* ${formData.preferredTime.toUpperCase()}\n` +
      (formData.notes ? `📝 *Observação:* ${formData.notes}\n` : '');

    const whatsappUrl = buildWhatsAppLink({
      phone: doctor.whatsapp,
      defaultMessage: message,
      doctorName: doctor.doctorName,
      source: 'booking_modal_form'
    });

    // Abre o WhatsApp após breve feedback
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      onClose();
    }, 1200);
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleLightDismiss}
      onClose={onClose}
      className="p-0 rounded-3xl bg-white text-slate-900 shadow-2xl backdrop:bg-slate-900/60 backdrop:backdrop-blur-sm max-w-lg w-full m-auto border border-slate-200"
    >
      <div className="p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-teal-700 uppercase tracking-wider">
              Solicitação de Agendamento
            </span>
            <h3 className="text-xl font-extrabold text-slate-900">
              {doctor.doctorName}
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              {doctor.crm} · {doctor.rqe}
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10 animate-bounce" />
            </div>
            <h4 className="text-xl font-bold text-slate-900">Solicitação Enviada!</h4>
            <p className="text-sm text-slate-600 max-w-xs mx-auto">
              Estamos redirecionando você para o WhatsApp da recepção para confirmar seu horário...
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            
            {/* Nome Completo */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Seu Nome Completo *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  required
                  placeholder="Ex: Mariana Albuquerque"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Telefone / WhatsApp */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                WhatsApp com DDD *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="tel"
                  required
                  placeholder="(11) 98765-4321"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-sm outline-none transition-all"
                />
              </div>
            </div>

            {/* Tratamento / Queixa Principal */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Tratamento ou Queixa de Interesse
              </label>
              <select
                value={formData.treatment}
                onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-sm outline-none transition-all bg-white"
              >
                {doctor.services.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.title}
                  </option>
                ))}
                <option value="Primeira Consulta / Avaliação Geral">Primeira Consulta / Avaliação Geral</option>
              </select>
            </div>

            {/* Modalidade */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Modalidade de Atendimento
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modality: 'presencial' })}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    formData.modality === 'presencial'
                      ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Presencial ({doctor.clinicNeighborhood.split('/')[0].trim()})
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, modality: 'online' })}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                    formData.modality === 'online'
                      ? 'bg-teal-50 border-teal-600 text-teal-900 shadow-xs'
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  Telemedicina (Online)
                </button>
              </div>
            </div>

            {/* Período Preferido */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Período de Preferência
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'manha', label: 'Manhã' },
                  { id: 'tarde', label: 'Tarde' },
                  { id: 'noite', label: 'Final do Dia' }
                ].map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTime: p.id })}
                    className={`py-2 rounded-xl text-xs font-semibold border transition-all ${
                      formData.preferredTime === p.id
                        ? 'bg-teal-700 border-teal-700 text-white'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {p.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:scale-95 text-white font-extrabold text-sm shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Confirmar e Conversar no WhatsApp</span>
              </button>
            </div>

            {/* CFM / LGPD note */}
            <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500 justify-center">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Seus dados são protegidos por sigilo médico e pela LGPD.</span>
            </div>

          </form>
        )}

      </div>
    </dialog>
  );
}
