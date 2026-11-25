/**
 * Brand colours sampled from the official TANZA wordmark.
 * Keep in sync with --color-primary-* / --color-brand-* in src/index.css.
 */
export const BRAND = {
  navy: '#004c97',
  navyDeep: '#001830',
  green: '#00b140',
  greenDeep: '#00782c',
} as const;

/** Page-hero gradient: deep navy -> logo navy -> logo green. */
export const HERO_GRADIENT = `linear-gradient(135deg, ${BRAND.navyDeep} 0%, ${BRAND.navy} 40%, ${BRAND.greenDeep} 78%, ${BRAND.green} 100%)`;
