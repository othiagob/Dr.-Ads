/**
 * Dr. Ads - Modelos Oficiais de Especialidades Médicas
 * Em total conformidade com a Resolução CFM 2.336/2023
 */

export const DOCTOR_TEMPLATES = {
  psiquiatria: {
    id: 'psiquiatria',
    specialtyId: 'Psiquiatria',
    specialtyName: 'Psiquiatria & Saúde Mental',
    doctorName: 'Dr. Lucas Mendes',
    gender: 'm',
    crm: 'CRM/SP 148.920',
    rqe: 'RQE 67.231',
    heroTag: 'Especialista em Psiquiatria Clínica & Adultos',
    headline: 'Cuidado psiquiátrico humanizado, baseado em evidências científicas e sem julgamentos',
    subheadline: 'Consultas presenciais nos Jardins (São Paulo) e telemedicina para todo o Brasil. Tempo dedicado de até 60 minutos, com emissão de recibo para reembolso do seu plano de saúde.',
    photoUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800',
    experienceYears: '12 anos',
    academicPedigree: [
      'Graduação em Medicina pela Faculdade de Medicina da USP (FMUSP)',
      'Residência Médica em Psiquiatria pelo Instituto de Psiquiatria do Hospital das Clínicas (IPq - HCFMUSP)',
      'Membro Titular da Associação Brasileira de Psiquiatria (ABP)',
      'Preceptor convidado do ambulatório de Transtornos de Humor'
    ],
    whatsapp: '5511987654321',
    whatsappDisplay: '(11) 98765-4321',
    clinicAddress: 'Alameda Santos, 1470, Cj. 82 — Cerqueira César (Jardins), São Paulo - SP',
    clinicNeighborhood: 'Jardins / Metrô Trianon-Masp',
    telemedicine: true,
    telemedicineDetails: 'Plataforma segura com prontuário criptografado e receitas digitais ICP-Brasil válidas em todas as farmácias.',
    consultationDuration: '50 a 60 minutos',
    priceInfo: 'Atendimento particular com emissão de nota fiscal/recibo detalhado para reembolso em planos de saúde (Bradesco, Amil, SulAmérica, Omint, Care Plus, etc.).',
    trustMetrics: [
      { label: 'Tempo por Consulta', value: '60 min', desc: 'Escuta profunda sem pressa' },
      { label: 'Pacientes Acompanhados', value: '+3.400', desc: 'Em São Paulo e online' },
      { label: 'Índice de Reembolso', value: '100%', desc: 'Recibo apto para seu plano' },
      { label: 'Receita Digital', value: 'ICP-Brasil', desc: 'Válida em todo o território' },
    ],
    services: [
      {
        id: 'ansiedade',
        title: 'Transtorno de Ansiedade & Síndrome do Pânico',
        shortDesc: 'Abordagem médica para controle de crises agudas, taquicardia, pensamentos intrusivos e tensão contínua.',
        symptoms: ['Sensação de aperto no peito e falta de ar', 'Crises súbitas de medo intenso', 'Dificuldade para relaxar e tensão muscular'],
        adKeywords: 'psiquiatra ansiedade sao paulo, tratamento panico sp'
      },
      {
        id: 'tdah',
        title: 'TDAH em Adultos (Déficit de Atenção e Hiperatividade)',
        shortDesc: 'Diagnóstico diferencial criterioso e plano terapêutico para procrastinação crônica, desorganização e perda de foco.',
        symptoms: ['Dificuldade crônica em iniciar e concluir tarefas', 'Sensação de mente inquieta e acelerada', 'Esquecimentos constantes e desatenção no trabalho'],
        adKeywords: 'psiquiatra especialista tdah adulto sp, teste tdah particular'
      },
      {
        id: 'depressao',
        title: 'Depressão & Transtornos do Humor',
        shortDesc: 'Tratamento integrativo com farmacoterapia precisa para resgate da vitalidade, energia, motivação e prazer.',
        symptoms: ['Cansaço extremo sem causa física aparente', 'Desânimo persistente e perda de interesse', 'Alterações no apetite e padrão de sono'],
        adKeywords: 'psiquiatra depressao jardins, tratamento depressao sp'
      },
      {
        id: 'sono',
        title: 'Insônia & Distúrbios do Sono',
        shortDesc: 'Investigação das causas da insônia inicial ou despertares noturnos frequentes, ajustando o ritmo circadiano.',
        symptoms: ['Demora mais de 30 minutos para adormecer', 'Acorda de madrugada com a mente em alerta', 'Sensação de acordar exausto'],
        adKeywords: 'medico do sono sp, psiquiatra insonia tratamento'
      },
      {
        id: 'burnout',
        title: 'Síndrome de Burnout & Estresse Corporativo',
        shortDesc: 'Acompanhamento médico para esgotamento profissional, perda de rendimento e sintomas psicossomáticos.',
        symptoms: ['Sensação de sobrecarga incontrolável no trabalho', 'Cinismo ou distanciamento emocional', 'Dores de cabeça tensionais constantes'],
        adKeywords: 'especialista burnout sp, consulta psiquiatrica executivos'
      },
      {
        id: 'bipolaridade',
        title: 'Transtorno Bipolar & Instabilidade Emocional',
        shortDesc: 'Estabilização de humor com segurança terapêutica, minimizando oscilações entre fases e prevenindo recaídas.',
        symptoms: ['Fases de euforia e gastos impulsivos', 'Alternância com períodos de depressão profunda', 'Irritabilidade incomum e insônia sem cansaço'],
        adKeywords: 'tratamento bipolaridade sao paulo, psiquiatra humor'
      }
    ],
    reimbursementSteps: [
      { step: '1', title: 'Agende e realize sua consulta', desc: 'Você realiza a consulta normalmente e recebe um recibo e relatório médico discriminado.' },
      { step: '2', title: 'Envie pelo App do seu plano', desc: 'Abra o app do seu convênio (Bradesco, SulAmérica, Amil, Omint, etc.) e anexe a nota fiscal.' },
      { step: '3', title: 'Receba o valor na sua conta', desc: 'Por lei da ANS, os planos realizam o depósito do reembolso diretamente na sua conta corrente em poucos dias.' }
    ],
    faqs: [
      {
        q: 'Como funciona o agendamento de primeira consulta?',
        a: 'O agendamento é feito diretamente pelo WhatsApp da recepção. Nossa equipe informará os horários disponíveis (presencial ou online) e esclarecerá todas as dúvidas sobre preparo e documentação.'
      },
      {
        q: 'O Dr. Lucas aceita convênios diretamente?',
        a: 'O atendimento é exclusivamente particular para garantir um tempo adequado (50 a 60 minutos) sem a pressa habitual dos atendimentos de convênio. No entanto, fornecemos nota fiscal completa e laudo para que você solicite o reembolso integral ou parcial junto ao seu plano de saúde.'
      },
      {
        q: 'Como funciona a Telemedicina? A receita é aceita na farmácia?',
        a: 'Sim! As consultas por vídeo acontecem em plataforma em conformidade com a LGPD e o CFM. As receitas de controle especial (notificação e prescrição médica) contam com assinatura digital padrão ICP-Brasil e possuem QR Code com validação oficial, aceitas em farmácias físicas e delivery em todo o território nacional.'
      },
      {
        q: 'Qual é a política para retorno e reavaliação de medicação?',
        a: 'Sempre que necessário ajuste de dosagem inicial nas primeiras semanas, mantemos canal de suporte com a equipe médica para esclarecer dúvidas e garantir a adaptação segura ao tratamento.'
      }
    ]
  },

  dermatologia: {
    id: 'dermatologia',
    specialtyId: 'Dermatologia',
    specialtyName: 'Dermatologia Clínica & Tricologia',
    doctorName: 'Dra. Camila Vasconcelos',
    gender: 'f',
    crm: 'CRM/SP 182.390',
    rqe: 'RQE 82.145',
    heroTag: 'Especialista pela Sociedade Brasileira de Dermatologia (SBD)',
    headline: 'Dermatologia de precisão: saúde da pele, rejuvenescimento natural e recuperação capilar',
    subheadline: 'Tratamentos dermatológicos avançados na Vila Olímpia (SP). Avaliação criteriosa com dermatoscopia digital de alta resolução e planos individualizados.',
    photoUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800',
    experienceYears: '10 anos',
    academicPedigree: [
      'Graduação em Medicina pela UNIFESP (Escola Paulista de Medicina)',
      'Residência em Dermatologia pelo Hospital São Paulo (UNIFESP)',
      'Membro Titular da Sociedade Brasileira de Dermatologia (SBD)',
      'Fellowship em Tricologia e Doenças do Couro Cabeludo'
    ],
    whatsapp: '5511977778888',
    whatsappDisplay: '(11) 97777-8888',
    clinicAddress: 'Rua Funchal, 418, 12º andar — Vila Olímpia, São Paulo - SP',
    clinicNeighborhood: 'Vila Olímpia / Faria Lima',
    telemedicine: true,
    telemedicineDetails: 'Orientação dermatológica inicial e acompanhamento de rotinas de skincare e tratamentos orais.',
    consultationDuration: '45 a 60 minutos',
    priceInfo: 'Atendimento particular com suporte completo da recepção para documentação de reembolso no seu convênio.',
    trustMetrics: [
      { label: 'Exame Detalhado', value: 'Dermatoscopia', desc: 'Mapeamento de pintas e sinais' },
      { label: 'Membro Titular', value: 'SBD / CFM', desc: 'Especialista com RQE ativo' },
      { label: 'Procedimentos', value: 'Segurança', desc: 'Em ambiente médico estéril' },
      { label: 'Reembolso', value: 'Documentado', desc: 'Para consultas e biópsias' },
    ],
    services: [
      {
        id: 'queda-cabelo',
        title: 'Tricologia & Queda de Cabelo (Calvície/Alopecia)',
        shortDesc: 'Diagnóstico com tricoscopia digital para identificar e frear eflúvio telógeno, alopecia androgenética e afinamento capilar.',
        symptoms: ['Queda repentina no banho e na escova', 'Entradas acentuadas ou rarefação no topo da cabeça', 'Coceira, descamação ou dor no couro cabeludo'],
        adKeywords: 'dermatologista queda de cabelo sp, especialista tricologia vila olimpia'
      },
      {
        id: 'acne-adulto',
        title: 'Tratamento de Acne Ativa & Cicatrizes',
        shortDesc: 'Controle definitivo de espinhas inflamadas, cistos e manchas residuais com terapêuticas tópicas, orais e lasers.',
        symptoms: ['Espingas persistentes após os 25 anos', 'Manchas escuras pós-inflamatórias', 'Sensibilidade cutânea e excesso de oleosidade'],
        adKeywords: 'tratamento acne adulta sao paulo, dermatologista cicatriz acne'
      },
      {
        id: 'mapeamento-pintas',
        title: 'Mapeamento de Pintas & Prevenção de Câncer de Pele',
        shortDesc: 'Avaliação preventiva de nevos (sinais) com dermatoscópio de contato para detecção precoce de lesões suspeitas.',
        symptoms: ['Pintas com bordas irregulares ou múltiplas cores', 'Sinais que coçam, sangram ou cresceram rapidamente', 'Histórico familiar de câncer de pele'],
        adKeywords: 'exame de pintas sp, dermatologista cancer de pele consulta'
      },
      {
        id: 'rejuvenescimento',
        title: 'Rejuvenescimento Natural & Bioestimuladores',
        shortDesc: 'Técnicas sutis para estímulo de colágeno, firmeza e sustentação sem perder a sua identidade e naturalidade.',
        symptoms: ['Perda de contorno mandibular e flacidez', 'Rugas finas ao redor dos olhos e boca', 'Pele opaca e sem viço'],
        adKeywords: 'bioestimulador de colageno sp, dermatologista estetica natural'
      }
    ],
    reimbursementSteps: [
      { step: '1', title: 'Consulta & Procedimentos', desc: 'Realize sua consulta dermatológica com todo o tempo necessário.' },
      { step: '2', title: 'Nota e Relatório Clínico', desc: 'Nossa recepção emite a nota fiscal com código de procedimento e laudo detalhado.' },
      { step: '3', title: 'Submissão e Reembolso', desc: 'Submeta no aplicativo do seu convênio e receba o ressarcimento diretamente em sua conta.' }
    ],
    faqs: [
      {
        q: 'A consulta inclui avaliação de corpo inteiro ou apenas queixa específica?',
        a: 'A consulta é completa: avaliamos a queixa principal (como cabelo ou face) e realizamos o exame físico dermatológico detalhado das pintas e da pele como um todo.'
      },
      {
        q: 'Vocês realizam procedimentos no mesmo dia da consulta?',
        a: 'Pequenos procedimentos (como biópsias de lesões suspeitas, infiltrações capilares ou crioterapia) podem ser realizados no mesmo momento caso indicado e previamente alinhado.'
      }
    ]
  },

  ortopedia: {
    id: 'ortopedia',
    specialtyId: 'Ortopedia',
    specialtyName: 'Ortopedia & Cirurgia do Joelho',
    doctorName: 'Dr. Marcelo Albuquerque',
    gender: 'm',
    crm: 'CRM/SP 134.210',
    rqe: 'RQE 54.890',
    heroTag: 'Membro da SBOT e Especialista em Joelho e Trauma Esportivo',
    headline: 'Recupere seus movimentos e viva sem dor nas articulações',
    subheadline: 'Tratamentos modernos para dor no joelho, artrose e lesões esportivas. Abordagem conservadora prioritária e cirurgias minimamente invasivas em São Paulo.',
    photoUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800',
    experienceYears: '15 anos',
    academicPedigree: [
      'Graduação em Medicina pela Santa Casa de São Paulo',
      'Residência em Ortopedia e Traumatologia pelo Pavilhão Fernandinho Simonsen (Santa Casa SP)',
      'Especialização em Cirurgia do Joelho e Artroscopia',
      'Membro Titular da Sociedade Brasileira de Ortopedia e Traumatologia (SBOT)'
    ],
    whatsapp: '5511966665555',
    whatsappDisplay: '(11) 96666-5555',
    clinicAddress: 'Rua Mato Grosso, 306, Cj. 110 — Higienópolis, São Paulo - SP',
    clinicNeighborhood: 'Higienópolis / Próximo ao Mackenzie',
    telemedicine: true,
    telemedicineDetails: 'Análise de exames de imagem (Ressonância, Tomografia e Raio-X) e segunda opinião médica especializada.',
    consultationDuration: '45 minutos',
    priceInfo: 'Atendimento particular com equipe de recepção especializada em viabilizar autorizações e reembolsos de convênios.',
    trustMetrics: [
      { label: 'Foco Clínico', value: 'Conservador', desc: 'Cirurgia apenas quando necessária' },
      { label: 'Especialista', value: 'SBOT / SBCJ', desc: 'RQE ativo e registrado' },
      { label: 'Exames', value: 'Análise 48h', desc: 'Revisão criteriosa de ressonâncias' },
      { label: 'Cirurgias', value: 'Minimamente Invasivas', desc: 'Recuperação acelerada' },
    ],
    services: [
      {
        id: 'dor-joelho',
        title: 'Dor no Joelho & Desgaste da Cartilagem (Artrose)',
        shortDesc: 'Tratamentos de viscossuplementação (ácido hialurônico), fisioterapia guiada e reabilitação de impacto.',
        symptoms: ['Dor ao subir ou descer escadas', 'Inchaço ou estalos frequentes na articulação', 'Rigidez matinal ao apoiar os pés no chão'],
        adKeywords: 'especialista em joelho sp, tratamento artrose joelho higienopolis'
      },
      {
        id: 'lesao-menisco',
        title: 'Lesões de Menisco & Ligamento Cruzado (LCA)',
        shortDesc: 'Diagnóstico rápido de entorses e traumas esportivos com indicação precisa de artroscopia ou fortalecimento.',
        symptoms: ['Sensação de falseio ou instabilidade ao girar o corpo', 'Bloqueio articular (joelho "trava")', 'Dor aguda após prática de futebol, corrida ou crossfit'],
        adKeywords: 'cirurgia menisco recuperacao sp, lca joelho medico particular'
      },
      {
        id: 'segunda-opiniao',
        title: 'Segunda Opinião em Cirurgia Ortopédica',
        shortDesc: 'Avaliação independente e sem conflito de interesse sobre laudos cirúrgicos e procedimentos de coluna e joelho.',
        symptoms: ['Recebeu indicação cirúrgica e quer confirmar se há alternativas', 'Dúvidas sobre o tempo de recuperação pós-operatória'],
        adKeywords: 'segunda opiniao cirurgia joelho sao paulo, ortopedista santacasa'
      }
    ],
    reimbursementSteps: [
      { step: '1', title: 'Consulta & Avaliação de Exames', desc: 'Traga seus exames anteriores ou solicite novos pedidos com guia médica.' },
      { step: '2', title: 'Equipe de Reembolso Auxilia', desc: 'Nossa secretária entrega o dossiê completo de solicitação de reembolso.' },
      { step: '3', title: 'Ressarcimento Rápido', desc: 'O plano credita a consulta ou procedimentos conforme sua tabela contratada.' }
    ],
    faqs: [
      {
        q: 'O Dr. Marcelo já analisa exames de ressonância na primeira consulta?',
        a: 'Com certeza! Você pode trazer os exames físicos ou o acesso digital. O Dr. Marcelo examina o exame de imagem detalhadamente com você na tela, explicando a causa da sua dor.'
      },
      {
        q: 'O que é a viscossuplementação com ácido hialurônico?',
        a: 'É uma aplicação intra-articular segura, realizada no próprio consultório, que lubrifica a articulação do joelho, reduz a inflamação e alivia a dor provocada pelo desgaste de cartilagem.'
      }
    ]
  },

  cirurgia_plastica: {
    id: 'cirurgia_plastica',
    specialtyId: 'Cirurgia Plástica',
    specialtyName: 'Cirurgia Plástica & Contorno Corporal',
    doctorName: 'Dra. Beatriz Ferraz',
    gender: 'f',
    crm: 'CRM/SP 156.780',
    rqe: 'RQE 71.234',
    heroTag: 'Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)',
    headline: 'Elegância, segurança cirúrgica e harmonia para o seu corpo e rosto',
    subheadline: 'Cirurgias realizadas exclusivamente nos principais hospitais de São Paulo (Albert Einstein e Sírio-Libanês). Avaliação individualizada e pós-operatório assistido.',
    photoUrl: 'https://images.unsplash.com/photo-1594824813583-0941910ef878?auto=format&fit=crop&q=80&w=800',
    experienceYears: '14 anos',
    academicPedigree: [
      'Graduação em Medicina pela Escola Paulista de Medicina (UNIFESP)',
      'Residência em Cirurgia Geral e Cirurgia Plástica pela UNIFESP',
      'Membro Titular da Sociedade Brasileira de Cirurgia Plástica (SBCP)',
      'Especialização em Cirurgia de Mama e Contorno Corporal Pós-Gestação'
    ],
    whatsapp: '5511955554444',
    whatsappDisplay: '(11) 95555-4444',
    clinicAddress: 'Rua Oscar Freire, 1140, 5º andar — Cerqueira César, São Paulo - SP',
    clinicNeighborhood: 'Oscar Freire / Jardins',
    telemedicine: true,
    telemedicineDetails: 'Consulta preliminar informativa para pacientes de outros estados antes da avaliação presencial.',
    consultationDuration: '60 minutos',
    priceInfo: 'Consultas com tempo integral para exame físico, esclarecimento de expectativas, simulação e plano cirúrgico seguro.',
    trustMetrics: [
      { label: 'Hospitais', value: 'Einstein / Sírio', desc: 'Cirurgias com UTI e retaguarda total' },
      { label: 'Membro Titular', value: 'SBCP', desc: 'RQE registrado e auditado' },
      { label: 'Pós-Operatório', value: 'Assistido', desc: 'Equipe de enfermagem dedicada' },
      { label: 'Conformidade', value: 'CFM 2.336', desc: 'Ética e sem falsas promessas' },
    ],
    services: [
      {
        id: 'mamoplastia',
        title: 'Mamoplastia de Aumento & Redutora',
        shortDesc: 'Próteses com técnica de recuperação rápida (R24R) ou redução de mamas para alívio de peso e melhora postural.',
        symptoms: ['Assimetria mamária perceptível', 'Desconforto físico por mamas volumosas', 'Desejo de contorno e projeção equilibrada'],
        adKeywords: 'mamoplastia de aumento sp jardins, protese silicone einstein'
      },
      {
        id: 'abdominoplastia',
        title: 'Abdominoplastia & Lipoaspiração de Definição',
        shortDesc: 'Tratamento de diástase abdominal pós-gestação e retirada de excesso de pele com reposicionamento do umbigo.',
        symptoms: ['Afastamento dos músculos abdominais após parto', 'Flacidez cutânea que não responde a exercícios', 'Gordura localizada resistente'],
        adKeywords: 'abdominoplastia pos parto sp, lipo lad especialista jardins'
      },
      {
        id: 'rinoplastia',
        title: 'Rinoplastia Estruturada (Estética & Funcional)',
        shortDesc: 'Harmonização do dorso e ponta nasal aliada à correção de desvio de septo com preservação da respiração.',
        symptoms: ['Dificuldade respiratória aliada a queixa estética', 'Ponta caída ou dorso nasal proeminente'],
        adKeywords: 'rinoplastia estruturada sao paulo, cirurgiao plastico nariz'
      }
    ],
    reimbursementSteps: [
      { step: '1', title: 'Avaliação Funcional', desc: 'Muitos procedimentos possuem componente funcional (ex: diástase grave, gigantomastia ou desvio de septo).' },
      { step: '2', title: 'Laudo e Pedido Cirúrgico', desc: 'Fornecemos laudo minucioso para autorização hospitalar pelo plano de saúde.' },
      { step: '3', title: 'Honorários e Internação', desc: 'O plano pode cobrir toda a despesa hospitalar e internação no hospital de sua escolha.' }
    ],
    faqs: [
      {
        q: 'Onde são realizadas as cirurgias plásticas?',
        a: 'Todas as cirurgias são realizadas exclusivamente em ambiente hospitalar credenciado de alta complexidade com UTI e suporte completo de anestesia (Hospital Israelita Albert Einstein, Hospital Sírio-Libanês e Vila Nova Star).'
      },
      {
        q: 'O plano de saúde cobre cirurgia plástica?',
        a: 'Procedimentos reparadores ou funcionais (como correção de diástase muscular abdominal pós-parto, redução de mama por dores na coluna ou correção de septo nasal) frequentemente têm cobertura hospitalar autorizada pelos convênios via reembolso ou rede credenciada.'
      }
    ]
  }
};
