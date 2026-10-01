export const profile = {
  name: "Flávio Garcia",
  initials: "FG",
  role: "Software Engineering Student & Developer",
  location: "Luanda, Angola",
  github: "https://github.com/FlavioFj20",
  linkedin:
    "https://ao.linkedin.com/in/fl%C3%A1vio-garcia-1b63aa368",
} as const;

export type NavItem = { href: string; label: string };

export const navigation: NavItem[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#competencias", label: "Competências" },
  { href: "#projetos", label: "Projetos" },
  { href: "#academia", label: "42 Luanda" },
  { href: "#contacto", label: "Contacto" },
];

export const socialLinks = [
  { href: profile.github, label: "GitHub" },
  { href: profile.linkedin, label: "LinkedIn" },
] as const;

export type Project = {
  name: string;
  href: string;
  category: string;
  description: string;
  technologies?: readonly string[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Intro Node.js",
    href: "https://github.com/FlavioFj20/intro_nodejs",
    category: "Backend / Node.js",
    description:
      "Projeto de aprendizagem em Node.js que combina uma CLI para gestão de notas com uma interface web simples, trabalhando manipulação de ficheiros, persistência local, servidor HTTP e organização modular.",
    technologies: ["Node.js", "JavaScript", "CLI", "HTTP", "JSON"],
    featured: true,
  },
  {
    name: "Calculator with History",
    href: "https://github.com/FlavioFj20/calculator_with_history",
    category: "Frontend Development",
    description:
      "Calculadora desenvolvida com HTML, CSS e JavaScript, incluindo histórico de operações e interface responsiva.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    name: "Página de Receita",
    href: "https://github.com/FlavioFj20/pagina_de_receita",
    category: "Web Development",
    description:
      "Projeto web focado na construção de uma página de apresentação de receita, trabalhando estrutura semântica, organização visual e desenvolvimento de interface.",
  },
];

export type SkillGroup = {
  title: string;
  level: "Working with" | "Experience with" | "Familiar with";
  note: string;
  items: readonly string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    level: "Working with",
    note: "Uso diário em exercícios, projetos de avaliação e projetos pessoais.",
    items: ["C", "C++", "JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Backend / Web",
    level: "Experience with",
    note: "Aplicado em projetos de frontend e backend, incluindo Node.js.",
    items: ["Node.js", "NestJS", "REST APIs", "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Tools / Infrastructure",
    level: "Familiar with",
    note: "Utilizados para versionamento, ambiente de trabalho e estrutura de serviços.",
    items: ["Git", "GitHub", "Linux", "Docker", "Docker Compose", "MySQL / MariaDB"],
  },
];

export const academicTopics: readonly string[] = [
  "C e C++",
  "Linux",
  "Programação de baixo nível",
  "Algoritmos",
  "Estruturas de dados",
  "Debugging",
  "Redes",
  "Docker",
  "Desenvolvimento de sistemas",
];

export const facts: readonly { label: string; value: string }[] = [
  { label: "Formação", value: "42 Luanda — Finalista" },
  { label: "Foco atual", value: "Backend & Web" },
  { label: "Modelo", value: "Aprendizagem prática, peer-to-peer" },
  { label: "Base", value: "Luanda, Angola" },
];