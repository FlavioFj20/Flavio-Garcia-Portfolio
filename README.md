# Portfólio — Flávio Garcia

Portefólio pessoal de [Flávio Garcia](https://github.com/FlavioFj20), Software
Developer em Luanda. Página única, estática, que apresenta o perfil a clientes,
parceiros e recrutadores: desenvolvimento web e backend, bases de dados,
sistemas, infraestrutura e fundamentos de redes.

**Live:** [https://flaviogarcia-portfolio.vercel.app](https://flaviogarcia-portfolio.vercel.app)

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
movimento usa CSS — microinterações e uma montagem de texto em que cada palavra
começa deslocada para um canto (ou para o lado que a secção escolheu) e converge
para a sua posição. O scroll **dispara** a animação mas não a controla: depois de
disparada, corre no seu próprio tempo, por isso um scroll rápido ou lento produz
exatamente o mesmo resultado. No hero as palavras vêm espalhadas pelos quatro
cantos; abaixo, cada secção entra por um lado fixo que alterna (esquerda, direita,
esquerda, direita) para o efeito ser uma decisão de design e não ruído. Duração de
780 ms por palavra com stagger de 70 ms, ou seja, nunca mais do que ~1 s por
bloco. O movimento é reversível: o texto junta-se ao entrar no ecrã e separa-se
ao sair, repetindo a cada passagem, tanto a descer como a subir. Por isso é feito
com transições e não com keyframes — assim pode ser interrompido a meio e
invertido sem salto. A entrada demora 780 ms escalonada; a saída demora 420 ms sem
atraso, para o bloco desfazer num gesto limpo. Sem JavaScript, ou com
`prefers-reduced-motion`, nada fica oculto e o texto aparece simplesmente como
texto.

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
NEXT_PUBLIC_SITE_URL=https://flaviogarcia-portfolio.vercel.app
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
│   ├── robots.ts             # robots.txt gerado em build
│   └── sitemap.ts            # sitemap.xml gerado em build
├── components/
│   ├── hero.tsx  about.tsx  services.tsx  capabilities.tsx
│   ├── networking.tsx  school-42.tsx  experience.tsx
│   ├── education.tsx  projects.tsx  contact.tsx
│   ├── site-header.tsx  site-footer.tsx
│   ├── theme-toggle.tsx                       # alternância de tema, client
│   ├── reveal-text.tsx                        # montagem palavra a palavra
│   ├── reveal.tsx                             # montagem por bloco
│   ├── reveal-observer.tsx                    # o único gatilho, client
│   └── icons.tsx
├── assets/
│   └── whatsapp-qr.png                        # QR de contacto (mensagem pré-preenchida)
└── lib/
    ├── data.ts             # todo o conteúdo: perfil, secções, projetos
    ├── motion.ts           # tempos e direções da montagem de texto
    └── site-url.ts         # URL pública do site (canonical, og, robots, sitemap)
```

Todo o conteúdo textual vive em `src/lib/data.ts`, por isso editar textos ou
trocar links não exige mexer nos componentes. Os únicos client components são
`site-header.tsx` (menu móvel + secção ativa), `theme-toggle.tsx` e
`reveal-observer.tsx` — este último não anima nada por si, apenas alterna a classe
`is-in` de cada elemento conforme ele está ou não no ecrã; o movimento é todo CSS.

## Secções

Hero · Sobre · Serviços · Capacidades · Networking & Systems · 42 Luanda ·
Experiência · Formação · Projetos · Contacto · Footer

Os âncoras seguem os mesmos ids: `#topo`, `#sobre`, `#servicos`, `#capacidades`,
`#redes`, `#escola-42`, `#experiencia`, `#formacao`, `#projetos`, `#contacto`.
(`#escola-42` e não `#42` porque um identificador CSS não pode começar por um
dígito — `#42` funciona para o browser mas é um selector inválido.)

## Tema light / dark

- Tokens semânticos (`paper`, `surface`, `ink`, `rule`, `accent`, `band`) com
  valores distintos por tema — não é uma inversão de cores.
- A escolha persiste em `localStorage` e, na primeira visita, segue
  `prefers-color-scheme`.
- Um script inline (`beforeInteractive`) resolve o tema antes da primeira
  pintura, evitando flash.

## Contacto

O contacto principal é o WhatsApp, via click-to-chat para um short link
(`wa.link/f5vghl`), já com uma mensagem pré-preenchida definida em
`src/lib/data.ts`. O mesmo link é codificado no QR
(`src/assets/whatsapp-qr.png`).

O número de telefone não aparece em lado nenhum: nem no HTML, nem nos metadados,
nem no repositório. O QR e os botões usam sempre o short link.

Ao alterar a mensagem, regenera o QR com o link completo já codificado
(o mesmo valor de `profile.whatsapp`):

```bash
npx qrcode -o src/assets/whatsapp-qr.png -w 600 -q 4 -e Q \
  "https://wa.link/f5vghl?text=<mensagem-url-encoded>"
```

## Deploy na Vercel

Next.js puro; não é necessária configuração adicional. Duas opções:

**Pela CLI**

```bash
npm i -g vercel
vercel            # preview
vercel --prod     # produção
```

`NEXT_PUBLIC_SITE_URL` é opcional: sem ela o build usa o domínio de produção
que a Vercel injeta. Define-a para um domínio próprio.

**Pela interface**

1. Importa o repositório em <https://vercel.com/new>.
2. O framework é detetado automaticamente.
3. (Opcional) Adiciona `NEXT_PUBLIC_SITE_URL` se usares um domínio próprio.
4. Faz deploy.

## Repositórios apresentados

- [nestjs-crud](https://github.com/FlavioFj20/nestjs-crud)
- [school-management-system](https://github.com/FlavioFj20/school-management-system)
- [restaurant-management-system](https://github.com/FlavioFj20/restaurant-management-system)
- [habit_tracking_application_api](https://github.com/FlavioFj20/habit_tracking_application_api)
- [github-activity](https://github.com/FlavioFj20/github-activity)
- [intro_nodejs](https://github.com/FlavioFj20/intro_nodejs)

## Licença

MIT
