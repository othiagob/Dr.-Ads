import React from 'react';
import {
  ShieldCheck,
  TrendingUp,
  Zap,
  MousePointerClick,
  CheckCircle,
  XCircle,
  Layers,
  Sparkles,
  ArrowRight,
  MessageSquare,
  BarChart3,
  Calendar,
  Code2
} from 'lucide-react';
import { RoiCalculator } from './RoiCalculator';

export function AgencyPitchView({ onSelectTemplate, onOpenDemo }) {
  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans selection:bg-teal-500 selection:text-white">
      
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 border-b border-slate-800">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-teal-500/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Marketing Médico de Performance & Conformidade CFM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
              Sua presença médica. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
                Mais pacientes particulares pelo Google.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Não vendemos apenas um site bonito. Desenvolvemos uma <strong>estrutura digital de aquisição</strong> desenhada para transformar buscas no Google em contatos reais no WhatsApp da sua recepção.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => onOpenDemo('psiquiatria')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-extrabold text-sm shadow-lg shadow-teal-500/20 active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <span>Ver Demonstração ao Vivo do Site</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#produtos"
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-sm border border-slate-800 transition-all text-center"
              >
                Conhecer a Tríade de Produtos
              </a>
            </div>

            {/* Quick Metrics */}
            <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl font-black text-teal-400">98/100</p>
                <p className="text-xs text-slate-400 mt-0.5">Google PageSpeed (Menor Custo por Clique)</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl font-black text-teal-400">100%</p>
                <p className="text-xs text-slate-400 mt-0.5">Rastreamento de Leads no WhatsApp</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl font-black text-teal-400">CFM</p>
                <p className="text-xs text-slate-400 mt-0.5">Conformidade com a Resolução 2.336/2023</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
                <p className="text-2xl font-black text-teal-400">30 min</p>
                <p className="text-xs text-slate-400 mt-0.5">Deploy & Ativação de Novos Clientes</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. The 3 Products System */}
      <section id="produtos" className="py-20 border-b border-slate-800 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Ecossistema Completo
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
              Os 3 Pilares do Método Dr. Ads
            </h2>
            <p className="text-sm text-slate-400">
              O site é a infraestrutura. O negócio é a captação contínua de pacientes particulares.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Produto 1: Dr. Site */}
            <div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-black text-lg border border-teal-500/20">
                  01
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Infraestrutura</span>
                  <h3 className="text-2xl font-black text-white mt-1">Dr. Site</h3>
                  <p className="text-xs text-slate-400 mt-1">Site médico otimizado para Google Ads e conversão.</p>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Páginas específicas por patologia/serviço</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Carregamento em menos de 1 segundo (Mobile)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Guia interativo de reembolso do plano de saúde</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Avisos éticos e conformidade CFM 2.336/2023</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <button
                  onClick={() => onOpenDemo('psiquiatria')}
                  className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 transition-colors"
                >
                  Testar Modelo de Exemplo
                </button>
              </div>
            </div>

            {/* Produto 2: Dr. Setup */}
            <div className="bg-slate-900/80 rounded-3xl p-8 border border-slate-800 hover:border-teal-500/50 transition-all flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-400 flex items-center justify-center font-black text-lg border border-teal-500/20">
                  02
                </div>
                <div>
                  <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">Engenharia de Campanhas</span>
                  <h3 className="text-2xl font-black text-white mt-1">Dr. Setup</h3>
                  <p className="text-xs text-slate-400 mt-1">Configuração inicial completa da operação no Google.</p>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-300 pt-3 border-t border-slate-800">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Pesquisa de palavras de intenção cirúrgica/consulta</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Lista rigorosa de termos negativos (ex: "SUS", "grátis")</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Container GTM Mestre com rastreio de WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                    <span>Extensões de anúncio, local, chamada e sitelinks</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800">
                <span className="block text-center text-xs text-teal-400 font-semibold">
                  Ativação Inicial Única
                </span>
              </div>
            </div>

            {/* Produto 3: Dr. Ads */}
            <div className="bg-gradient-to-b from-teal-950/70 to-slate-900 rounded-3xl p-8 border border-teal-500/40 shadow-xl flex flex-col justify-between relative group">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500 text-slate-950 flex items-center justify-center font-black text-lg shadow-md">
                  03
                </div>
                <div>
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Recorrência & Escala</span>
                  <h3 className="text-2xl font-black text-white mt-1">Dr. Ads (Gestão)</h3>
                  <p className="text-xs text-slate-300 mt-1">Otimização contínua e acompanhamento mensal.</p>
                </div>
                <ul className="space-y-2.5 text-xs text-slate-200 pt-3 border-t border-teal-900/60">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Ajuste semanal de lances para maximizar consultas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Negativação diária de termos irrelevantes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Relatório mensal de Custo por Paciente no WhatsApp</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Consultoria de alinhamento com a secretária</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-teal-900/60">
                <span className="block text-center text-xs text-emerald-400 font-bold">
                  Contrato Mensal Recorrente (MRR)
                </span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Comparison Table: Traditional Agency vs Dr. Ads */}
      <section className="py-20 border-b border-slate-800 bg-slate-900/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Diferencial Competitivo
            </span>
            <h2 className="text-3xl font-black">
              Por que médicos perdem dinheiro com agências tradicionais?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-4">Critério de Avaliação</th>
                  <th className="py-4 px-4 text-rose-400">Agência Genérica / WordPress</th>
                  <th className="py-4 px-4 text-teal-400 font-bold bg-teal-950/30 rounded-t-xl">Dr. Ads (Performance Médica)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60">
                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Velocidade & PageSpeed</td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Lento (3 a 6 segundos). WordPress pesado eleva o custo do clique no Google.</span>
                  </td>
                  <td className="py-4 px-4 text-slate-200 bg-teal-950/20 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Instantâneo (&lt; 1s). Nota 98 no PageSpeed garante menor Custo por Clique.</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Rastreamento de Leads</td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Link simples de WhatsApp. Ninguém sabe qual anúncio ou palavra gerou a mensagem.</span>
                  </td>
                  <td className="py-4 px-4 text-slate-200 bg-teal-950/20 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Script de persistência de UTM: anexa a campanha no WhatsApp e dispara o GTM.</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Conformidade CFM</td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>Ignoram o CFM. Usam promessas exageradas e geram risco de processo ético para o médico.</span>
                  </td>
                  <td className="py-4 px-4 text-slate-200 bg-teal-950/20 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>100% blindado pela Resolução CFM 2.336/2023 com CRM, RQE e termos éticos.</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Barreira de Convênio</td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>O paciente desiste ao ver que é particular.</span>
                  </td>
                  <td className="py-4 px-4 text-slate-200 bg-teal-950/20 font-medium">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Seção de Reembolso do Convênio explica como receber até 100% de volta pelo plano.</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-semibold text-white">Tempo para Lançamento</td>
                  <td className="py-4 px-4 text-slate-400 flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                    <span>30 a 60 dias de espera demorada.</span>
                  </td>
                  <td className="py-4 px-4 text-slate-200 bg-teal-950/20 font-medium rounded-b-xl">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                      <span>Setup ágil em até 48 horas após preenchimento do formulário.</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* 4. ROI Simulator */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RoiCalculator />
        </div>
      </section>

      {/* 5. Live Showcase Selector */}
      <section className="py-20 border-b border-slate-800 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-teal-400 uppercase tracking-wider">
              Templates Especializados Prontos
            </span>
            <h2 className="text-3xl font-black">
              Escolha uma Especialidade para Ver a Demonstração
            </h2>
            <p className="text-sm text-slate-400">
              Arquitetura modular pronta para Psiquiatria, Dermatologia, Ortopedia e Cirurgia Plástica.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { id: 'psiquiatria', title: 'Psiquiatria & Saúde Mental', doctor: 'Dr. Lucas Mendes', color: 'from-teal-600 to-emerald-600' },
              { id: 'dermatologia', title: 'Dermatologia & Tricologia', doctor: 'Dra. Camila Vasconcelos', color: 'from-rose-600 to-pink-600' },
              { id: 'ortopedia', title: 'Ortopedia & Joelho', doctor: 'Dr. Marcelo Albuquerque', color: 'from-blue-600 to-indigo-600' },
              { id: 'cirurgia_plastica', title: 'Cirurgia Plástica', doctor: 'Dra. Beatriz Ferraz', color: 'from-amber-600 to-orange-600' },
            ].map((tmpl) => (
              <button
                key={tmpl.id}
                onClick={() => onOpenDemo(tmpl.id)}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-teal-500 text-left transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${tmpl.color} flex items-center justify-center text-white mb-4 shadow-md font-bold text-sm`}>
                  {tmpl.title.charAt(0)}
                </div>
                <h4 className="font-bold text-white group-hover:text-teal-400 transition-colors">
                  {tmpl.title}
                </h4>
                <p className="text-xs text-slate-400 mt-1">{tmpl.doctor}</p>
                <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-teal-400 font-semibold">
                  <span>Abrir Demonstração</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Footer / CTA */}
      <footer className="py-12 border-t border-slate-800 text-center text-xs text-slate-500">
        <p className="font-bold text-slate-300">Dr. Ads — Soluções de Aquisição e Performance para Médicos</p>
        <p className="mt-1">Framework de alta conversão desenvolvido para escala e velocidade operacional.</p>
      </footer>

    </div>
  );
}
