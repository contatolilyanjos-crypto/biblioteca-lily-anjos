# Biblioteca Lily Anjos — Página de Vendas

Página de vendas da coleção "Guia do Decorador e Florista", com checkout via Hotmart.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/data/products.ts` — dados centralizados dos produtos, preços e links de checkout (Hotmart).
- `src/components/` — componentes reutilizáveis (cards, botões, seções).
- `src/app/page.tsx` — composição das 5 seções da página.
- `public/produtos/` — mockups dos volumes e da coleção completa.

## Build

```bash
npm run build
```

## Deploy

Projeto pronto para publicação na [Vercel](https://vercel.com/new) — apenas conecte o repositório.
