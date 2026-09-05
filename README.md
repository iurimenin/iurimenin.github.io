# iurimenin.github.io

Site pessoal do Iuri Menin. Astro, estático, bilíngue (EN/PT), tema escuro.

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera ./dist
npm run preview  # serve o ./dist
```

## Onde mexer

| O que | Onde |
|---|---|
| **Todo o texto do site (EN e PT)** | `src/data/content.ts` |
| Cores, fontes, espaçamento | `src/styles/global.css` (as variáveis no topo) |
| Estrutura das seções | `src/components/*.astro` |
| Ordem das seções | `src/pages/index.astro` e `src/pages/pt/index.astro` |

O `content.ts` é a única fonte de conteúdo — as duas línguas saem dele.
Se você adicionar um campo em `en`, o TypeScript vai exigir o mesmo em `pt`.
Isso é de propósito: evita o site ficar meio traduzido.

## Arquivos que faltam em `public/`

- `avatar.jpg` — sua foto, quadrada, ~600×600. Sem ela o hero mostra "IM".
- `cv.pdf` — o currículo. Sem ele o botão "Baixar CV" dá 404.
- `og.png` — imagem de preview no LinkedIn/WhatsApp/X, 1200×630.

## Publicar

1. `git push` na branch `master`.
2. Em **Settings → Pages → Build and deployment**, escolha **GitHub Actions**.

O passo 2 é obrigatório: antes dele o Pages ainda serve os arquivos da branch,
e o build do Actions é ignorado.

O workflow em `.github/workflows/deploy.yml` faz o build e publica a cada push
na `master`. O site fica em <https://iurimenin.github.io>.

### Domínio próprio

Se um dia usar domínio próprio, faça as três coisas — senão os links canônicos
apontam para o lugar errado:

1. `site:` em `astro.config.mjs`
2. `SITE.url` em `src/data/content.ts`
3. `public/robots.txt` (a linha do Sitemap)

E crie `public/CNAME` com o domínio dentro.
