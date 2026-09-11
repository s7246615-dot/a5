# Design Registry & Style Architecture &bull; PlaitPouchRiver

## 1. Brand Identity & Aesthetic
- **Brand Name:** PlaitPouchRiver
- **Category / Niche:** Hand-Braided Leather Goods &bull; Cordwainer Atelier &bull; Bag
- **Design Philosophy:** Warm river clay alabaster, saddle terracotta accents, cyan river currents, and traditional saddlery typography celebrating timeless leathercraft.

## 2. Color Palette & Design Tokens
- `--color-bg`: `#FDFBF7` (River Alabaster Cream)
- `--color-surface`: `#FFFFFF` (Studio Pure White)
- `--color-surface-subtle`: `#F5EFEB` (Warm Tanning Vat Linen)
- `--color-border`: `#E8DED6` (Natural Bridle Edge Grey)
- `--color-slate-900`: `#1C1917` (Deep Obsidian Bark)
- `--color-slate-800`: `#292524` (Dark Bridle Hide)
- `--color-accent`: `#9A3412` (River Terracotta Saddle Amber)
- `--color-river`: `#0E7490` (River Water Cyan-Teal)
- `--color-saddle`: `#78350F` (Vegetable Tannin Russet)

## 3. Typography Hierarchy
- **Serif Display:** `'Playfair Display', Georgia, serif` &mdash; Elegant titles, artisanal branding, old-world cordwainer prestige.
- **Modern Sans:** `'Plus Jakarta Sans', sans-serif` &mdash; Clean, legible narrative prose and high-density technical specifications.
- **Monospace Telemetry:** `'JetBrains Mono', monospace` &mdash; Benchwork hours, tensile statistics, hide dimensions, and navigation tags.

## 4. Navigation & Layout
- Exactly 1 `<header class="site-header">` per page with sticky backdrop-filter blur.
- Exactly 1 `<div class="mobile-drawer" id="mobile-drawer">` per page synchronized in `assets/js/main.js`.
- Fully responsive across desktop, tablet, and mobile breakpoints.
