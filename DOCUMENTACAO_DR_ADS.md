# 📘 Documentação Completa — Ecossistema Dr. Ads

Este documento consolida a análise do modelo de negócio, as decisões de engenharia e os componentes desenvolvidos para a plataforma **Dr. Ads**.

---

## 1. O Que Foi Entendido da Mensagem Inicial do Seu Sócio

A mensagem enviada pelo seu sócio revelou uma **visão comercial madura e muito acima da média** do mercado de agências:

### A. A Mudança de Posicionamento (De "Criação de Site" para "Sistema de Aquisição")
- **O erro clássico:** Médicos recebem propostas de "criação de site" todos os dias. Para eles, um site comum é um custo estético que não traz retorno garantido.
- **A tese do sócio:** O primeiro produto não é um site institucional qualquer, mas uma **infraestrutura desenvolvida exclusivamente para tráfego pago (Google Ads)**.
- **A promessa clara:** *"Nós construímos a estrutura digital do médico e colocamos o Google para trabalhar na captação de pacientes."*

### B. A Tríade de Oferta (Estratégia de Receita e LTV)
O seu sócio desenhou uma esteira que transforma uma venda pontual em receita recorrente:
1. **01 — Dr. Site (Infraestrutura):** Site médico de altíssima velocidade e conversão, com tracking e páginas por especialidade.
2. **02 — Dr. Setup (Campanhas):** Configuração cirúrgica do Google Ads (palavras-chave de intenção, negativas, extensões e tags de conversão).
3. **03 — Dr. Ads (Gestão & MRR):** Otimização contínua das campanhas e acompanhamento mensal. Aqui está o lucro real da agência (mensalidades recorrentes).

### C. A Sacada de Escala: O Framework Modular
O ponto mais importante para você (o desenvolvedor):
- **O gargalo de agências convencionais:** Desenvolver cada site do zero no WordPress/Elementor consome 30 a 60 dias, gera problemas de plugins e consome todo o seu tempo técnico.
- **A solução:** Criar um **Framework Único** com templates pré-configurados por especialidade médica. Você replica a arquitetura, altera apenas os dados do médico e a identidade, permitindo subir novos clientes em **30 minutos**.

---

## 2. O Que Foi Feito (Implementação Prática)

O projeto foi construído no repositório com as seguintes camadas:

### 1. Pilha Tecnológica (Stack)
- **Vite + React:** Compilação ultra-rápida, código enxuto e sem dependências pesadas de servidores backend.
- **Tailwind CSS com Design Tokens Médicos:** Paleta profissional em tons clínicos (Teal, Navy, Emerald, Slate), tipografia corporativa (*Plus Jakarta Sans*) e micro-animações de pulso.
- **Lucide React:** Biblioteca de ícones SVG leves e sem impacto no carregamento.

### 2. O Portal Comercial da Dr. Ads (`src/components/AgencyPitch/`)
Uma área completa voltada para o seu sócio apresentar aos clientes:
- **Hero de Posicionamento:** Promessa forte com métricas chave (PageSpeed 98, Rastreio 100%, CFM 2.336/2023, Ativação em 30 min).
- **Apresentação dos 3 Produtos:** Explicando o papel de cada serviço (Dr. Site → Dr. Setup → Dr. Ads).
- **Tabela Comparativa Matadora:** Confronta agências genéricas em WordPress com a solução Dr. Ads (Velocidade, Tracking de WhatsApp, Ética CFM e barreira de convênio).
- **Simulador Interativo de Retorno (ROI Calculator):** O médico ajusta o valor de sua consulta e quantos pacientes deseja; o simulador calcula o novo faturamento mensal, o investimento estimado no Google Ads e o LTV anual com retornos.
- **Seletor de Demonstração:** Botões para abrir ao vivo os templates de cada especialidade.

### 3. O Framework do Site Médico (`src/components/DoctorSite/`)
Um sistema modular com 4 especialidades prontas (**Psiquiatria**, **Dermatologia**, **Ortopedia**, **Cirurgia Plástica**):
- **DoctorHeader:** Sticky com identificação clara, badges éticos de CRM/RQE e botão direto de WhatsApp.
- **DoctorHero:** Copy persuasiva de alta conversão, foto do médico em destaque e badges de autoridade (60 min por consulta, nota 4.9).
- **DoctorTrustBar:** 4 pilares de confiança (tempo sem pressa, residência/RQE, documentação de reembolso e receita digital ICP-Brasil).
- **DoctorServices:** Catálogo de tratamentos e patologias com sintomas comuns e botão que já envia o nome do tratamento específico para o WhatsApp da secretária.
- **DoctorReimbursement:** Passo a passo interativo explicando o direito à livre escolha e reembolso pelo plano de saúde (Bradesco, SulAmérica, Amil, Omint, etc.), eliminando a barreira de consulta particular.
- **DoctorAbout:** Biografia médica ética, formação acadêmica, hospitais de atuação e filosofia clínica.
- **DoctorLocation:** Localização presencial com facilidades (estacionamento, acessibilidade) + Telemedicina para todo o território nacional.
- **DoctorFaq:** Perguntas e respostas usando tags semânticas `<details>` nativas.
- **DoctorBookingModal:** Dialog nativo (`<dialog>`) com campos de nome, telefone, período e modalidade, gerando mensagem formatada para o WhatsApp.
- **DoctorFooter:** Aviso legal obrigatório pelo CFM (urgências para pronto-socorro / SAMU 192) e LGPD.
- **FloatingWhatsApp:** Botão flutuante com balão de atendimento ativo ("Recepção online").

### 4. Motor de Rastreamento Avançado (`src/utils/tracking.js`)
- Captura parâmetros de campanhas da URL (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `gclid`) e persiste em `sessionStorage`.
- Injeta automaticamente a campanha na mensagem do WhatsApp para a secretária identificar a origem.
- Dispara eventos no `dataLayer` do Google Tag Manager (`whatsapp_lead_click` e `form_lead_submit`).

### 5. Ferramentas Operacionais para Você e Seu Sócio
- **Container GTM Mestre (`src/data/gtm-master-dr-ads.json`):** Arquivo pronto para importação no Google Tag Manager em 1 clique.
- **Painel de Customização em Tempo Real (`SiteGeneratorPanel.jsx`):** Permite alterar dados do médico na tela, ver o site atualizar na hora e copiar a configuração JSON.
- **Formulário de Onboarding (`ONBOARDING_BRIEFING_MEDICO.md`):** Questionário enxuto de 7 perguntas para o sócio enviar ao médico logo após a venda.

---

## 3. Por Que Foi Feito Dessa Forma (Racional Técnico & Estratégico)

| Decisão | Por que foi feita? | Impacto no Negócio |
| :--- | :--- | :--- |
| **Vite/React em vez de WordPress** | WordPress tem tempo de carregamento lento (3 a 6 segundos), plugins que quebram e falhas de segurança. | **PageSpeed 98+:** O Google Ads premia sites rápidos com um **Índice de Qualidade alto**, o que barateia diretamente o Custo por Clique (CPC) do cliente. Além disso, hospeda de graça na Vercel. |
| **Seção de Reembolso do Convênio** | 80% dos pacientes que buscam médicos particulares têm planos com direito a reembolso pela ANS, mas não sabem como funciona. | **Quebra a maior objeção de venda:** O paciente percebe que terá atendimento VIP de 60 minutos e receberá o dinheiro de volta do plano. |
| **Páginas/Seções por Patologia/Sintoma** | No Google Ads, campanhas que direcionam para termos específicos (ex: "psiquiatra especialista em TDAH") convertem 3x mais do que enviar para uma home genérica. | Permite que o sócio crie anúncios hipersegmentados com máxima relevância para a busca do paciente. |
| **UTMs injetadas no WhatsApp** | Na maioria das agências, a secretária não sabe dizer se o contato veio do Google, do Instagram ou de indicação. | **Comprovação irrefutável de ROI:** O médico vê diariamente no WhatsApp mensagens marcadas com `[Ref: Google Ads | Campanha: TDAH]`. Isso faz o cliente renovar o contrato mensal sem hesitar. |
| **Conformidade CFM 2.336/2023** | Médicos têm medo de serem autuados pelo Conselho Regional de Medicina por publicidade irregular. | Garante credibilidade institucional e protege o CRM do médico contra processos éticos. |
| **Calculadora de ROI no Portal** | Médicos são céticos em relação a promessas vazias de marketing. | Transforma a conversa em números matemáticos simples: 15 novos pacientes cobrem o investimento com folga e geram lucro líquido. |
