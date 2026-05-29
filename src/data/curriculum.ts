export interface Subject {
  id: string;
  name: string;
  slug: string;
  code: string;
  period: number | 'optativa';
  axis: 'FB' | 'FPG' | 'FHS' | 'FPF' | 'EXT';
  hours: number;
  optativeCategory?: 'desenvolvimento' | 'gestao' | 'infraestrutura' | 'humanistica';
  hasContent: boolean;
}

export interface Period {
  number: number | 'optativa';
  label: string;
  subjects: Subject[];
}

const subjects: Subject[] = [
  // ═══════ 1º PERÍODO ═══════
  { id: 'fusi', name: 'Fundamentos de Sistemas de Informação', slug: 'fundamentos-si', code: 'FUSI', period: 1, axis: 'FB', hours: 80, hasContent: false },
  { id: 'alpg', name: 'Algoritmos e Lógica de Programação', slug: 'algoritmos-logica-programacao', code: 'ALPG', period: 1, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'intw', name: 'Introdução às Tecnologias Web', slug: 'introducao-tecnologias-web', code: 'INTW', period: 1, axis: 'FPG', hours: 40, hasContent: false },
  { id: 'lmmd', name: 'Lógica Matemática e Matemática Discreta', slug: 'logica-matematica-discreta', code: 'LMMD', period: 1, axis: 'FB', hours: 80, hasContent: false },
  { id: 'ingt', name: 'Inglês Técnico', slug: 'ingles-tecnico', code: 'INGT', period: 1, axis: 'FB', hours: 80, hasContent: false },
  { id: 'filo', name: 'Filosofia', slug: 'filosofia', code: 'FILO', period: 1, axis: 'FHS', hours: 80, hasContent: false },

  // ═══════ 2º PERÍODO ═══════
  { id: 'mtsi', name: 'Matemática para Sistemas de Informação', slug: 'matematica-si', code: 'MTSI', period: 2, axis: 'FB', hours: 80, hasContent: false },
  { id: 'fgeo', name: 'Fundamentos da Gestão Organizacional', slug: 'fundamentos-gestao-organizacional', code: 'FGEO', period: 2, axis: 'FB', hours: 80, hasContent: false },
  { id: 'aocp', name: 'Arquitetura e Organização de Computadores', slug: 'arquitetura-organizacao-computadores', code: 'AOCP', period: 2, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'lpgm', name: 'Linguagem de Programação', slug: 'linguagem-programacao', code: 'LPGM', period: 2, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'sorg', name: 'Sociologia das Organizações', slug: 'sociologia-organizacoes', code: 'SORG', period: 2, axis: 'FHS', hours: 80, hasContent: false },

  // ═══════ 3º PERÍODO ═══════
  { id: 'etap', name: 'Estatística Aplicada', slug: 'estatistica-aplicada', code: 'ETAP', period: 3, axis: 'FB', hours: 80, hasContent: false },
  { id: 'fdbd', name: 'Fundamentos de Banco de Dados', slug: 'fundamentos-banco-dados', code: 'FDBD', period: 3, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'sope', name: 'Sistemas Operacionais', slug: 'sistemas-operacionais', code: 'SOPE', period: 3, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'edts', name: 'Estrutura de Dados', slug: 'estrutura-dados', code: 'EDTS', period: 3, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'metc', name: 'Metodologia Científica', slug: 'metodologia-cientifica', code: 'METC', period: 3, axis: 'FB', hours: 80, hasContent: false },

  // ═══════ 4º PERÍODO ═══════
  { id: 'ihcc', name: 'Interação Humano-Computador', slug: 'interacao-humano-computador', code: 'IHCC', period: 4, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'apbd', name: 'Administração e Projeto de Banco de Dados', slug: 'administracao-projeto-banco-dados', code: 'APBD', period: 4, axis: 'FPG', hours: 80, hasContent: true },
  { id: 'frdc', name: 'Fundamentos de Redes de Computadores', slug: 'fundamentos-redes-computadores', code: 'FRDC', period: 4, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'poob', name: 'Programação Orientada a Objetos', slug: 'programacao-orientada-objetos', code: 'POOB', period: 4, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'gpti', name: 'Gestão de Pessoas em TI', slug: 'gestao-pessoas-ti', code: 'GPTI', period: 4, axis: 'FB', hours: 40, hasContent: false },

  // ═══════ 5º PERÍODO ═══════
  { id: 'gvti', name: 'Governança em Tecnologia da Informação', slug: 'governanca-ti', code: 'GVTI', period: 5, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'tabd', name: 'Tópicos Avançados de Banco de Dados', slug: 'topicos-avancados-banco-dados', code: 'TABD', period: 5, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'pint', name: 'Projeto Integrador', slug: 'projeto-integrador', code: 'PINT', period: 5, axis: 'EXT', hours: 40, hasContent: false },
  { id: 'pgwb', name: 'Programação Web', slug: 'programacao-web', code: 'PGWB', period: 5, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'apsi', name: 'Análise e Projeto de Sistemas de Informação', slug: 'analise-projeto-si', code: 'APSI', period: 5, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'gpjt', name: 'Gerência de Projeto', slug: 'gerencia-projeto', code: 'GPJT', period: 5, axis: 'FPG', hours: 80, hasContent: false },

  // ═══════ 6º PERÍODO ═══════
  { id: 'empd', name: 'Empreendedorismo Digital', slug: 'empreendedorismo-digital', code: 'EMPD', period: 6, axis: 'FB', hours: 80, hasContent: false },
  { id: 'pisi', name: 'Projeto Integrador em SI', slug: 'projeto-integrador-si', code: 'PISI', period: 6, axis: 'EXT', hours: 80, hasContent: false },
  { id: 'pdsw', name: 'Processos de Desenvolvimento de Software', slug: 'processos-desenvolvimento-software', code: 'PDSW', period: 6, axis: 'FPG', hours: 80, hasContent: false },

  // ═══════ 7º PERÍODO ═══════
  { id: 'gsei', name: 'Gestão da Segurança da Informação', slug: 'gestao-seguranca-informacao', code: 'GSEI', period: 7, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'ppap', name: 'Projeto de Pesquisa Aplicada', slug: 'projeto-pesquisa-aplicada', code: 'PPAP', period: 7, axis: 'FB', hours: 40, hasContent: false },
  { id: 'sige', name: 'Sistemas de Informação Gerenciais', slug: 'sistemas-informacao-gerenciais', code: 'SIGE', period: 7, axis: 'FPG', hours: 80, hasContent: false },
  { id: 'tosi', name: 'Tópicos Especiais em SI', slug: 'topicos-especiais-si', code: 'TOSI', period: 7, axis: 'FPG', hours: 40, hasContent: false },

  // ═══════ 8º PERÍODO ═══════
  { id: 'psif', name: 'Pesquisa em Sistemas de Informação', slug: 'pesquisa-si', code: 'PSIF', period: 8, axis: 'FB', hours: 40, hasContent: false },
  { id: 'tsas', name: 'Tecnologias Sociais e Assistivas', slug: 'tecnologias-sociais-assistivas', code: 'TSAS', period: 8, axis: 'EXT', hours: 40, hasContent: false },
  { id: 'sade', name: 'Sistemas de Apoio à Decisão', slug: 'sistemas-apoio-decisao', code: 'SADE', period: 8, axis: 'FPG', hours: 80, hasContent: false },

  // ═══════ OPTATIVAS — DESENVOLVIMENTO DE SOFTWARE ═══════
  { id: 'fabs', name: 'Fábrica de Software', slug: 'fabrica-software', code: 'FABS', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'gcms', name: 'Gestão de Configuração de Software', slug: 'gestao-configuracao-software', code: 'GCMS', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'intc', name: 'Inteligência Computacional', slug: 'inteligencia-computacional', code: 'INTC', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'peso', name: 'Pesquisa Operacional', slug: 'pesquisa-operacional', code: 'PESO', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'pgmv', name: 'Programação para Dispositivos Móveis', slug: 'programacao-dispositivos-moveis', code: 'PGMV', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'pasw', name: 'Projeto Avançado de Software', slug: 'projeto-avancado-software', code: 'PASW', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'qdsw', name: 'Qualidade de Software', slug: 'qualidade-software', code: 'QDSW', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'sint', name: 'Sistemas Inteligentes', slug: 'sistemas-inteligentes', code: 'SINT', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },
  { id: 'agil', name: 'Metodologias Ágeis', slug: 'metodologias-ageis', code: 'AGIL', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'desenvolvimento', hasContent: false },

  // ═══════ OPTATIVAS — GESTÃO DE TI ═══════
  { id: 'cdon', name: 'Ciência de Dados Orientada a Negócios', slug: 'ciencia-dados-negocios', code: 'CDON', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'gestao', hasContent: false },
  { id: 'gppr', name: 'Gestão por Processos', slug: 'gestao-processos', code: 'GPPR', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'gestao', hasContent: false },
  { id: 'corg', name: 'Comportamento Organizacional', slug: 'comportamento-organizacional', code: 'CORG', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'gestao', hasContent: true },
  { id: 'mkce', name: 'Marketing e Comércio Eletrônico', slug: 'marketing-comercio-eletronico', code: 'MKCE', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'gestao', hasContent: true },
  { id: 'geti', name: 'Gestão Estratégica de TI', slug: 'gestao-estrategica-ti', code: 'GETI', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'gestao', hasContent: false },

  // ═══════ OPTATIVAS — INFRAESTRUTURA ═══════
  { id: 'ader', name: 'Avaliação de Desempenho de Redes', slug: 'avaliacao-desempenho-redes', code: 'ADER', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'cfor', name: 'Computação Forense', slug: 'computacao-forense', code: 'CFOR', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'gcpt', name: 'Gerência de Redes de Computadores', slug: 'gerencia-redes-computadores', code: 'GCPT', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'idco', name: 'Internet das Coisas', slug: 'internet-das-coisas', code: 'IDCO', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'lsop', name: 'Laboratório de Sistemas Operacionais', slug: 'laboratorio-sistemas-operacionais', code: 'LSOP', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'infr', name: 'Projeto de Infraestrutura', slug: 'projeto-infraestrutura', code: 'INFR', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'segr', name: 'Segurança de Redes', slug: 'seguranca-redes', code: 'SEGR', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },
  { id: 'devo', name: 'DevOps', slug: 'devops', code: 'DEVO', period: 'optativa', axis: 'FPF', hours: 80, optativeCategory: 'infraestrutura', hasContent: false },

  // ═══════ OPTATIVAS — HUMANÍSTICAS / SUPLEMENTARES ═══════
  { id: 'prtint', name: 'Propriedade Intelectual', slug: 'propriedade-intelectual', code: 'PINT', period: 'optativa', axis: 'FHS', hours: 40, optativeCategory: 'humanistica', hasContent: false },
  { id: 'negs', name: 'Negócios Sociais', slug: 'negocios-sociais', code: 'NEGS', period: 'optativa', axis: 'FHS', hours: 40, optativeCategory: 'humanistica', hasContent: false },
  { id: 'edfi', name: 'Educação Financeira', slug: 'educacao-financeira', code: 'EDFI', period: 'optativa', axis: 'FHS', hours: 40, optativeCategory: 'humanistica', hasContent: false },
  { id: 'dird', name: 'Direito Digital', slug: 'direito-digital', code: 'DIRD', period: 'optativa', axis: 'FHS', hours: 40, optativeCategory: 'humanistica', hasContent: false },
  { id: 'libr', name: 'Libras', slug: 'libras', code: 'LIBR', period: 'optativa', axis: 'FHS', hours: 40, optativeCategory: 'humanistica', hasContent: false },
];

export const optativeCategories = {
  desenvolvimento: { label: 'Desenvolvimento de Software' },
  gestao: { label: 'Gestão de TI' },
  infraestrutura: { label: 'Infraestrutura' },
  humanistica: { label: 'Humanísticas' },
} as const;

export function getSubjectBySlug(slug: string): Subject | undefined {
  return subjects.find(s => s.slug === slug);
}

export function getSubjectsByPeriod(period: number): Subject[] {
  return subjects.filter(s => s.period === period);
}

export function getOptativesByCategory(category: string): Subject[] {
  return subjects.filter(s => s.period === 'optativa' && s.optativeCategory === category);
}

export function getSubjectsWithContent(): Subject[] {
  return subjects.filter(s => s.hasContent);
}

export function getPeriods(): Period[] {
  const periods: Period[] = [];

  for (let i = 1; i <= 8; i++) {
    periods.push({
      number: i,
      label: `${i}º Período`,
      subjects: getSubjectsByPeriod(i),
    });
  }

  periods.push({
    number: 'optativa',
    label: 'Optativas',
    subjects: subjects.filter(s => s.period === 'optativa'),
  });

  return periods;
}

export function getTotalSubjects(): number {
  return subjects.length;
}

export function getSubjectsWithContentCount(): number {
  return subjects.filter(s => s.hasContent).length;
}

export default subjects;
