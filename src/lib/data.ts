/* Single source of truth for every word and link on the page.

   Editorial rule for this file: state the CAPACITY first, then the ORIGIN that
   validates it. "Consigo trabalhar com sub-redes IPv4" comes before "aprendi isso
   no NetPractice". Nothing here is invented — every entry was checked against
   the real repositories, the real project files on disk, the real CV facts or a
   live HTTP request. Where a competence comes from a course rather than from
   practice, it is labelled as contact/training and never as a delivered skill. */

/* WhatsApp click-to-chat. This is a short link on purpose: the page never exposes
   a phone number, not in text, not in metadata, not in the URL.
   Note: wa.link/f5vghle (with a trailing "e") is a typo that resolves to
   oops.wa.link — the working link is wa.link/f5vghl. Verified with curl -IL.
   Keep this in sync with the QR image at src/assets/whatsapp-qr.png. */
const whatsappLink = "https://wa.link/f5vghl";
const whatsappMessage =
  "Olá, Flávio! Vi o seu portfólio e gostaria de falar sobre uma oportunidade.";

export const profile = {
  name: "Flávio Garcia",
  role: "Software Developer",
  location: "Luanda, Angola",
  github: "https://github.com/FlavioFj20",
  linkedin: "https://ao.linkedin.com/in/fl%C3%A1vio-garcia-1b63aa368",
  whatsapp: `${whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`,
} as const;

/* One sentence for the hero. Leads with what I do, not with where I studied. */
export const positioning =
  "Construo software e serviços backend em Node.js e TypeScript, com uma base que inclui bases de dados, Linux, containers, infraestrutura e redes de computadores.";

export type NavItem = { href: string; label: string };

export const navigation: readonly NavItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#redes", label: "Redes" },
  { href: "#escola-42", label: "42 Luanda" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contacto", label: "Contacto" },
];

/* The areas the profile crosses. Used as the hero's short line — the visual proof
   that this is not a frontend-only or a student-only profile. */
export const focusAreas: readonly string[] = [
  "Software Development",
  "Backend",
  "Web",
  "Bases de dados",
  "Sistemas",
  "Infraestrutura",
  "Redes",
];

export const about: readonly string[] = [
  "Construo a partir dos fundamentos. Tenho formação técnica em informática e uma formação prática de desenvolvimento construída em projetos, estudo autónomo e trabalho em contexto real.",
  "Hoje trabalho principalmente com software e backend — APIs, serviços e integração com bases de dados. Essa base também inclui Linux, containers, infraestrutura e redes de computadores, o que me permite olhar para uma aplicação não só pelo código que a executa, mas também pelos dados, serviços, ambiente e comunicação que a suportam.",
  "Prefiro entender o problema antes de escolher a ferramenta. Quando uma abstração falha, gosto de saber o que está por baixo dela.",
];

/* ---------------------------------------------------------------------------
   Commercial section: concrete work, not a technology list. Each service says
   what it is in one line and then lists what actually gets delivered.
   Networking is deliberately scoped to small scenarios and lab work.
   --------------------------------------------------------------------------- */
export type Service = {
  title: string;
  body: string;
  items: readonly string[];
};

export const servicesIntro = {
  eyebrow: "Serviços",
  title: "Como posso contribuir.",
  lead: "Trabalho sobretudo em backend e aplicações web. O que se segue é o que consigo construir, e não uma lista de ferramentas.",
} as const;

export const services: readonly Service[] = [
  {
    title: "Desenvolvimento de APIs",
    body: "APIs REST e serviços backend para produtos internos, sites e aplicações web.",
    items: [
      "APIs REST",
      "Node.js e TypeScript",
      "NestJS e Express",
      "Validação de dados",
      "Autenticação e autorização",
      "Documentação da API",
    ],
  },
  {
    title: "Aplicações web",
    body: "Websites institucionais, páginas responsivas e interfaces para aplicações backend.",
    items: [
      "Websites institucionais",
      "Páginas web responsivas",
      "Sistemas web",
      "Integração frontend / backend",
    ],
  },
  {
    title: "Sistemas de gestão",
    body: "Pequenos sistemas internos e aplicações administrativas, adaptados a uma necessidade concreta.",
    items: [
      "CRUDs",
      "Gestão de utilizadores",
      "Gestão de dados",
      "Exportações e relatórios",
      "Fluxos de permissões",
    ],
  },
  {
    title: "Bases de dados",
    body: "Modelação e integração entre a aplicação e a base de dados.",
    items: [
      "Modelação de dados",
      "SQL",
      "Relações entre entidades",
      "MySQL e MariaDB",
      "PostgreSQL",
    ],
  },
  {
    title: "Docker e ambientes",
    body: "Containerização de aplicações e organização de ambientes de desenvolvimento.",
    items: [
      "Docker",
      "Docker Compose",
      "Organização de múltiplos serviços",
      "Nginx",
      "Serviços Linux",
    ],
  },
  {
    title: "Redes",
    body: "Apoio em cenários simples, dentro do meu âmbito atual.",
    items: [
      "Configuração de pequenas redes",
      "Endereçamento IPv4 e subnetting",
      "Switching e routing",
      "Ambientes de laboratório",
      "Troubleshooting de conectividade",
    ],
  },
];

/* Availability, stated explicitly and with its limits. Projects larger than this
   scope are discussed before anything is promised. */
export const availability = {
  title: "Disponível para",
  lead: "Estou no início da carreira, com a base construída e disponível para trabalhar. Concretamente:",
  items: [
    "Projetos de desenvolvimento",
    "Colaboração",
    "Desenvolvimento sob encomenda",
    "Oportunidades profissionais",
    "Trabalho em equipa",
    "Serviços de software",
  ],
  scope:
    "Dentro do âmbito acima. Para um projeto maior, avalio primeiro o escopo com quem contrata e digo com franqueza o que consigo e o que não consigo fazer dentro dele.",
} as const;

/* ---------------------------------------------------------------------------
   Stack. Split by how honest the claim can be:
   - `core`    : languages I work with across real projects
   - `current` : what I build with today
   - `studying`: contact/course exposure, labelled as such, never as delivery
   --------------------------------------------------------------------------- */
export type StackGroup = {
  title: string;
  note: string;
  items: readonly string[];
};

export const stackIntro = {
  eyebrow: "Capacidades",
  title: "Com o que trabalho.",
  lead: "Organizado por camadas, porque é assim que penso o software: do processo e dos dados até à rede que liga tudo.",
} as const;

export const stack: readonly StackGroup[] = [
  {
    title: "Core",
    note: "Linguagens com as quais construo, treino e resolvo problemas.",
    items: ["C", "C++", "JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Backend",
    note: "Experiência prática em desenvolvimento de serviços e APIs.",
    items: [
      "Node.js",
      "NestJS",
      "Express",
      "REST",
      "HTTP",
      "TypeORM",
      "PostgreSQL",
      "SQL",
      "WebSockets",
    ],
  },
  {
    title: "Web",
    note: "Interfaces e páginas responsivas, com integração com o backend.",
    items: ["React", "Tailwind CSS", "HTML", "CSS", "Bootstrap", "JavaScript"],
  },
  {
    title: "Dados",
    note: "Modelação, consultas e persistência.",
    items: ["PostgreSQL", "MySQL", "MariaDB", "SQL"],
  },
  {
    title: "Infraestrutura",
    note: "Ambientes Linux e serviços em containers.",
    items: ["Linux", "Docker", "Docker Compose", "Nginx", "Redis"],
  },
  {
    title: "Redes",
    note: "Formação prática em endereçamento, switching, routing e troubleshooting.",
    items: [
      "IPv4",
      "Subnetting",
      "TCP/IP",
      "OSI",
      "Routing",
      "Switching",
      "Fundamentos de Cisco",
      "Fundamentos de Windows Server",
    ],
  },
];

/* Honest separation: a course is contact, not professional experience. */
export const studying: readonly string[] = ["Zod", "Drizzle ORM", "Prisma"];

/* ---------------------------------------------------------------------------
   Backend, given the weight it deserves. Capabilities, then the stack behind
   them, each with a qualifier that never overstates.
   --------------------------------------------------------------------------- */
export const backend: readonly {
  capability: string;
  detail: string;
}[] = [
  {
    capability: "Criar APIs",
    detail: "Endpoints REST com controllers, services e DTOs.",
  },
  {
    capability: "Validar e persistir",
    detail: "Validação na entrada, persistência e relações entre entidades.",
  },
  {
    capability: "Arquitetura modular",
    detail: "Código organizado por módulos e responsabilidades.",
  },
  {
    capability: "Autenticação e autorização",
    detail: "Autenticação por JWT, hashing de senhas e protecção de rotas.",
  },
  {
    capability: "Tempo real",
    detail: "Comunicação WebSocket entre servidor e cliente.",
  },
  {
    capability: "Testes e documentação",
    detail: "Testes unitários e end-to-end, e documentação da API.",
  },
];

/* ---------------------------------------------------------------------------
   Networking. Origin first — briefly — then straight to what I can do.
   `qualifier` keeps the distinction the page must never blur:
   "pratiquei" vs "contacto/formação".
   --------------------------------------------------------------------------- */
export type NetworkingGroup = {
  title: string;
  qualifier: "praticado" | "formação";
  items: readonly string[];
};

export const networking = {
  eyebrow: "Networking",
  title: "Redes de computadores, a partir dos fundamentos.",
  lead: "A minha formação em redes começou com o NetPractice, na 42 Luanda, e foi aprofundada em formação prática de Redes de Computadores Corporativas na VIMAC.",
  pivot: "O que consigo fazer com essa base.",
  groups: [
    {
      title: "Endereçamento IPv4",
      qualifier: "praticado",
      items: [
        "Interpretar endereços IPv4",
        "Trabalhar com máscaras",
        "Identificar rede e hosts",
        "Calcular sub-redes",
        "Planear endereçamento para cenários simples",
      ],
    },
    {
      title: "Subnetting",
      qualifier: "praticado",
      items: [
        "Dividir redes",
        "Determinar ranges",
        "Identificar capacidade de hosts",
        "Analisar se um endereçamento atende a determinada necessidade",
      ],
    },
    {
      title: "Switching",
      qualifier: "praticado",
      items: [
        "Conceitos de switching",
        "VLANs",
        "Separação lógica de redes",
        "Comunicação através de switches Cisco",
      ],
    },
    {
      title: "Routing",
      qualifier: "praticado",
      items: [
        "Compreender routing",
        "Configurar cenários básicos",
        "Compreender comunicação entre redes",
        "Troubleshooting de conectividade",
      ],
    },
    {
      title: "Serviços de rede",
      qualifier: "formação",
      items: ["DHCP", "DNS", "Serviços Windows Server relacionados a redes"],
    },
    {
      title: "Windows Server",
      qualifier: "formação",
      items: [
        "Fundamentos de administração de serviços",
        "Active Directory Domain Services",
        "DNS",
        "DHCP",
        "File Server",
      ],
    },
    {
      title: "Troubleshooting",
      qualifier: "praticado",
      items: [
        "Interpretar sintomas de conectividade",
        "Verificar endereçamento",
        "Analisar comunicação",
        "Identificar problemas comuns de configuração",
        "Validar conectividade",
      ],
    },
  ],
  /* Progression, not a chronology: origin -> maturity -> application. */
  progression: [
    "42 Luanda",
    "NetPractice",
    "IP, subnetting e routing",
    "VIMAC — Redes Corporativas",
    "Cisco e Windows Server",
    "Sistemas e infraestrutura",
  ],
} as const;

/* ---------------------------------------------------------------------------
   42 Luanda. Status is current, not historical: still a cadet, ft_transcendence
   in development, one project plus one exam after it. The phases are my own
   thematic grouping of the projects I completed — 42's own orbit/rank numbering
   could not be verified against an official source, so no numbers are claimed.
   --------------------------------------------------------------------------- */
export type Phase = {
  label: string;
  title: string;
  projects: readonly string[];
  skills: readonly string[];
  enables: readonly string[];
  shift: string;
};

export const school42 = {
  eyebrow: "42 Luanda",
  title: "42 Luanda — uma formação construída em projetos.",
  lead: "Entrei em maio de 2025. A formação é baseada em projetos, avaliação por pares e resolução de problemas sem slides: cada etapa só avança quando o projeto funciona.",
  status: [
    { label: "Entrada", value: "Maio de 2025" },
    { label: "Posição", value: "Cadete" },
    { label: "Agora", value: "A desenvolver o ft_transcendence" },
    { label: "Depois", value: "1 projeto + 1 exame" },
  ],
  capacityNote:
    "A pergunta que interessa a cada fase não é o que fiz, mas que capacidade me deu.",
  phases: [
    {
      label: "Fase 1",
      title: "Fundamentos de C e sistemas",
      projects: ["Libft", "ft_printf", "get_next_line", "Born2beroot"],
      skills: [
        "C",
        "memória e pointers",
        "file descriptors",
        "Makefile",
        "GNU/Linux",
        "shell scripting",
      ],
      enables: [
        "Trabalhar de forma consciente com memória e recursos",
        "Compilar, automatizar e gerir um ambiente Linux",
      ],
      shift:
        "Deixei de tratar o computador como uma caixa-preta: cada programa passa a ter um custo, um limite e uma intenção.",
    },
    {
      label: "Fase 2",
      title: "Algoritmos, processos e comunicação",
      projects: [
        "push_swap",
        "so_long",
        "minitalk",
        "philosophers",
        "minishell",
      ],
      skills: [
        "algoritmos e complexidade",
        "estruturas de dados",
        "signals, pipes e file descriptors",
        "threads, mutexes e sincronização",
        "parsing e gestão de processos",
      ],
      enables: [
        "Decompor um problema e escolher a estrutura de dados certa",
        "Compreender execução concorrente e condições de acesso",
        "Escrever programas que comunicam entre si",
      ],
      shift:
        "Aprendi a medir antes de otimizar, e a ler código escrito por outras pessoas.",
    },
    {
      label: "Fase 3",
      title: "C++, gráficos e redes",
      projects: ["NetPractice", "cub3d", "ft_irc", "CPP00–CPP09"],
      skills: [
        "orientação a objetos",
        "templates e STL",
        "endereçamento IP e subnetting",
        "routing",
        "protocolos de comunicação",
      ],
      enables: [
        "Estruturar aplicações com OOP, templates e STL",
        "Calcular e interpretar endereçamento IPv4 e sub-redes",
        "Compreender como hosts e serviços comunicam entre si",
      ],
      shift:
        "Percebi que rede é, antes de mais, um problema de endereçamento — e só depois um problema de equipamento.",
    },
    {
      label: "Fase 4",
      title: "Web e infraestrutura",
      projects: ["Webserv", "Inception", "ft_transcendence — em desenvolvimento"],
      skills: [
        "HTTP e servidores web",
        "containers e Docker Compose",
        "Nginx",
        "MariaDB e WordPress",
        "Redis",
        "volumes, secrets e redes entre containers",
      ],
      enables: [
        "Construir e servir aplicações web",
        "Organizar vários serviços em containers",
        "Expor e comunicar serviços de forma controlada",
      ],
      shift:
        "Um serviço deixou de ser “algo que corre” para ser algo com dependências, rede e estado — e isso muda a forma de o desenhar.",
    },
  ] satisfies readonly Phase[],
  /* Flagged as the practical infrastructure evidence it is. */
  inception: {
    title: "Inception",
    status: "Concluído",
    grade: "120/100",
    summary:
      "Organizar um site WordPress com MariaDB, Nginx e Redis em containers separados, comunicando apenas através de uma rede interna.",
    stack: [
      "Docker",
      "Docker Compose",
      "Linux",
      "Nginx",
      "MariaDB",
      "WordPress",
      "Redis",
    ],
    detail: [
      "Cada serviço corre no seu próprio container, com imagem própria",
      "Comunicação exclusivamente por uma rede interna, com o Nginx a ser o único ponto de entrada em 443",
      "Volumes para persistir dados e secrets para guardar credenciais",
    ],
  },
} as const;

export type ExperienceDeliverable = { title: string; body: string };

export type Experience = {
  org: string;
  role: string;
  intro: string;
  deliverables: readonly ExperienceDeliverable[];
  responsibilities: readonly string[];
  stack: readonly string[];
  note?: { label: string; value: string };
};

/* Internship, not employment. Presented as evidence that the work reaches a real
   client context — no invented title, no invented duties. */
export const experience: readonly Experience[] = [
  {
    org: "Diamante & Sandson",
    role: "Estágio",
    intro:
      "Durante o estágio tive contacto com desenvolvimento de software em contexto real: um cliente, prazos e uma aplicação que tinha de funcionar.",
    deliverables: [
      {
        title: "Sistema de gestão",
        body: "Aplicação de gestão de restaurante e colaboradores, com modelação de dados e integração entre a aplicação e a base de dados.",
      },
      {
        title: "Website público",
        body: "Página de apresentação do negócio, com desenvolvimento web e integração com o backend.",
      },
    ],
    responsibilities: [
      "Desenvolvimento web",
      "Integração aplicação / base de dados",
      "Modelação de dados",
      "Implementação de funcionalidades",
      "Ambiente local de desenvolvimento",
    ],
    stack: ["PHP", "JavaScript", "HTML", "CSS", "Bootstrap", "MySQL"],
    note: { label: "Avaliação", value: "19 / 20" },
  },
];

export type Education = {
  org: string;
  course: string;
  period: string;
  body: string;
};

/* 42 has its own section now. What stays here is the technical course and the
   practical corporate-networks training, in that order of breadth. */
export const education: readonly Education[] = [
  {
    org: "Instituto Médio Politécnico Alda Lara / IPIAL",
    course: "Técnico Médio em Informática",
    period: "Concluído em 2025",
    body: "Formação técnica em informática, com contacto com programação, bases de dados, desenvolvimento de aplicações, sistemas e fundamentos de redes.",
  },
  {
    org: "VIMAC",
    course: "Redes de Computadores Corporativas",
    period: "Formação prática",
    body: "Formação prática em redes corporativas, onde contactei com endereçamento, subnetting, switching, routing e serviços Windows Server. É a base que sustenta a secção de redes deste portfólio.",
  },
];

/* Complementary study. No invented dates, grades or certificates. */
export const complementary: readonly string[] = [
  "Frontend Masters — Complete Intro to Node.js",
  "Frontend Masters — Hard Parts of Servers & Node.js",
  "Frontend Masters — API Design with Node.js",
  "Boot.dev — Python Basics",
  "Open English — Career Development",
];

export type Project = {
  name: string;
  href: string;
  category: string;
  summary: string;
  detail: readonly string[];
  stack: readonly string[];
  /* Set where the provenance matters, so the page never implies more than the
     repository actually is. */
  note?: string;
};

/* Every description below was read against the repository itself (README and
   source) rather than inferred from its name. */
export const projects: {
  primary: Project;
  secondary: readonly Project[];
} = {
  primary: {
    name: "nestjs-crud",
    href: "https://github.com/FlavioFj20/nestjs-crud",
    category: "Backend / NestJS",
    summary:
      "API REST em NestJS, organizada por módulos, com validação de entrada e persistência relacional.",
    detail: [
      "Módulo developers com controller, service e entity separados por responsabilidade.",
      "ValidationPipe global com transformação e whitelist, sobre DTOs validados com class-validator.",
      "Cinco endpoints REST — criar, listar, obter, atualizar e remover — com 404 explícito.",
      "Identificador gerado num hook @BeforeInsert, e testes unitários e end-to-end com Vitest e Supertest.",
    ],
    stack: [
      "NestJS",
      "TypeScript",
      "TypeORM",
      "SQLite",
      "class-validator",
      "Vitest",
      "Supertest",
    ],
  },
  secondary: [
    {
      name: "school-management-system",
      href: "https://github.com/FlavioFj20/school-management-system",
      category: "Sistemas de gestão / PHP + MySQL",
      summary:
        "Sistema de gestão escolar com controlo de acessos por perfil, matrículas, notas, frequência e emissão de relatórios.",
      detail: [
        "Login com verificação de senha, sessão e permissões por perfil (direção, coordenação, professores, secretaria, alunos).",
        "Modelação relacional com chaves estrangeiras entre utilizadores, cursos, turmas, disciplinas, matrículas, notas e frequência.",
        "Exportações administrativas e geração de relatórios a partir de consultas SQL.",
        "Upload de fotos de perfil e de documentos, com validação de tipo e tamanho.",
      ],
      stack: ["PHP", "MySQL", "SQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      note: "Projeto de curso — não é um sistema pronto para produção.",
    },
    {
      name: "restaurant-management-system",
      href: "https://github.com/FlavioFj20/restaurant-management-system",
      category: "Web / PHP + MySQL",
      summary:
        "Website público e páginas internas de gestão para um restaurante, com autenticação e acesso à base de dados.",
      detail: [
        "Autenticação em PHP, com fluxo de login e logout.",
        "Páginas internas — dashboard, utilizadores, menu e reservas — servidas a partir da mesma base de dados.",
        "Formulários ligados a scripts PHP que tratam o acesso à base de dados.",
      ],
      stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      note: "Desenvolvido durante o estágio na Diamante & Sandson.",
    },
    {
      name: "habit_tracking_application_api",
      href: "https://github.com/FlavioFj20/habit_tracking_application_api",
      category: "Design de APIs / Node.js",
      summary:
        "API de acompanhamento de hábitos, com autenticação, esquema validado e persistência em PostgreSQL.",
      detail: [
        "Rotas de utilizador, hábitos e registos, com resposta de erro previsível.",
        "Validação do input com Zod e autenticação por JWT.",
        "Persistência em PostgreSQL através de Drizzle ORM, com migrações versionadas.",
        "Testes de integração com Supertest.",
      ],
      stack: ["Node.js", "Express", "PostgreSQL", "Drizzle ORM", "Zod", "JWT"],
      note: "Acompanha a formação em Design de APIs com Node.js da Frontend Masters.",
    },
    {
      name: "github-activity",
      href: "https://github.com/FlavioFj20/github-activity",
      category: "CLI / Node.js + TypeScript",
      summary:
        "Ferramenta de linha de comandos que lê a atividade recente de um utilizador do GitHub e resume-a no terminal.",
      detail: [
        "Consome a API de eventos do GitHub e agrupa a atividade por repositório e por tipo de ação.",
        "Valida o nome de utilizador e os argumentos antes de fazer qualquer pedido.",
        "Saída em linguagem natural, um utilizador repositório por linha.",
        "Sem dependências de runtime: apenas Node.js nativo e o compilador TypeScript.",
      ],
      stack: ["TypeScript", "Node.js", "GitHub REST API", "CLI"],
    },
    {
      name: "intro_nodejs",
      href: "https://github.com/FlavioFj20/intro_nodejs",
      category: "Node.js / fundamentos",
      summary:
        "Gestor de notas em Node.js, com interface de linha de comandos e uma vista no navegador.",
      detail: [
        "A CLI cria, lista, pesquisa, remove e limpa notas; cada nota tem id, texto e tags.",
        "As notas são persistidas por um módulo de acesso a dados separado da lógica.",
        "Um servidor HTTP sem dependências serve uma vista das notas no navegador.",
      ],
      stack: ["Node.js", "JavaScript (ESM)", "yargs", "HTTP", "JSON", "CLI"],
    },
  ],
};

/* Two mid-page CTAs share this copy, so the offer reads the same everywhere
   before the closing contact section. */
export const cta = {
  title: "Tem um projeto?",
  body: "Estou disponível para projetos de desenvolvimento, colaboração e oportunidades profissionais.",
  action: "Fale comigo",
  scope:
    "Projetos dentro do âmbito acima. Para necessidades maiores, avaliamos primeiro o escopo.",
} as const;

export const contact = {
  eyebrow: "Contacto",
  title: "Tem um projeto, uma oportunidade ou precisa de alguém para desenvolver consigo?",
  body: "Estou disponível para projetos de desenvolvimento, colaboração e oportunidades profissionais. O WhatsApp é o canal mais direto.",
  cta: "Fale comigo",
  qrCaption: "Escaneie para abrir o WhatsApp com uma mensagem já preparada.",
} as const;