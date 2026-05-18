// ---------------------------------------------------------------------------
// Writing zone data
//
// House style: no long dashes (—, –) anywhere in copy. Use full stops,
// commas, semicolons or middle dots (·) instead.
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Hooks (data kept for future use; not currently rendered on /writing)
// ---------------------------------------------------------------------------

export type Hook = {
  line: string;
  category: string;
  why: string;
};

export const hooks: Hook[] = [
  {
    line: 'If I had to start over tomorrow…',
    category: 'Personal pivot',
    why: 'Borrows the fresh-start fantasy the viewer is already running in their head.',
  },
  {
    line: "Most people don't realise…",
    category: 'Insight',
    why: 'Promises status. The viewer is about to know something most people do not.',
  },
];

// ---------------------------------------------------------------------------
// Sample scripts (data kept for future use; not currently rendered on /writing)
// ---------------------------------------------------------------------------

export type ScriptBeat = { label: string; line: string };
export type Script = {
  title: string;
  context: string;
  format: string;
  duration: string;
  beats: ScriptBeat[];
};

export const scripts: Script[] = [];

// ---------------------------------------------------------------------------
// Script excerpts (rendered as 01 on /writing)
//
// Short pulls drawn from the real script transcripts. The `point` line is
// the why-it-works note rendered alongside the meta row.
// ---------------------------------------------------------------------------

export type ScriptExcerpt = {
  slug: string;
  client: string;
  format: string;
  role: string;
  excerpt: string;
  point: string;
};

export const scriptExcerpts: ScriptExcerpt[] = [
  {
    slug: 'rhodes-wealth',
    client: 'Rhodes Wealth Management',
    format: 'About Us video. Brand story.',
    role: 'Script. Interview structure. Story shaping.',
    excerpt:
      "Wealth management can be complicated, but it does not need to feel that way. We provide holistic financial advice that looks at the whole picture, not just the numbers. Many of our client relationships go back decades, built on culture, values and trust. We are not just here to manage money. We are here to improve lives.",
    point: 'Makes a wealth management company feel human, not sales-led.',
  },
  {
    slug: 'impress-advert',
    client: 'Impress Video',
    format: 'Promotional advert.',
    role: 'Script. Concept. Structure.',
    excerpt:
      "Ever wonder what it takes to make an advert that actually works? Every frame we shoot, every story we tell, starts with one question. What will make this unforgettable? Because forgettable adverts cost the same as memorable ones.",
    point: 'Sells the value of video without listing services.',
  },
  {
    slug: 'ald-polestar-4',
    client: 'ALD Flex UK',
    format: 'LinkedIn presenter-led social video.',
    role: 'Hook. Script structure. Spec-led social format.',
    excerpt:
      "This is the new Polestar 4. And it has no rear window. Yeah, you heard that right. Instead, there's a live camera feed straight to the interior mirror, giving you a wider, clearer line of sight than any piece of glass ever could.",
    point: 'Turns a car walkthrough into a curiosity-led video.',
  },
];

// ---------------------------------------------------------------------------
// Script to screen
//
// One unified array. Render order is the page order: strongest proof first,
// Eli Ankutse Rolls Royce Review last.
// ---------------------------------------------------------------------------

export type ScriptToScreenItem = {
  slug: string;
  title: string;
  client: string;
  format: string;
  role: string;
  result: string | null;
  /** Long-form context. Stored in data but not rendered on cards. */
  context: string;
  /** Set to null to omit the "Why it works" row entirely on this card. */
  whyItWorked: string | null;
  vimeoId: string;
  poster: string | null;
  /** CSS aspect-ratio value for the embed slot, e.g. "9 / 16", "16 / 9", "1 / 1". */
  mediaAspect: string;
  permissionStatus: string;
  publicEmbed: boolean;
};

export const scriptToScreen: ScriptToScreenItem[] = [
  {
    slug: 'impress-video-advert',
    title: 'Impress Video Advert',
    client: 'Impress Video',
    format: 'Promotional advert',
    role: 'Script / concept / structure / editing',
    result: 'Generated many leads for Impress Video.',
    context:
      'An advert for the videography company I worked for. Designed to promote Impress as a creative video partner that makes brands more memorable.',
    whyItWorked:
      'Engaging, persuasive and built around a clear opening question that sells the value of video without just listing services.',
    vimeoId: '1193372785',
    poster: null,
    mediaAspect: '1 / 1',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'ty-mitchell-misfits-promo',
    title: 'Ty Mitchell Misfits Fight Promo',
    client: 'Ty Mitchell',
    format: 'Short cinematic fight promo',
    role: 'Script',
    result: 'Over 200,000 views.',
    context:
      "A very short cinematic advert promoting Ty Mitchell's Misfits boxing match. He wore armour and the concept focused on overthinking before a fight.",
    whyItWorked:
      'Audience comments described the promo as cinematic and hair-raising.',
    vimeoId: '1193379406',
    poster: null,
    mediaAspect: '9 / 16',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'ald-flex-polestar-4',
    title: 'Polestar 4 LinkedIn Video',
    client: 'ALD Flex UK',
    format: 'LinkedIn presenter-led social video',
    role: 'Script / filming / editing / direction',
    result: 'Performed very well on LinkedIn.',
    context:
      'A LinkedIn vehicle walkthrough built around a strong opening hook. The hook was based on the unusual fact that the Polestar 4 has no rear window and uses a live feed to the interior mirror.',
    whyItWorked:
      'Turns a standard car walkthrough into a curiosity-led product video.',
    vimeoId: '1193372650',
    poster: null,
    mediaAspect: '1 / 1',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'rhodes-wealth-about-us',
    title: 'About Us Video',
    client: 'Rhodes Wealth Management',
    format: 'Website About Us video. Brand story.',
    role: 'Script, interview structure, story shaping',
    result: null,
    context:
      'An About Us video for a wealth management company. The writing needed to make the company feel human, trustworthy and values-led rather than sales-led.',
    whyItWorked:
      'Positions the company as trustworthy, human and values-led.',
    vimeoId: '1193372809',
    poster: null,
    mediaAspect: '16 / 9',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'impress-luxury-bar-to-coffee',
    title: 'Luxury Bar to Luxury Coffee Shop',
    client: 'Impress Video',
    format: 'Social video',
    role: 'Hook, concept, structure',
    result: null,
    context:
      'A social video for Impress about how we turned a luxury bar into a luxury coffee shop for a video shoot.',
    whyItWorked:
      'A clear transformation idea that shows production skill while staying fun and easy to follow.',
    vimeoId: '1193372746',
    poster: null,
    mediaAspect: '9 / 16',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'eli-ankutse-boattail',
    title: "World's Most Expensive Car Reveal",
    client: 'Eli Ankutse',
    format: 'Social video. Event-led creator content.',
    role: 'Structure / script / direction',
    result: null,
    context:
      "A video of Eli Ankutse going to see the Rolls Royce Boattail unveiled, described as the world's most expensive car to make.",
    whyItWorked:
      'Uses rarity, novelty and anticipation to make a rougher event-led video compelling enough to pass 100,000 views.',
    vimeoId: '1193372646',
    poster: null,
    mediaAspect: '27 / 35',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'huub-advert',
    title: 'HUUB Advert',
    client: 'HUUB',
    format: 'Advert. Campaign video.',
    role: 'Script, concept, structure',
    result: 'Used by HUUB on social media.',
    context:
      "An advert made for HUUB Sportswear. The script aimed for grit and intensity. The original voice actress was later replaced with an AI voice at the client's request.",
    whyItWorked:
      "Built around grit and intensity, with the final voiceover changed to AI at the client's request.",
    vimeoId: '1193372647',
    poster: null,
    mediaAspect: '16 / 9',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
  {
    slug: 'eli-ankutse-rolls-royce',
    title: 'Eli Ankutse Rolls Royce Review',
    client: 'Eli Ankutse',
    format: 'Creator-led car review. Social video.',
    role: 'Script, structure, hook, direction',
    result: null,
    context:
      'A regular Eli Ankutse Rolls Royce video. It did not perform as well as the Boattail piece, but better represents the usual style and quality of the work.',
    whyItWorked: null,
    vimeoId: '1193372651',
    poster: null,
    mediaAspect: '27 / 28',
    permissionStatus: 'Approved for portfolio use as work I contributed to',
    publicEmbed: true,
  },
];

// ---------------------------------------------------------------------------
// Rewrites
// ---------------------------------------------------------------------------

export type Rewrite = { before: string; after: string; note?: string };

export const beforeAfter: Rewrite[] = [
  {
    before:
      'Our innovative platform leverages cutting-edge AI to streamline your workflow.',
    after:
      'We use AI to do the boring half of your job. You get the rest of the afternoon back.',
    note: 'Trade "innovative platform" for a concrete outcome the viewer can picture.',
  },
  {
    before:
      'Discover unparalleled productivity with our new task management solution.',
    after:
      "It's a to-do list. Just one that actually closes the tabs in your head.",
    note: 'Name what it is. Then name the feeling. Both beat "solution".',
  },
  {
    before:
      'We are passionate about delivering exceptional customer experiences.',
    after:
      "We answer the email. Often within the hour. That is basically the whole pitch.",
    note: 'Replace abstract values with the one behaviour they prove.',
  },
  {
    before: 'Empowering teams to unlock their full creative potential.',
    after:
      "Less time stuck in admin. More time on the work that is actually worth doing.",
    note: '"Empowering" is filler. Specifics beat sentiment, every single time.',
  },
];

// ---------------------------------------------------------------------------
// Voice range
// ---------------------------------------------------------------------------

export type VoiceMode = { name: string; example: string; use: string };

export const voiceRange: VoiceMode[] = [
  {
    name: 'Founder-led',
    example: "I built this. Here's what surprised me.",
    use: 'For founders who want to sound like a person, not a press release.',
  },
  {
    name: 'Influencer-led',
    example: "Listen. I don't say this lightly.",
    use: 'For creators whose authority is the lead asset.',
  },
  {
    name: 'Explainer',
    example: "Three reasons this matters. Two are obvious. The third isn't.",
    use: 'For education-led content. Clarity over cleverness.',
  },
  {
    name: 'Paid social ad',
    example: 'Stop scrolling. I have 15 seconds.',
    use: 'For 9:16 cuts that have to earn the next second, eight times in a row.',
  },
  {
    name: 'B2B LinkedIn',
    example:
      'If your team is shipping slower than last quarter, this is for you.',
    use: 'For business decision-makers who hate being sold to.',
  },
  {
    name: 'UGC-style',
    example: "Not gonna lie, I wasn't expecting this.",
    use: 'For creator-led product reviews that have to sound earned.',
  },
  {
    name: 'Documentary VO',
    example: 'It started, like most things do, with a problem.',
    use: 'For longer-form brand films. Calm pacing, low theatre.',
  },
  {
    name: 'Comedy',
    example: 'Three things I learned the hard way. They are all my fault.',
    use: 'For music-synced cuts and personality-led brand work.',
  },
];

// ---------------------------------------------------------------------------
// Ambient typing lines (used by the writing-page typing box)
// ---------------------------------------------------------------------------

export const typingLines: string[] = [
  'Start with the consequence, not the context.',
  'The hook has to earn the next two seconds.',
  'Cut the setup. Get to the pressure.',
  'Make the viewer feel the problem before explaining the solution.',
  'The CTA should feel like the next logical step, not an advert.',
  'If the first line explains too much, it is probably too late.',
];
