/* Single source of truth for every word and link on the page.
   Nothing here is invented: each entry was checked against the real repo,
   the real CV facts, or a live HTTP request. See AUDIT_AND_PLAN.md. */

export const profile = {
  name: "Flávio Garcia",
  role: "Software Developer",
  location: "Luanda, Angola",
  github: "https://github.com/FlavioFj20",
  linkedin: "https://ao.linkedin.com/in/fl%C3%A1vio-garcia-1b63aa368",
  /* Brief §16/17/34: the only public contact is this exact link. No phone
     number may appear in the markup, metadata or link hrefs. */
  whatsapp: "https://wa.link/f5vghle",
} as const;

export const positioning =
  "Desenvolvedor de software com formação técnica em informática e experiência prática em desenvolvimento web, backend, sistemas, bases de dados, Linux, Docker e redes de computadores.";

export type NavItem = { href: string; label: string };

export const navigation: readonly NavItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#formacao", label: "Formação" },
  { href: "#projetos", label: "Projetos" },
];

/* The areas the profile crosses. Used as the hero's short line. */
export const focusAreas: readonly string[] = [
  "Backend",
  "Web",
  "Bases de dados",
  "Linux & infraestrutura",
  "Redes",
];

export const about: readonly string[] = [
  "A minha formação começou na área técnica de informática e foi aprofundada num percurso intensivo e prático de programação. Hoje trabalho o software a partir de vários ângulos: desenvolvimento backend e web, bases de dados, Linux, infraestrutura e fundamentos de redes de computadores.",
  "Gosto de perceber o problema antes da solução e de construir com consciência do que acontece por baixo da abstração. Foi isso que me levou a trabalhar tanto com aplicações e APIs como com sistemas, containers, servidores e redes.",
  "Estou a consolidar a minha carreira como desenvolvedor e procuro oportunidades onde possa continuar a aprender, construir e contribuir.",
];

/* What I can do, not just what I installed. Each group carries a one-line
   description so the visitor understands the work behind the tool names. */
export type CapabilityGroup = {
  title: string;
  body: string;
  items: readonly string[];
};

export const capabilities: readonly CapabilityGroup[] = [
  {
    title: "Desenvolvimento",
    body: "Construção de aplicações web e serviços backend, com foco em organização, validação, persistência e APIs.",
    items: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP"],
  },
  {
    title: "Backend & APIs",
    body: "APIs REST com arquitetura modular: controllers, services, DTOs, validação e persistência.",
    items: ["Node.js", "NestJS", "Express", "TypeORM", "REST"],
  },
  {
    title: "Dados",
    body: "Modelação de dados, relações entre entidades e integração da base de dados com a aplicação.",
    items: ["SQL", "MySQL", "MariaDB", "MySQL Workbench"],
  },
  {
    title: "Sistemas & infraestrutura",
    body: "Ambientes Linux e serviços em containers, do ambiente local à organização de serviços.",
    items: ["Linux", "Docker", "Docker Compose", "Nginx", "Redis"],
  },
  {
    title: "Web",
    body: "Páginas responsivas, com estrutura semântica e integração entre frontend e backend.",
    items: ["HTML", "CSS", "Bootstrap", "JavaScript"],
  },
];

/* Two levels of programming are shown honestly and separately, per brief §5:
   the languages of the technical training, and the ones tied to application
   development. Neither list claims a proficiency level. */
export type ProgrammingTier = { title: string; note: string; items: readonly string[] };

export const programming: readonly ProgrammingTier[] = [
  {
    title: "Formação em programação",
    note: "Fundamentos, algoritmos e estruturas de dados praticados em projetos.",
    items: ["C", "C++", "Python"],
  },
  {
    title: "Desenvolvimento de aplicações",
    note: "Linguagens e ambientes usados na construção de aplicações e serviços.",
    items: ["JavaScript", "TypeScript", "PHP", "Node.js", "NestJS", "Express"],
  },
];

/* Brief §6: a full, weighted section — foundations and practice, never a
   claim of being a network engineer. */
export const networking = {
  eyebrow: "Networking & Systems",
  title: "Redes de computadores, a partir dos fundamentos.",
  lead: "Formação prática em fundamentos de redes, com laboratório Cisco e contacto com Windows Server. É uma base que complementa o desenvolvimento: ajuda-me a compreender como serviços, aplicações e servidores comunicam entre si.",
  groups: [
    {
      title: "Fundamentos",
      items: ["Modelo OSI", "Arquitetura TCP/IP", "Comunicação entre hosts"],
    },
    {
      title: "Endereçamento",
      items: ["IPv4", "Subnetting", "Cálculo de sub-redes", "Máscaras"],
    },
    {
      title: "Operação",
      items: ["Routing", "Switching", "Leitura de endereçamento IP", "Troubleshooting"],
    },
    {
      title: "Prática",
      items: ["Laboratórios Cisco", "Windows Server"],
    },
  ],
} as const;

export type ExperienceDeliverable = { title: string; body: string };

export type Experience = {
  org: string;
  role: string;
  period: string;
  intro: string;
  deliverables: readonly ExperienceDeliverable[];
  responsibilities: readonly string[];
  stack: readonly string[];
  note?: { label: string; value: string };
};

/* Internship, not employment. No invented title, no invented duties. */
export const experience: readonly Experience[] = [
  {
    org: "Diamante & Sandson",
    role: "Estágio",
    period: "",
    intro:
      "Experiência prática de desenvolvimento de software durante estágio, com participação na construção de um sistema de gestão para restaurante e colaboradores e de um website público para apresentação do negócio.",
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
    stack: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "PHP",
      "MySQL",
      "MySQL Workbench",
      "XAMPP",
      "VS Code",
    ],
    note: { label: "Avaliação", value: "19 / 20" },
  },
];

export type Education = {
  org: string;
  course: string;
  period: string;
  body: string;
};

/* Order is deliberate: the technical course is the broader base, and 42 sits
   within it. Brief §1/§8 — 42 must not read as the sole differentiator. */
export const education: readonly Education[] = [
  {
    org: "Instituto Médio Politécnico Alda Lara / IPIAL",
    course: "Técnico Médio em Informática",
    period: "Concluído em 2025",
    body: "Formação técnica em informática, com contacto com programação, bases de dados, desenvolvimento de aplicações, sistemas e fundamentos de redes.",
  },
  {
    org: "42 Luanda",
    course: "Cadete",
    period: "Desde maio de 2025",
    body: "Formação prática baseada em projetos, peer learning e resolução de problemas, com forte exposição a programação, sistemas, algoritmos, desenvolvimento de software e ambientes Linux.",
  },
];

/* Complementary study. No invented dates, grades or certificates. */
export const complementary: readonly string[] = [
  "VIMAC — Corporate Networks",
  "Open English — Career Development",
  "Boot.dev — Python Basics",
  "Frontend Masters — Complete Intro to Node.js",
  "Frontend Masters — Hard Parts of Servers & Node.js",
];

export type Project = {
  name: string;
  href: string;
  category: string;
  summary: string;
  detail: readonly string[];
  stack: readonly string[];
};

/* Descriptions checked against each repository's actual source on 2026-10-03. */
export const projects: {
  primary: Project;
  secondary: readonly Project[];
} = {
  primary: {
    name: "intro_nodejs",
    href: "https://github.com/FlavioFj20/intro_nodejs",
    category: "Backend / Node.js",
    summary:
      "Gestor de notas em Node.js, com interface de linha de comandos e uma vista no navegador.",
    detail: [
      "A CLI (yargs) cria, lista, pesquisa, remove e limpa notas; cada nota tem id, texto e tags.",
      "As notas são persistidas em bd.json por um módulo de acesso a dados separado.",
      "Um servidor HTTP sem dependências serve uma vista das notas no navegador.",
    ],
    stack: ["Node.js", "JavaScript (ESM)", "yargs", "HTTP", "JSON", "CLI"],
  },
  secondary: [
    {
      name: "calculator_with_history",
      href: "https://github.com/FlavioFj20/calculator_with_history",
      category: "Frontend / JavaScript",
      summary:
        "Calculadora em HTML, CSS e JavaScript, sem bibliotecas, com histórico de operações.",
      detail: [
        "Operadores + − × ÷ %, limpar e apagar o último carácter.",
        "Histórico de cálculos construído com manipulação do DOM.",
        "Layout responsivo com Flexbox, Grid e unidades relativas.",
      ],
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "pagina_de_receita",
      href: "https://github.com/FlavioFj20/pagina_de_receita",
      category: "Web Fundamentals",
      summary: "Página estática de receita, em HTML e CSS, com secções semânticas.",
      detail: [
        "Secções de descrição, ingredientes e modo de preparo.",
        "Tipografia serifada e imagem de destaque.",
      ],
      stack: ["HTML", "CSS"],
    },
  ],
};

/* Brief §11: show the breadth of the project-based training without exposing
   private repositories or protected code. No links, just areas. */
export const academic = {
  title: "Aprendizagem por projetos",
  lead: "Boa parte da minha formação foi construída em projetos práticos, muitos deles sem código público. Abaixo ficam as áreas que pratiquei — sem expor repositórios privados.",
  areas: [
    "C",
    "C++",
    "Linux",
    "Algoritmos",
    "Estruturas de dados",
    "Redes",
    "Docker",
    "Programação de sistemas",
    "Desenvolvimento web",
  ],
} as const;

export const contact = {
  title: "Tem uma ideia, um sistema para construir ou uma oportunidade para conversar?",
  body: "Estou aberto a projetos, colaboração e oportunidades onde possa contribuir e continuar a evoluir. O WhatsApp é o canal mais direto.",
  cta: "Fale comigo",
  qrCaption: "Escaneie para falar comigo no WhatsApp.",
} as const;
