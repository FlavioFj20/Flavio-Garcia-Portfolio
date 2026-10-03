/* Single source of truth for every word and link on the page.
   Nothing here is invented: each entry was checked against the real repo,
   the real CV facts, or a live HTTP request. See AUDIT_AND_PLAN.md. */

export const profile = {
  name: "Flávio Garcia",
  role: "Software Developer",
  location: "Luanda, Angola",
  github: "https://github.com/FlavioFj20",
  linkedin: "https://ao.linkedin.com/in/fl%C3%A1vio-garcia-1b63aa368",
  /* Verified by decoding the shipped QR image and by resolving the redirect:
     wa.link/f5vghl opens a chat. (The variant with a trailing "e" is a dead
     "oops wrong link" page — do not reintroduce it.) */
  whatsapp: "https://wa.link/f5vghl",
} as const;

export type NavItem = { href: string; label: string };

export const navigation: readonly NavItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contacto", label: "Contacto" },
];

/* Short factual line used in the hero. Plain sentence in the markup; this is
   just the noun list. */
export const positioning: readonly string[] = [
  "backend",
  "Linux e Docker",
  "bases de dados",
];

export const about: readonly string[] = [
  "Sou Cadete da 42 Luanda e Técnico Médio de Informática pelo Instituto Médio Politécnico Alda Lara. A minha formação combina programação, desenvolvimento web, bases de dados, sistemas e fundamentos de redes de computadores.",
  "Ao longo da formação tenho trabalhado em projetos práticos com diferentes linguagens e ambientes, o que me deu a capacidade de analisar problemas, construir soluções e aprender novas tecnologias de forma autónoma.",
];

export type CapabilityGroup = {
  title: string;
  items: readonly string[];
};

/* Grouped, not a logo wall. No levels, no percentages, no "expert". */
export const capabilities: readonly CapabilityGroup[] = [
  { title: "Programação", items: ["C", "C++", "JavaScript", "TypeScript", "Python", "PHP"] },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express", "REST APIs", "TypeORM", "Validação por DTO"],
  },
  { title: "Web", items: ["HTML", "CSS", "Bootstrap", "JavaScript"] },
  { title: "Bases de dados", items: ["MySQL", "MariaDB", "SQL", "Modelação de dados"] },
  { title: "Sistemas e infra-estrutura", items: ["Linux", "Docker", "Docker Compose", "Nginx", "Redis"] },
  { title: "Ferramentas", items: ["Git", "GitHub", "VS Code", "MySQL Workbench", "XAMPP"] },
];

/* Brief §9: networking gets a real, visible presence — as foundations, never
   as a claim of being a network engineer. */
export const networking = {
  title: "Fundamentos de redes",
  lead: "Base de redes de computadores, com prática de laboratório em Cisco.",
  items: [
    "TCP/IP",
    "Modelo OSI",
    "Subnetting",
    "Endereçamento IP",
    "Troubleshooting",
    "Prática de laboratório em Cisco",
    "Windows Server",
  ],
} as const;

export type Experience = {
  org: string;
  role: string;
  period: string;
  body: readonly string[];
  stack: readonly string[];
  note?: { label: string; value: string };
};

/* Internship, not employment. No invented title, no invented duties. */
export const experience: readonly Experience[] = [
  {
    org: "Diamante & Sandson",
    role: "Estágio",
    period: "",
    body: [
      "Participei no desenvolvimento de um sistema de gestão para restaurante e colaboradores e de um website público para apresentação do negócio.",
      "Trabalhei na modelação da base de dados e na integração entre a aplicação e a base de dados.",
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
   within it. Brief §30 — 42 must not read as the sole differentiator. */
export const education: readonly Education[] = [
  {
    org: "Instituto Médio Politécnico Alda Lara",
    course: "Técnico Médio em Informática",
    period: "Concluído em 2025",
    body: "Formação técnica em informática, programação, bases de dados, sistemas e desenvolvimento de aplicações.",
  },
  {
    org: "42 Luanda",
    course: "Cadete",
    period: "Desde maio de 2025",
    body: "Formação prática baseada em projetos, peer learning e resolução de problemas, com foco em programação, sistemas, algoritmos e desenvolvimento de software.",
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
    summary: "Gestor de notas em Node.js, com interface de linha de comandos e leitura no navegador.",
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
      summary: "Calculadora em HTML, CSS e JavaScript, sem bibliotecas, com histórico de operações.",
      detail: [
        "Operadores + − × ÷ %, limpar e apagar o último carácter.",
        "Histórico de cálculos construído com manipulação do DOM.",
        "Layout responsivo com Flexbox, Grid, clamp() e unidades relativas.",
      ],
      stack: ["HTML", "CSS", "JavaScript"],
    },
    {
      name: "pagina_de_receita",
      href: "https://github.com/FlavioFj20/pagina_de_receita",
      summary: "Página estática de receita, em HTML e CSS, com secções semânticas.",
      detail: [
        "Secções de descrição, ingredientes e modo de preparo.",
        "Tipografia serifada e imagem de destaque.",
      ],
      stack: ["HTML", "CSS"],
    },
  ],
};