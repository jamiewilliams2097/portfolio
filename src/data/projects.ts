export type Project = {
  slug: string;
  title: string;
  client: string;
  sector: string;
  formats: string[];
  roles: string[];
  year: string;
  yearSort: number;
  collaborators?: string[];
  summary: string;
  blurb: string;
  poster: string;
  vimeoId: string;
  /**
   * Optional 2–3 second muted preview clip used on tile hover (desktop only).
   * Drop a small MP4/WebM in /public/previews/<slug>.mp4 (~480p, no audio, ~1–2s)
   * and set this to e.g. '/previews/ald-flex-uk.mp4'. Falls back to the static poster.
   */
  previewSrc?: string;
  featured: boolean;
  challenge: string;
  approach: string;
  result: string;
  testimonial?: { quote: string; author: string; role: string };
  credits?: { role: string; name: string }[];
};

// TODO: replace placeholder vimeoIds and poster URLs with real assets.
// TODO: tighten or expand challenge/approach/result copy as case studies are confirmed.
// TODO: add testimonial blocks when client quotes are signed off.
// TODO: add previewSrc per project once short MP4 previews are exported.
export const projects: Project[] = [
  {
    slug: 'ald-flex-uk',
    title: 'ALD Flex UK',
    client: 'ALD Flex UK',
    sector: 'Automotive',
    formats: ['Social', 'Branded'],
    roles: ['Filming', 'Editing', 'Captions', 'Colour'],
    year: '2025',
    yearSort: 2025,
    summary:
      'LinkedIn-led vehicle content built to hold fleet decision-makers past the first second.',
    blurb:
      'Sharp social pieces for ALD Flex UK — vehicle storytelling cut for reach on LinkedIn.',
    poster: 'https://picsum.photos/seed/aldflex/1600/900',
    vimeoId: '76979871',
    // TODO: drop /public/previews/ald-flex-uk.mp4 (~2s muted clip, 480p) to enable hover preview.
    previewSrc: undefined,
    featured: true,
    challenge:
      'Make vehicle social content that holds attention on LinkedIn — a feed built for read-and-skim, not for video. Brief asked for premium feel without losing the platform-native energy.',
    approach:
      'Cut for the first 1.2 seconds: hook → motion → payoff. Sound-off legibility carried by captioned key beats. Colour grade tuned for premium feel without theatrical drift. Edits paced to a LinkedIn-shaped attention window, not a 30-second TV slot.',
    result:
      'Ongoing campaign — published across the ALD Flex UK LinkedIn feed.', // TODO: add a real performance line (dwell time, CTR or lead count) once sign-off allows.
  },
  {
    slug: 'impress-brand-campaigns',
    title: 'Impress Video — Brand campaigns',
    client: 'Impress Video',
    sector: 'Commercial',
    formats: ['Branded', 'Campaign'],
    roles: ['Filming', 'Editing', 'Shoot Direction', 'Delivery'],
    year: '2022 — Present',
    yearSort: 2024,
    collaborators: ['Impress Video creative team'],
    summary:
      'Multi-sector campaign and social work across 20+ brands — full ownership from brief to delivery.',
    blurb:
      'Ongoing campaign and social work at Impress Video across healthcare, dental, fitness, lifestyle, charity and digital media.',
    poster: 'https://picsum.photos/seed/impress/1600/900',
    vimeoId: '169599296',
    previewSrc: undefined,
    featured: true,
    challenge:
      'Run multiple client brands in parallel — each with its own tone, audience and platform — without the work blurring into a single house style.',
    approach:
      'Treat each brand as a discrete edit grammar. Tone-lock in pre-production with shot lists, moodboards and reference cuts. On set, direct for coverage and performance. In the suite, lean on Premiere and After Effects for tight motion graphics and sub-30-second cutdowns that still feel like the parent brand.',
    result:
      'Averaging around a shoot a week across 20+ brands, with senior client relationships across the full project lifecycle and posts reaching hundreds of thousands of views.',
  },
  {
    slug: 'social-first-cutdowns',
    title: 'Social-first cutdowns',
    client: 'Various — Instagram, LinkedIn, TikTok',
    sector: 'Social',
    formats: ['Social', 'Cutdowns'],
    roles: ['Editing', 'Captions', 'Motion'],
    year: '2023 — Present',
    yearSort: 2023,
    summary:
      'Caption-led short-form: presenter pieces, music-synced comedy and educational cuts engineered for hold-and-rewatch.',
    blurb:
      'Short-form social — presenter pieces, music-synced comedy and educational cuts built for hold-and-rewatch.',
    poster: 'https://picsum.photos/seed/social/1600/900',
    vimeoId: '195411155',
    previewSrc: undefined,
    featured: false,
    challenge:
      'Convert long-form campaign masters into native social cuts that earn shares, not just views — across three different audience modes (comedy/reach, education, business authority).',
    approach:
      'A per-pillar edit grammar. Comedy: music-synced cuts, hard punchlines on beat. Education: sub-30-second structure, single idea per cut, captions that read first. Authority: presenter-led, calm pacing, intentional negative space. Built tooling on the side to keep turnaround tight.',
    result:
      'Posts reaching hundreds of thousands of views across Instagram.', // TODO: layer in a real save/share/rewatch number once accessible.
  },
  {
    slug: 'educational-micro-cuts',
    title: 'Educational micro-cuts',
    client: 'Impress Video clients',
    sector: 'Social',
    formats: ['Educational', 'Short-form'],
    roles: ['Editing', 'Captions', 'Motion'],
    year: '2024',
    yearSort: 2024,
    summary:
      'Sub-30-second educational cuts — one idea, one cut, captions that read first.',
    blurb:
      'Sub-30-second educational social — designed around a single idea, captioned first, audio second.',
    poster: 'https://picsum.photos/seed/edu/1600/900',
    vimeoId: '76979871',
    previewSrc: undefined,
    featured: true,
    challenge:
      'Teach something useful in under 30 seconds, on a feed where most viewers watch sound-off and decide in the first second.',
    approach:
      'Lead with the question on screen. Cut to the answer before the viewer can scroll. Captions sized for thumb-distance reading, paced to the spoken beat. Aspect ratios native to each platform, not letterboxed.',
    result:
      'Repeatable format used across multiple Impress client accounts.', // TODO: layer in a real saves/shares figure when accessible.
  },
  {
    slug: 'freelance-end-to-end',
    title: 'Freelance — end-to-end',
    client: 'Creators and small businesses',
    sector: 'Freelance',
    formats: ['Long-form', 'Channel', 'Branded'],
    roles: ['Filming', 'Editing', 'Producing', 'Delivery'],
    year: '2016 — 2022',
    yearSort: 2020,
    summary:
      'Six years freelance — YouTube channels, Twitch streamers, TikTok creators and small businesses, end-to-end.',
    blurb:
      'Freelance videography for creators and small businesses — brief, shoot, edit, deliver. Content pulling 200k+ views.',
    poster: 'https://picsum.photos/seed/freelance/1600/900',
    vimeoId: '22439234',
    previewSrc: undefined,
    featured: false,
    challenge:
      'Build a sustainable freelance practice from a teenage YouTube workflow — meeting creator deadlines and small-business briefs at the same time.',
    approach:
      'Owned filming, editing, scheduling and channel management. Built the craft project-by-project, with channel pacing and pickup-shot intuition that still informs every shoot today.',
    result:
      'Content reaching 200,000+ views; the freelance years turned into the on-set fluency the current Impress role is built on.',
  },
];

export const featuredProjects: Project[] = projects.filter((p) => p.featured);
export const sortedProjects: Project[] = [...projects].sort(
  (a, b) => b.yearSort - a.yearSort,
);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacent(slug: string): {
  prev: Project | undefined;
  next: Project | undefined;
} {
  const idx = sortedProjects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: undefined, next: undefined };
  const prev = sortedProjects[(idx - 1 + sortedProjects.length) % sortedProjects.length];
  const next = sortedProjects[(idx + 1) % sortedProjects.length];
  return { prev, next };
}

export const filters = {
  sectors: ['All', 'Automotive', 'Commercial', 'Social', 'Freelance'],
  formats: ['All', 'Branded', 'Social', 'Campaign', 'Long-form', 'Cutdowns', 'Educational'],
} as const;
