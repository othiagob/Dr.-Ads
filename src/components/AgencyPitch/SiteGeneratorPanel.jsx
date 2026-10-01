import React, { useState } from 'react';
import { Download, Copy, Check, Sliders, FileJson, Sparkles, ShieldCheck } from 'lucide-react';
import gtmMasterData from '../../data/gtm-master-dr-ads.json';

export function SiteGeneratorPanel({ activeDoctor, onUpdateDoctor, onResetDefault }) {
  const [copied, setCopied] = useState(false);
  const [downloadedGtm, setDownloadedGtm] = useState(false);

  const handleCopyJson = () => {
    const jsonStr = JSON.stringify(activeDoctor, null, 2);
    navigator.clipboard.writeText(jsonStr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadGTM = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(gtmMasterData, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `gtm-master-dr-ads-${activeDoctor.id}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setDownloadedGtm(true);
    setTimeout(() => setDownloadedGtm(false), 2500);
  };

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider mb-1">
            <Sliders className="w-3.5 h-3.5" />
            <span>Gerador Rápido de Configuração (Turnkey)</span>
          </div>
          <h3 className="text-xl font-bold">Personalizar Dados do Médico em Tempo Real</h3>
          <p className="text-xs text-slate-400">
            Altere os campos abaixo para ver o site atualizar instantaneamente ou exportar o arquivo pronto para deploy.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleCopyJson}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copiado!' : 'Copiar Config JSON'}</span>
          </button>

          <button
            onClick={handleDownloadGTM}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-bold shadow-md transition-colors"
          >
            {downloadedGtm ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
            <span>{downloadedGtm ? 'Baixado!' : 'Baixar GTM Mestre'}</span>
          </button>
        </div>
      </div>

      {/* Inputs Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-6">
        
        {/* Nome do Médico */}
        <div>
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Nome do Médico
          </label>
          <input
            type="text"
            value={activeDoctor.doctorName}
            onChange={(e) => onUpdateDoctor({ doctorName: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

        {/* CRM */}
        <div>
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            CRM / UF
          </label>
          <input
            type="text"
            value={activeDoctor.crm}
            onChange={(e) => onUpdateDoctor({ crm: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

        {/* RQE */}
        <div>
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            RQE (Registro de Especialista)
          </label>
          <input
            type="text"
            value={activeDoctor.rqe}
            onChange={(e) => onUpdateDoctor({ rqe: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

        {/* WhatsApp */}
        <div>
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            WhatsApp (55 + DDD + Número)
          </label>
          <input
            type="text"
            value={activeDoctor.whatsapp}
            onChange={(e) => onUpdateDoctor({ whatsapp: e.target.value, whatsappDisplay: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

        {/* Endereço */}
        <div className="md:col-span-2">
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Endereço do Consultório
          </label>
          <input
            type="text"
            value={activeDoctor.clinicAddress}
            onChange={(e) => onUpdateDoctor({ clinicAddress: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

        {/* Bairro / Região de Atendimento */}
        <div>
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Bairro de Destaque
          </label>
          <input
            type="text"
            value={activeDoctor.clinicNeighborhood}
            onChange={(e) => onUpdateDoctor({ clinicNeighborhood: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

        {/* Tempo da consulta */}
        <div>
          <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            Duração da Consulta
          </label>
          <input
            type="text"
            value={activeDoctor.consultationDuration}
            onChange={(e) => onUpdateDoctor({ consultationDuration: e.target.value })}
            className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 focus:border-teal-500 text-xs text-white outline-none"
          />
        </div>

      </div>

      {/* Reset button */}
      <div className="mt-4 pt-4 border-t border-slate-800 flex justify-end">
        <button
          onClick={onResetDefault}
          className="text-xs text-slate-400 hover:text-white transition-colors"
        >
          Restaurar dados originais deste template
        </button>
      </div>

    </div>
  );
}
