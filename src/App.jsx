import React, { useState, useEffect } from 'react';
import { DOCTOR_TEMPLATES } from './data/doctorTemplates';
import { DoctorSiteView } from './components/DoctorSite/DoctorSiteView';
import { AgencyPitchView } from './components/AgencyPitch/AgencyPitchView';
import { SiteGeneratorPanel } from './components/AgencyPitch/SiteGeneratorPanel';
import { initUTMTracking } from './utils/tracking';
import {
  Sparkles,
  Layout,
  Sliders,
  Eye,
  CheckCircle,
  HelpCircle,
  ExternalLink,
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [viewMode, setViewMode] = useState('pitch'); // 'pitch' | 'site'
  const [activeTemplateId, setActiveTemplateId] = useState('psiquiatria');
  const [doctorData, setDoctorData] = useState(DOCTOR_TEMPLATES.psiquiatria);
  const [showGenerator, setShowGenerator] = useState(false);

  // Inicializa a captura e persistência de parâmetros UTM e GCLID
  useEffect(() => {
    initUTMTracking();
  }, []);

  // Ao trocar de template, atualiza os dados do médico
  const handleSelectTemplate = (templateId) => {
    setActiveTemplateId(templateId);
    setDoctorData(DOCTOR_TEMPLATES[templateId]);
  };

  const handleOpenDemo = (templateId) => {
    handleSelectTemplate(templateId);
    setViewMode('site');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateDoctor = (partialUpdates) => {
    setDoctorData((prev) => ({
      ...prev,
      ...partialUpdates
    }));
  };

  const handleResetDefault = () => {
    setDoctorData(DOCTOR_TEMPLATES[activeTemplateId]);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-sans">
      
      {/* Top Operating Control Bar (Turnkey Bar for Partner / Developer) */}
      <nav className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-slate-800 px-4 py-2.5 shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          {/* Logo & Platform Name */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-teal-500 text-slate-950 font-black flex items-center justify-center text-sm shadow-md">
              Dr.
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-white text-base tracking-tight">Dr. Ads</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-400 border border-teal-500/30">
                  Performance & CFM
                </span>
              </div>
            </div>
          </div>

          {/* Central Mode Switcher: Comercial vs Demo Site */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-bold">
            <button
              onClick={() => setViewMode('pitch')}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'pitch'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Apresentação Comercial</span>
            </button>

            <button
              onClick={() => setViewMode('site')}
              className={`px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'site'
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Site Médico (Demo ao Vivo)</span>
            </button>
          </div>

          {/* Specialty Selector & Customizer (when in site mode) */}
          <div className="flex items-center gap-2">
            {viewMode === 'site' && (
              <div className="flex items-center gap-1.5">
                <select
                  value={activeTemplateId}
                  onChange={(e) => handleSelectTemplate(e.target.value)}
                  className="bg-slate-900 border border-slate-700 text-white text-xs font-semibold rounded-lg px-2.5 py-1.5 outline-none focus:border-teal-500"
                >
                  <option value="psiquiatria">Psiquiatria & Saúde Mental</option>
                  <option value="dermatologia">Dermatologia & Tricologia</option>
                  <option value="ortopedia">Ortopedia & Joelho</option>
                  <option value="cirurgia_plastica">Cirurgia Plástica</option>
                </select>

                <button
                  onClick={() => setShowGenerator(!showGenerator)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                    showGenerator
                      ? 'bg-teal-500 text-slate-950 border-teal-400'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border-slate-700'
                  }`}
                  title="Personalizar dados do médico em tempo real"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Personalizar</span>
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Collapsible Site Customizer Panel */}
        {viewMode === 'site' && showGenerator && (
          <div className="max-w-7xl mx-auto pt-4 pb-2 animate-fade-in">
            <SiteGeneratorPanel
              activeDoctor={doctorData}
              onUpdateDoctor={handleUpdateDoctor}
              onResetDefault={handleResetDefault}
            />
          </div>
        )}
      </nav>

      {/* Main Content Area */}
      <main className="flex-1">
        {viewMode === 'pitch' ? (
          <AgencyPitchView
            onSelectTemplate={handleSelectTemplate}
            onOpenDemo={handleOpenDemo}
          />
        ) : (
          <DoctorSiteView doctor={doctorData} />
        )}
      </main>

    </div>
  );
}
