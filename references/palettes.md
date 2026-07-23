# Curated palette system

Read this file only when the user explicitly requests color, supplies a brand palette, or asks for a non-Mono art direction. Otherwise use `mono-paper`.

## Selection

| Palette | Character | Best for |
|---|---|---|
| `mono-paper` | Neutral, editorial, restrained | Research, annual reports, general use |
| `porcelain-blue` | Precise, institutional, calm | Finance, technology, policy |
| `forest-linen` | Organic, considered, humane | Sustainability, culture, wellbeing |
| `oxblood-parchment` | Literary, archival, dramatic | History, luxury, long-form stories |
| `midnight-bronze` | Cinematic, premium, nocturnal | Keynotes, launches, hero charts |

## Usage

Inline `palette-tokens.js` after `mono-tokens.js`, then select one palette near the top of the rendering script:

```js
const PALETTE_NAME = 'porcelain-blue';
const P = LIEFLAT_PALETTES.apply(PALETTE_NAME);
```

Map roles rather than replacing colors mechanically:

- Page and card background → `P.bg` / `P.surface`
- Primary text and most important series → `P.ink`
- Secondary labels → `P.muted`
- Sources and quiet annotations → `P.faint`
- Guides and hairlines → `P.grid`
- One focal series or exception → `P.accent`
- Ordered multi-series data → `P.ladder`
- Dark card → `P.dark`

## Hard rules

1. Keep `mono-paper` as the default. Never infer a colored palette merely from the topic.
2. Use one palette per page. Do not mix palettes across cards.
3. Reserve `accent` for one focal series, exception, or annotation. Keep it below roughly 15% of data marks.
4. Encode categories with position, shape, labels, or the ordered ladder before adding more hues.
5. Do not add gradients, glow, glass effects, neon colors, or rainbow categorical schemes.
6. Preserve luminance hierarchy: the most important mark must retain the strongest contrast.
7. When the user supplies brand colors, translate them into these roles and verify contrast; do not paste the brand palette directly into every series.
