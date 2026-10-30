# JEESociety

Single-page landing site whose only job is getting JEE aspirants into the free
WhatsApp community.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Set the invite link

The WhatsApp invite is a single constant at the top of
[app/page.tsx](app/page.tsx):

```ts
const WA_LINK = "https://chat.whatsapp.com/HIKB1JmnfjJCkaDbZlGHRm";
```

Both CTA buttons read that constant — change it there if the invite is ever rotated.

## Brand

The palette is sampled from [public/logo.jpeg](public/logo.jpeg) — gold `#E8A021`
from the "JEE" letters and the arrow, cream `#FAF4E4` from "SOCIETY", crimson
`#7B1417` from the ground behind them. Tokens live in the `@theme` block of
[app/globals.css](app/globals.css).

The page runs light: warm paper `#FDF8EE` behind near-black ink `#1B0C0D`. Bright
gold carries fills, rules and the highlighter; `gold-deep` `#7A4B04` is the same
hue dropped far enough to clear 4.5:1 as text — including over the highlighter
wash, which is the tightest pair on the page — so gold text accents use that one.

WhatsApp green is deliberately the only cool colour on the page and appears
nowhere except the CTA, so the button stays the loudest element.

The hero shows the logo cropped to its wordmark band via `object-cover` with
`object-position: 50% 47%`; swapping in a different square logo keeps working,
a differently-proportioned one needs that crop retuned.

## Structure

- [app/page.tsx](app/page.tsx) — hero, the two offer cards, footer
- [components/JoinButton.tsx](components/JoinButton.tsx) — the WhatsApp CTA, used twice
- [app/globals.css](app/globals.css) — design tokens, paper grid, focus rings
