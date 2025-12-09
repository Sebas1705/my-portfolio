// Iconos SVG para tecnologías
export const skillIcons: Record<string, string> = {
  // Languages
  javascript: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="#F7DF1E"/><path d="M6 6h12v12H6z" fill="#000"/><text x="12" y="16" font-size="8" font-weight="bold" text-anchor="middle" fill="#F7DF1E">JS</text></svg>`,
  typescript: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="#3178C6"/><text x="12" y="16" font-size="8" font-weight="bold" text-anchor="middle" fill="white">TS</text></svg>`,
  python: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="#3776AB"/><circle cx="12" cy="12" r="11" fill="#FFD43B" opacity="0.3"/></svg>`,

  // Frontend
  react: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(-60 12 12)"/></svg>`,
  nextjs: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="black"/><text x="12" y="16" font-size="10" font-weight="bold" text-anchor="middle" fill="white">N</text></svg>`,
  tailwind: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="#06B6D4"/></svg>`,

  // Backend
  nodejs: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#339933"/></svg>`,
  nestjs: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="#E0234E"/><circle cx="12" cy="12" r="8" fill="white" opacity="0.3"/></svg>`,
  express: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="black"/><text x="12" y="16" font-size="8" font-weight="bold" text-anchor="middle" fill="white">EX</text></svg>`,
  postgresql: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="#336791"/><text x="12" y="16" font-size="8" font-weight="bold" text-anchor="middle" fill="white">PG</text></svg>`,
  mongodb: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="#13AA52"/><path d="M12 4 L12 20 M8 12 L16 12" stroke="white" stroke-width="1"/></svg>`,

  // Mobile
  reactnative: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="2.5" fill="#61DAFB"/><ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1.5"/><ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="8" ry="3" fill="none" stroke="#61DAFB" stroke-width="1.5" transform="rotate(-60 12 12)"/></svg>`,
  expo: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="#000"/><text x="12" y="16" font-size="9" font-weight="bold" text-anchor="middle" fill="white">EXPO</text></svg>`,
  swift: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="#FA7343"/><path d="M10 8 Q14 12 10 16" stroke="white" stroke-width="2" fill="none"/></svg>`,

  // Tools & DevOps
  docker: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="#2496ED"/><path d="M6 10h3v2H6zm4 0h3v2h-3zm4 0h3v2h-3z" fill="white"/></svg>`,
  git: `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="11" fill="#F1502F"/><path d="M12 4 L20 12 L12 20 L4 12 Z" fill="white" opacity="0.3"/></svg>`,
  cicd: `<svg viewBox="0 0 24 24" fill="currentColor"><rect width="24" height="24" rx="4" fill="#0052CC"/><path d="M8 12 L10 14 L16 8" stroke="white" stroke-width="2" fill="none"/></svg>`,
  aws: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" fill="#FF9900"/></svg>`,
  figma: `<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="5" width="6" height="6" fill="#F24E1E"/><circle cx="15" cy="8" r="3" fill="#A259FF"/><circle cx="15" cy="16" r="3" fill="#1ABCFE"/><rect x="5" y="13" width="6" height="6" fill="#0ACF83"/></svg>`
};

export function getSkillIcon(skillId: string): string {
  return skillIcons[skillId] || defaultIcon();
}

function defaultIcon(): string {
  return `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="10" fill="#9CA3AF" opacity="0.5"/></svg>`;
}
