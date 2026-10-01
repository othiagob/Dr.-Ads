# 🩺 Dr. Ads — Ecossistema de Aquisição Médica

Plataforma de alta conversão e infraestrutura desenvolvida exclusivamente para tráfego pago (Google Ads) no segmento médico e de saúde privada.

Construído com foco em **velocidade extrema (PageSpeed 95+)**, **conformidade ética com a Resolução CFM 2.336/2023**, e **atribuição completa de leads via WhatsApp**.

---

## 🚀 Tecnologias

- **Vite + React 19**
- **Tailwind CSS** com design tokens médicos clínicos
- **Lucide React** (ícones SVG ultraleves)
- **Google Tag Manager & DataLayer** nativo para tracking de conversão

---

## 📦 Estrutura do Projeto

- `src/components/AgencyPitch/`: Apresentação comercial, comparativo com agências comuns e calculadora interativa de ROI.
- `src/components/DoctorSite/`: Framework modular do site médico com templates prontos (Psiquiatria, Dermatologia, Ortopedia, Cirurgia Plástica).
- `src/components/SiteGenerator/`: Painel de customização em tempo real para gerar novos sites médicos em minutos.
- `src/utils/tracking.js`: Motor de captura de UTMs e injeção automática de origem no WhatsApp.
- `src/data/gtm-master-dr-ads.json`: Container pronto para importação no Google Tag Manager.
- `DOCUMENTACAO_DR_ADS.md`: Documentação completa de negócio e arquitetura técnica.
- `ONBOARDING_BRIEFING_MEDICO.md`: Formulário de briefing para novos médicos.

---

## 🛠️ Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/othiagob/Dr.-Ads.git
cd Dr.-Ads
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Para gerar o build de produção:
```bash
npm run build
```

---

## 📄 Licença

Projeto privado desenvolvido para Dr. Ads.
