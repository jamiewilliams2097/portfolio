export type CvRole = {
  title: string;
  org: string;
  period: string;
  bullets: string[];
};

export const profile =
  'Video editor and shoot director with a hands-on track record across the full production process. Currently at Impress Video working across 20+ client brands in healthcare, dental, fitness, lifestyle, charity and digital media — scripting, directing, shooting and editing across large campaign pieces and fast-turnaround social content. Averaging around one shoot per week, comfortable in the edit suite and on set. Also builds commercial Premiere Pro plugins to solve real workflow problems.';

export const keySkills: string[] = [
  'Adobe Creative Cloud: Premiere Pro, After Effects, Photoshop',
  'Shooting on Red Komodo, Blackmagic and Sony cameras',
  'Lighting and sound on location',
  'Social-first editing and strategy across Instagram, LinkedIn and YouTube',
  'Storyboarding, moodboards, shot lists and shoot briefs',
  'AI tools across the editing workflow, including building custom tooling',
  'Client-facing from brief through delivery, comfortable owning shoots and senior stakeholder conversations',
];

export const experience: CvRole[] = [
  {
    title: 'Video Editor & Shoot Director',
    org: 'Impress Video',
    period: '2022 — Present',
    bullets: [
      'Lead Instagram content strategy across three pillars (comedy and reach, education, and business authority): writing scripts, building shot lists and editing the cuts, with posts reaching hundreds of thousands of views.',
      'Produce branded and commercial video across healthcare, dental, fitness, lifestyle, charity and digital media — from multi-day campaign shoots to social-first cuts.',
      'Own projects end-to-end: scripting, storyboarding, casting, on-set logistics and directing through to delivery.',
      'Develop social-first content formats including short presenter-led pieces, sub-30-second educational cuts and music-synced comedy.',
      'Trusted to run shoots independently and manage senior client relationships across the full project lifecycle.',
    ],
  },
  {
    title: 'Freelance Video Editor & Content Creator',
    org: 'Self-employed',
    period: '2016 — 2022',
    bullets: [
      'Produced and edited content for YouTube channels, Twitch streamers, TikTok creators and small businesses, including content reaching 200,000+ views.',
      'Managed end-to-end production: filming, editing, scheduling and channel management for clients across multiple niches.',
      'Built the craft from the ground up, turning teenage YouTube videos into a paying client base.',
    ],
  },
];

export type SideProject = { name: string; tagline: string };
export const sideProjects: SideProject[] = [
  {
    name: 'GimbalGuard',
    tagline:
      'Commercial Premiere Pro plugin that speeds up the edit by analysing gimbal footage and surfacing the cleanest takes automatically. Built and shipped from scratch.',
  },
  {
    name: 'ClipSync',
    tagline:
      'Premiere Pro plugin that handles multi-cam audio sync inside the timeline, removing a slow manual step from the edit.',
  },
  {
    name: 'Other builds',
    tagline:
      'Custom tools for Twitch streaming workflow and personal file management.',
  },
];

export const education: { line: string }[] = [
  { line: 'BTEC Level 3 Extended Diploma in Software Development, Derby College, 2018' },
  { line: 'GCSEs, Littleover Community School, 2016' },
];

export const outsideOfWork =
  'Painting, drumming, learning Spanish. Regular gym for fitness and headspace.';
