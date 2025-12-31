# Havoc IT Consulting Landing Page

A single-page marketing site for Havoc IT Consulting with bilingual (EN/RO) content, accessibility-minded UI, and contact CTA.

## Audit summary
- **Conversion & UX**: Added sticky navigation with repeated CTA, trust badges, improved spacing/typography, and a secondary CTA strip for scannability and higher conversion.
- **Accessibility**: Semantic heading order, skip link, visible focus states, improved form labels, and keyboard-friendly components.
- **Performance & SEO**: Versioned assets for caching, preloaded stylesheet, defined media dimensions, enriched meta/OG/Twitter tags, canonical/hreflang links, and Organization JSON-LD.
- **Internationalization**: Language choice persisted via `localStorage`, translated meta/structured data, and synced placeholders/buttons across the page.

## Local preview
Open `index.html` in any modern browser. No build step is required.

## Deployment
- Suitable for static hosting (e.g., GitHub Pages). The `CNAME` points to `www.havoc-it.ro`.
- Asset URLs include a `?v=20250105` version suffix to enable long-lived caching while allowing controlled cache busting when assets change.

## Post-deployment checklist
- Verify the contact form: required-field validation, honeypot stays hidden, button disables while mail client opens, and the feedback message appears.
- Switch languages and refresh: ensure content, placeholders, meta tags, and `<html lang>` persist the chosen locale.
- Confirm sticky nav and CTAs scroll to the correct sections with smooth behavior and adequate section offset.
- Check mobile breakpoints (414px, 375px, 320px): navbar wraps without overlap and CTAs stay fully visible below hero text.
- Inspect SEO signals: `<title>`, meta description, canonical, hreflang, OG/Twitter tags, and JSON-LD present for both languages.
- Run an accessibility pass (keyboard-only navigation, focus visibility, screen reader labels) and confirm color contrast remains readable.
- Check hero image renders with the defined width/height and high fetch priority; replace with a compressed WebP for additional savings if desired.
