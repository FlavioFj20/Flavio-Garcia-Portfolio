# Portfólio — Flávio Garcia

Portefólio pessoal de [Flávio Garcia](https://github.com/FlavioFj20), Software
Developer em Luanda. Página única, estática, que apresenta o perfil a clientes,
parceiros e recrutadores: desenvolvimento web e backend, bases de dados,
sistemas, infraestrutura e fundamentos de redes.

**Live:** [https://flavio-portfolio.vercel.app](https://flavio-portfolio.vercel.app)

---

## Stack

| Camada    | Tecnologia                                        |
| --------- | ------------------------------------------------- |
| Framework | Next.js 16 (App Router)                           |
| Linguagem | TypeScript                                        |
| Styling   | Tailwind CSS 4 (tokens semânticos em `@theme`)    |
| Ícones    | SVG próprios (sem bibliotecas de ícones)          |
| Fontes    | `next/font` (Spectral + IBM Plex Sans)            |
| Tema      | Light + dark, tokens CSS, sem flash (`next/script`) |

Sem dependências de UI, sem cliente HTTP, sem bibliotecas de animação. O
movimento usa CSS — entrada orquestrada no hero, microinterações e
scroll-driven reveals (`animation-timeline: view()`), incluindo títulos cujas
palavras partem dos cantos da vista e convergem para o seu lugar à medida que cada
secção entra no ecrã, sempre com degradação segura e respeito
por `prefers-reduced-motion`.

## Como executar localmente

Requisitos: Node.js 20+ e npm.

```bash
npm install
npm run dev
```

Abre em <http://localhost:3000>.

### Scripts

| Comando         | Descrição                   |
| --------------- | --------------------------- |
| `npm run dev`   | Servidor de desenvolvimento |
| `npm run build` | Build de produção           |
| `npm run start` | Serve o build de produção   |
| `npm run lint`  | ESLint (`eslint-config-next`) |

### Variáveis de ambiente

Copia `.env.example` para `.env.local` e ajusta o domínio final:

```bash
NEXT_PUBLIC_SITE_URL=https://o-dominio-real.com
```

É usada em `metadataBase` (Open Graph, canonical), `robots.txt` e
`sitemap.xml`. Sem esta variável o site assume `http://localhost:3000`.

## Estrutura

```
src/
├── app/
│   ├── layout.tsx            # metadata, fontes, script de tema, header/footer
│   ├── page.tsx              # composição das secções
│   ├── globals.css           # tokens light/dark, base, componentes, motion
│   ├── icon.svg              # favicon (claro/escuro)
│   ├── opengraph-image.tsx   # imagem Open Graph (1200×630, gerada)
│   ├── robots.ts
│   └── sitemap.ts
├── components/
│   ├── hero.tsx  about.tsx  capabilities.tsx  networking.tsx
│   ├── experience.tsx  education.tsx  projects.tsx  contact.tsx
│   ├── site-header.tsx  site-footer.tsx
│   ├── theme-toggle.tsx                       # alternância de tema, client
│   ├── reveal-text.tsx                        # título revelado por palavra
│   └── icons.tsx
├── assets/
│   ├── light.jpeg                             # fotografia (tema claro)
│   ├── dark.jpeg                              # fotografia (tema escuro)
│   └── whatsapp-qr.png                        # QR de contacto (mensagem pré-preenchida)
└── lib/
    └── data.ts             # todo o conteúdo: perfil, secções, projetos
```

Todo o conteúdo textual vive em `src/lib/data.ts`, por isso editar textos ou
trocar links não exige mexer nos componentes. Os únicos client components são
`site-header.tsx` (menu móvel + secção ativa) e `theme-toggle.tsx`.

## Secções

Hero · Sobre · Capacidades · Networking & Systems · Experiência · Formação ·
Projetos · Contacto · Footer

## Tema light / dark

- Tokens semânticos (`paper`, `surface`, `ink`, `rule`, `accent`, `band`) com
  valores distintos por tema — não é uma inversão de cores.
- A escolha persiste em `localStorage` e, na primeira visita, segue
  `prefers-color-scheme`.
- Um script inline (`beforeInteractive`) resolve o tema antes da primeira
  pintura, evitando flash.

## Contacto

O contacto principal é o WhatsApp, via click-to-chat para o número
`+244 953 700 636`, já com uma mensagem pré-preenchida definida em
`src/lib/data.ts`. O mesmo link é codificado no QR (`src/assets/whatsapp-qr.png`).
Ao alterar a mensagem, regenera o QR:

```bash
npx qrcode -o src/assets/whatsapp-qr.png -w 600 -q 4 -e Q \
  "https://wa.me/244953700636?text=<mensagem-url-encoded>"
```

## Deploy na Vercel

Next.js puro; não é necessária configuração adicional. Duas opções:

**Pela CLI**

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # produção
```

Define `NEXT_PUBLIC_SITE_URL` para o domínio atribuído.

**Pela interface**

1. Importa o repositório em <https://vercel.com/new>.
2. O framework é detetado automaticamente.
3. Adiciona a variável de ambiente `NEXT_PUBLIC_SITE_URL`.
4. Faz deploy.

## Repositórios apresentados

- [intro_nodejs](https://github.com/FlavioFj20/intro_nodejs)
- [calculator_with_history](https://github.com/FlavioFj20/calculator_with_history)
- [pagina_de_receita](https://github.com/FlavioFj20/pagina_de_receita)

## Licença

MIT
