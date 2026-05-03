# Design System And Reference Style

Last updated: 03-05-2026

## Visual direction

Build a premium enterprise consulting website with:

- blue and white corporate base
- controlled blue gradient accents
- simple, clear, trust-first B2B structure
- Rimini Street quality benchmark
- Salesforce / IBM clarity and whitespace
- Kissflow-style gradient polish used carefully

## Reference interpretation

### Rimini Street

Use as reference for:

- strong enterprise hero sections
- trust/proof flow
- large confident messaging
- repeated CTAs
- client logos/testimonials/proof blocks
- resource/article preview sections
- strong footer architecture

Do not copy Rimini layout, copy, images, icons, or proprietary design assets.

### Salesforce / IBM

Use as reference for:

- clean information hierarchy
- readable large typography
- whitespace
- clear navigation
- simple enterprise confidence
- restrained UI blocks

### Kissflow

Use as reference for:

- controlled gradient text or accent usage
- modern but clean color transitions
- bright blue call-to-action accents

Do not make the full site colorful or playful like a SaaS product page. Lednexora must remain consulting/professional.

## Font rule

Do not use Proxima Nova directly. Rimini Street uses Proxima Nova, but it is a commercial licensed font.

Use a free, deployment-safe font that resembles the Rimini / Proxima Nova enterprise feel:

- Primary: Source Sans 3
- Fallback: Inter
- Final fallback: Arial, sans-serif

CSS example:

```css
font-family: "Source Sans 3", Inter, Arial, sans-serif;
```

IBM remains a reference for layout clarity and enterprise whitespace, not the primary implementation font.

## Color direction

Use these as starting tokens. Adjust slightly only if brand assets require it.

```css
--color-primary: #123A74;
--color-secondary: #1F4E79;
--color-accent: #0F5DB8;
--color-blue-bright: #0878D8;
--color-blue-soft: #EAF4FF;
--color-white: #FFFFFF;
--color-text: #172033;
--color-muted: #5A6B7F;
--color-border: #D8E2EC;
--gradient-primary: linear-gradient(135deg, #0F5DB8 0%, #0EA5E9 52%, #123A74 100%);
--gradient-soft: linear-gradient(135deg, #F8FCFF 0%, #EAF4FF 100%);
```

## Visual rules

Do:

- use clear blue/white foundation
- use gradient in hero, CTA bands, selected badges, and highlight areas
- keep typography readable and calm
- use strong section rhythm
- use real business imagery or refined abstract business visuals
- keep nav and footer clean and professional
- make the site feel UK/international consulting-friendly

Do not:

- use paid fonts without license
- use a dark cyber/AI startup look
- overuse gradients everywhere
- use purple-heavy default AI palette
- use random stock images without business relevance
- make all pages card-heavy
- make the website look like a generic template

## Component style

- Header: clean white header with blue CTA and dropdowns.
- Hero: large, confident, image/gradient-enhanced, not text inside a card.
- Buttons: blue primary, white/outline secondary.
- Cards: simple, light border, subtle shadow only when useful.
- CTAs: repeated but not noisy.
- Footer: enterprise-style multi-column footer with contact, services, SAP, Zoho, legal, and social links.

