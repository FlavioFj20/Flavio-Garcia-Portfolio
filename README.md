# Portefólio — Flávio Garcia

Portefólio pessoal de [Flávio Garcia](https://github.com/FlavioFj20), finalista da
42 Luanda e desenvolvedor de software. Landing page de página única, estática,
construída para apresentar o perfil a clientes, parceiros e recrutadores em
segundos.

**Live:** [https://flavio-portfolio.vercel.app](https://flavio-portfolio.vercel.app)

---

## Stack

| Camada        | Tecnologia                                  |
| ------------- | ------------------------------------------- |
| Framework     | Next.js 16 (App Router)                     |
| Linguagem     | TypeScript                                  |
| Styling       | Tailwind CSS 4                              |
| Ícones        | SVG próprios (sem bibliotecas de ícones)   |
| Fontes        | `next/font` (Geist, Geist Mono, Instrument Sans) |
| Animações     | CSS + `IntersectionObserver` (sem bibliotecas) |

Sem dependências de UI, sem cliente HTTP, sem carrossel. Nenhuma biblioteca
extra foi adicionada para além do que o Next.js e o Tailwind já exigem.

## Como executar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Abre em <http://localhost:3000>.

### Scripts

| Comando           | Descrição                                  |
| ----------------- | ------------------------------------------ |
| `npm run dev`     | Servidor de desenvolvimento                |
| `npm run build`   | Build de produção                          |
| `npm run start`   | Serve o build de produção                  |
| `npm run lint`    | ESLint (`eslint-config-next`)              |

### Variáveis de ambiente

Copia `.env.example` para `.env.local` e ajusta o domínio final:

```bash
NEXT_PUBLIC_SITE_URL=https://o-dominio-real.com
```

É usada em `metadataBase` (Open Graph, canonical), `robots.txt` e
`sitemap.xml`. Sem esta variável o site assume
`https://flavio-portfolio.vercel.app`.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            # metadata, fontes, header/footer, skip link
│   ├── page.tsx              # composição das secções
│   ├── globals.css           # design tokens, base, animação de reveal
│   ├── icon.svg              # favicon
│   ├── opengraph-image.tsx   # imagem Open Graph (1200×630, gerada)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── about.tsx  academic.tsx  contact.tsx  hero.tsx
│   ├── projects.tsx  skills.tsx
│   ├── site-header.tsx  site-footer.tsx        # header é client (menu móvel)
│   ├── reveal-observer.tsx                     # scroll reveal, client
│   ├── buttons.tsx  icons.tsx  section-heading.tsx  social-links.tsx
└── lib/
    └── data.ts             # todo o conteúdo: perfil, projetos, competências
```

Todo o conteúdo textual vive em `src/lib/data.ts`, por isso editar textos ou
trocar links não exige mexer nos componentes.

## Secções

Hero · Sobre · Competências · Projetos · 42 Luanda · Contacto · Footer

## Decisões técnicas

- **Estático por padrão.** Todas as rotas são pré-renderizadas (`○` no output
  do build); não há server components assíncronos nem chamadas de rede em
  runtime.
- **Sem imagens pesadas.** Nenhum bitmap no repositório: o mockup do projeto em
  destaque é construído com ícones SVG próprios e a imagem Open Graph é gerada
  em build por `next/og`.
- **Scroll reveal com degradação segura.** Os elementos com `data-reveal`
  começam invisíveis e são revelados por `IntersectionObserver`. Se o JS não
  carregar, ou se `prefers-reduced-motion: reduce` estiver ativo, ficam
  visíveis — o conteúdo nunca fica preso atrás de uma animação.
- **Alinhamento com o cabeçalho fixo.** As secções usam `scroll-margin-top`, o
  que evita que o título fique escondido atrás da navegação ao usar links
  internos.
- **Acessibilidade.** Landmarks semânticos, ordem de headings coerente, foco
  visível em todos os elementos interativos, contraste mínimo verificado de
  7.5:1 e alvos de toque de 36–40 px.

## Deploy na Vercel

O projeto usa Next.js puro, por isso não é necessária qualquer configuração
adicional. Duas opções:

**Pela CLI**

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # produção
```

Na primeira execução, define `NEXT_PUBLIC_SITE_URL` para o domínio atribuído.

**Pela interface**

1. Importa o repositório em <https://vercel.com/new>.
2. O framework é detetado automaticamente; não mexas no Build Command
   (`npm run build`) nem no Output Directory.
3. Adiciona a variável de ambiente `NEXT_PUBLIC_SITE_URL`.
4. Faz deploy.

## Repositórios apresentados

- [pagina_de_receita](https://github.com/FlavioFj20/pagina_de_receita)
- [calculator_with_history](https://github.com/FlavioFj20/calculator_with_history)
- [intro_nodejs](https://github.com/FlavioFj20/intro_nodejs)

## Licença

MIT