/* Curated palettes for Lieflat Charts. Mono Paper remains the default. */
(function (global) {
  'use strict';
  const PALETTES = Object.freeze({
    'mono-paper': {
      label: 'Mono Paper', mode: 'light',
      bg: '#F0EFEB', surface: '#F0EFEB', ink: '#1C1C1A',
      muted: '#6A6963', faint: '#8F8E88', grid: '#DEDDD6', accent: '#1C1C1A',
      ladder: ['#1C1C1A', '#4A4944', '#6A6963', '#8F8E88', '#B0AFA9', '#C6C5BF', '#D8D7D1'],
      dark: { bg: '#1C1C1A', ink: '#F0EFEB', muted: '#B0AFA9', faint: '#6A6963', grid: '#2E2D29', accent: '#F0EFEB' },
    },
    'porcelain-blue': {
      label: 'Porcelain Blue', mode: 'light',
      bg: '#F2F0EA', surface: '#F7F5F0', ink: '#172033',
      muted: '#667080', faint: '#9AA1AA', grid: '#D8D8D2', accent: '#2F5D7C',
      ladder: ['#172033', '#304158', '#4C6074', '#667080', '#89929C', '#ADB2B7', '#D8D8D2'],
      dark: { bg: '#172033', ink: '#F2F0EA', muted: '#B8C1CB', faint: '#77879A', grid: '#2B3850', accent: '#86ABC4' },
    },
    'forest-linen': {
      label: 'Forest Linen', mode: 'light',
      bg: '#EFF0E8', surface: '#F5F5EF', ink: '#1A2821',
      muted: '#607068', faint: '#969F98', grid: '#D7DAD0', accent: '#315D49',
      ladder: ['#1A2821', '#33473D', '#4A5E54', '#607068', '#839088', '#AAB1AA', '#D7DAD0'],
      dark: { bg: '#1A2821', ink: '#EFF0E8', muted: '#B6C0B9', faint: '#74847A', grid: '#304038', accent: '#83AE97' },
    },
    'oxblood-parchment': {
      label: 'Oxblood Parchment', mode: 'light',
      bg: '#F3EDE7', surface: '#F8F3EE', ink: '#2B1D1E',
      muted: '#765F60', faint: '#A79896', grid: '#DED4CE', accent: '#7A3038',
      ladder: ['#2B1D1E', '#4B3436', '#624B4D', '#765F60', '#967F7E', '#B7A7A3', '#DED4CE'],
      dark: { bg: '#2B1D1E', ink: '#F3EDE7', muted: '#CBB7B2', faint: '#8C7272', grid: '#493334', accent: '#D2868B' },
    },
    'midnight-bronze': {
      label: 'Midnight Bronze', mode: 'dark',
      bg: '#171816', surface: '#20211E', ink: '#F1EBDD',
      muted: '#B7AE9D', faint: '#7F786B', grid: '#34352F', accent: '#B58A52',
      ladder: ['#F1EBDD', '#DED4C2', '#C5BAA8', '#A79E90', '#817B70', '#5D5A52', '#34352F'],
      dark: { bg: '#171816', ink: '#F1EBDD', muted: '#B7AE9D', faint: '#7F786B', grid: '#34352F', accent: '#C89A5D' },
    },
  });
  const get = name => {
    if (!Object.prototype.hasOwnProperty.call(PALETTES, name)) throw new Error(`Unknown Lieflat palette: ${name}`);
    return PALETTES[name];
  };
  const cssVars = name => {
    const p = get(name);
    return { '--bg': p.bg, '--surface': p.surface, '--ink': p.ink, '--muted': p.muted, '--faint': p.faint, '--grid': p.grid, '--accent': p.accent };
  };
  const apply = (name, root = document.documentElement) => {
    const vars = cssVars(name);
    for (const [key, value] of Object.entries(vars)) root.style.setProperty(key, value);
    root.dataset.palette = name;
    return get(name);
  };
  global.LIEFLAT_PALETTES = { all: PALETTES, get, cssVars, apply };
})(typeof window !== 'undefined' ? window : globalThis);
