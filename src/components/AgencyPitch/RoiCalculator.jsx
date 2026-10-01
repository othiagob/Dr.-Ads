import React, { useState } from 'react';
import { Calculator, TrendingUp, DollarSign, Users, ArrowRight } from 'lucide-react';

export function RoiCalculator() {
  const [ticketPrice, setTicketPrice] = useState(600);
  const [targetConsultations, setTargetConsultations] = useState(15);
  const [ltvMultiplier, setLtvMultiplier] = useState(2.2); // média de retornos/sessões no ano

  // Cálculos de projeção
  const monthlyDirectRevenue = ticketPrice * targetConsultations;
  const annualPatientValue = monthlyDirectRevenue * ltvMultiplier * 12;
  const estimatedAdSpend = Math.round(targetConsultations * 110); // Custo de aquisição médio por agendamento médico no Google Ads (~R$ 110)
  const netMonthlyProfit = monthlyDirectRevenue - estimatedAdSpend;
  const roiPercentage = Math.round((netMonthlyProfit / (estimatedAdSpend || 1)) * 100);

  return (
    <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30 uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Simulador Comercial de Retorno</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Quanto 15 a 20 novos pacientes particulares agregam ao seu consultório?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400">
            Ajuste os valores para visualizar a projeção de faturamento e o custo estimado de aquisição no Google Ads.
          </p>
        </div>

        {/* Inputs & Results Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Sliders Side */}
          <div className="lg:col-span-6 space-y-6 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
            
            {/* Slider 1: Ticket da Consulta */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Valor da sua Consulta Particular
                </label>
                <span className="text-lg font-extrabold text-teal-400">
                  R$ {ticketPrice.toLocaleString('pt-BR')}
                </span>
              </div>
              <input
                type="range"
                min="300"
                max="2500"
                step="50"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(Number(e.target.value))}
                className="w-full accent-teal-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>R$ 300</span>
                <span>R$ 1.200</span>
                <span>R$ 2.500</span>
              </div>
            </div>

            {/* Slider 2: Novas Consultas por Mês */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Novos Pacientes Desejados / Mês
                </label>
                <span className="text-lg font-extrabold text-emerald-400">
                  {targetConsultations} pacientes
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="50"
                step="1"
                value={targetConsultations}
                onChange={(e) => setTargetConsultations(Number(e.target.value))}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>5 / mês</span>
                <span>20 / mês</span>
                <span>50 / mês</span>
              </div>
            </div>

            {/* LTV Multiplier */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Consultas / Retornos Médios por Paciente ao Ano
                </label>
                <span className="text-sm font-bold text-teal-300">
                  {ltvMultiplier}x
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="6.0"
                step="0.2"
                value={ltvMultiplier}
                onChange={(e) => setLtvMultiplier(Number(e.target.value))}
                className="w-full accent-teal-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>1x (Pontual)</span>
                <span>2.5x (Acompanhamento)</span>
                <span>6x (Terapia/Crônico)</span>
              </div>
            </div>

          </div>

          {/* Results Side */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="bg-gradient-to-br from-teal-950 to-slate-900 p-6 rounded-2xl border border-teal-500/40 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-teal-800/60">
                <span className="text-xs font-semibold text-teal-200">
                  Novo Faturamento Mensal (Primeiras Consultas):
                </span>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">
                  R$ {monthlyDirectRevenue.toLocaleString('pt-BR')}
                  <span className="text-xs text-slate-400 font-normal">/mês</span>
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Investimento Estimado no Google Ads:</span>
                <span className="font-bold text-slate-200">~R$ {estimatedAdSpend.toLocaleString('pt-BR')}/mês</span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-300">
                <span>Retorno sobre Investimento (ROI direto):</span>
                <span className="font-bold text-emerald-400 text-sm">+{roiPercentage}%</span>
              </div>

              <div className="pt-3 border-t border-teal-800/60 flex items-center justify-between">
                <div>
                  <p className="text-[11px] text-teal-300 font-semibold uppercase tracking-wider">
                    Valor Anual Gerado (com LTV & Retornos):
                  </p>
                  <p className="text-xl sm:text-2xl font-black text-white">
                    R$ {Math.round(annualPatientValue).toLocaleString('pt-BR')}
                    <span className="text-xs text-slate-400 font-normal">/ano</span>
                  </p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 text-center leading-relaxed">
              * Estimativa com base em custo médio por clique (CPC) para buscas com alta intenção de agendamento na sua região.
            </p>

          </div>

        </div>

      </div>
    </div>
  );
}
