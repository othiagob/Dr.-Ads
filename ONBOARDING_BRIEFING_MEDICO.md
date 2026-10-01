# 📋 Formulário de Onboarding do Médico — Dr. Ads
> **Instruções para o Sócio Comercial:**  
> Envie este formulário (ou crie um no Google Forms / Typeform com estas exatas perguntas) para o médico logo após fechar a venda. Com essas respostas em mãos, o desenvolvedor sobe o site e as tags de rastreamento em menos de 30 minutos.

---

### 1. Dados Cadastrais & Éticos (Obrigatório CFM)
- **Nome completo como deve constar no site:** (Ex: Dr. Marcelo Albuquerque)
- **Número do CRM com Estado:** (Ex: CRM/SP 134.210)
- **Número do RQE (Registro de Qualificação de Especialista):** (Ex: RQE 54.890)
  * *Nota ética: O CFM proíbe anunciar especialidade médica sem o número de RQE.*
- **Especialidade principal:** (Ex: Ortopedia e Traumatologia - Especialista em Joelho)

### 2. Contatos de Atendimento & Conversão
- **Número de WhatsApp da Recepção / Agendamento:** (com DDD, ex: 11 99999-8888)
- **Nome da secretária ou responsável pelos agendamentos:**
- **Horário de atendimento da recepção:** (Ex: Segunda a Sexta, das 08h às 19h)

### 3. Localização & Modalidades
- **Endereço completo do consultório principal:**
- **Bairro / Ponto de referência:** (Ex: Jardins, próximo ao Metrô Trianon-Masp)
- **Facilidades do consultório:** (Possui estacionamento com manobrista? Acessibilidade?)
- **Atende Telemedicina (Consultas Online)?** ( ) Sim  ( ) Não
- **Tempo médio de cada consulta:** (Ex: 50 a 60 minutos)

### 4. Tratamentos & Queixas Principais (Para as Campanhas do Google Ads)
*Liste de 3 a 6 queixas ou tratamentos que você mais deseja atrair para o consultório:*
1. **Tratamento 1:** (Ex: Avaliação de TDAH em adultos)
2. **Tratamento 2:** (Ex: Transtorno do Pânico e Ansiedade)
3. **Tratamento 3:** (Ex: Insônia crônica e distúrbios do sono)
4. **Tratamento 4:** (Opcional)
5. **Tratamento 5:** (Opcional)

### 5. Reembolso de Convênios
- **O consultório auxilia o paciente na emissão de recibo/relatório para reembolso de plano de saúde?**
  ( ) Sim, emitimos documentação completa para reembolso
  ( ) Não

### 6. Autoridade & Formação
- **Onde se formou e fez residência médica?** (Ex: Graduação USP, Residência Hospital das Clínicas)
- **Hospitais onde atua ou opera:** (Ex: Albert Einstein, Sírio-Libanês)
- **Sociedades médicas das quais é membro titular:** (Ex: ABP, SBD, SBCP, SBOT)

### 7. Fotos & Identidade
- **Foto profissional de alta resolução** (preferência com jaleco ou traje social médico, fundo neutro ou no consultório).
- **Logotipo da clínica/consultório** (se houver, em PNG transparente ou vetor).
- **Fotos do consultório/recepção** (se houver).

---

### 🚀 Esteira Operacional (Developer Checklist):
1. Copiar as respostas para `src/data/doctorTemplates.js` ou usar o Gerador de Configuração no painel.
2. Rodar `npm run build` e vincular o domínio do médico na Vercel / Cloudflare Pages.
3. Importar `src/data/gtm-master-dr-ads.json` no GTM do cliente e substituir o ID do Google Ads e do GA4.
4. Passar o link do site e as tags para o sócio ativar as campanhas no Google Ads!
