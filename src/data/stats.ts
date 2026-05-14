export type Stat = { value: string; label: string };

// Drawn from the CV — keep these honest. Update when the underlying numbers change.
export const stats: Stat[] = [
  { value: '20+', label: 'Client brands' },
  { value: '200k+', label: 'Views on a single cut' },
  { value: '~1', label: 'Shoot per week' },
  { value: '9+', label: 'Years on the craft' },
];

export type Logo = { name: string; src?: string; alt: string };

// TODO: drop client logos in /public/logos/*.svg and reference them here.
// Component is empty-state safe — if this array is empty, the logo row will not render.
export const logos: Logo[] = [];
