// ---------------------------------------------------------------------------
// Video editing zone data (/videoediting)
//
// House style: no long dashes anywhere in copy. Use full stops, commas,
// semicolons or middle dots (·) instead.
// ---------------------------------------------------------------------------

export type SelectedEdit = {
  slug: string;
  title: string;
  client: string;
  /** One-line framing of what the edit had to do. */
  editingNote: string;
  /** Two or three short points. Rendered as a bullet list. */
  whyThisCutWorks: string[];
  /** Short editorial tags. Two or three each, max. */
  tags: string[];
  vimeoId: string;
  /** Local 16:9 cover under /public, e.g. "/thumbnails/foo.jpg". */
  thumbnail: string | null;
  /** Aspect ratio for the slot. All cards use 16/9 for a uniform grid. */
  mediaAspect: string;
  /** Bin-style file id, e.g. "01_IMPRESS_ADVERT". */
  clipId: string;
  /** Display duration in hh:mm:ss:ff. */
  duration: string;
  /** Block-pattern rhythm strip, e.g. "▌▌▌ ▌ ▌▌▌▌ ▌▌ ▌". */
  paceProfile: string;
  /** Short label for the pace strip. */
  paceLabel: string;
};

export const selectedEdits: SelectedEdit[] = [
  {
    slug: 'impress-video-advert',
    title: 'Impress Video Advert',
    client: 'Impress Video',
    editingNote:
      'Built around a direct opening question, fast visual rhythm and clear progression from problem to value.',
    whyThisCutWorks: [
      'Opens on a clear question',
      'Moves quickly from problem to value',
      'Keeps the message simple and readable',
    ],
    tags: ['Pacing', 'Story structure', 'Social cutdown'],
    vimeoId: '1193372785',
    thumbnail: '/thumbnails/impress-advert.jpg',
    mediaAspect: '16 / 9',
    clipId: '01_IMPRESS_ADVERT',
    duration: '00:00:42:00',
    paceProfile: '▌▌▌▌ ▌ ▌ ▌▌▌ ▌▌▌▌',
    paceLabel: 'Fast hook · steady middle · clean payoff',
  },
  {
    slug: 'ald-flex-polestar-4',
    title: 'ALD Flex Polestar 4',
    client: 'ALD Flex UK',
    editingNote:
      'Uses the rear-window hook to earn attention, then keeps the walkthrough moving through clean pacing and useful detail.',
    whyThisCutWorks: [
      'Starts with a curiosity hook',
      'Keeps product detail moving',
      'Balances presenter rhythm with b-roll',
    ],
    tags: ['Presenter rhythm', 'Pacing', 'Automotive'],
    vimeoId: '1193372650',
    thumbnail: '/thumbnails/ald-polestar.jpg',
    mediaAspect: '16 / 9',
    clipId: '02_ALD_POLESTAR',
    duration: '00:01:08:12',
    paceProfile: '▌▌▌▌ ▌ ▌ ▌▌▌ ▌▌',
    paceLabel: 'Curiosity hook · clean walkthrough',
  },
  {
    slug: 'ty-mitchell-misfits-promo',
    title: 'Ty Mitchell Misfits Fight Promo',
    client: 'Ty Mitchell',
    editingNote:
      'Short, cinematic and pressure-led. The edit holds tension by cutting around stillness, armour, atmosphere and anticipation.',
    whyThisCutWorks: [
      'Uses stillness to build pressure',
      'Cuts around atmosphere, not just action',
      'Feels cinematic without over-explaining',
    ],
    tags: ['Sound polish', 'Pacing', 'Retention'],
    vimeoId: '1193379406',
    thumbnail: '/thumbnails/ty-mitchell.png',
    mediaAspect: '16 / 9',
    clipId: '03_TY_MITCHELL',
    duration: '00:00:25:08',
    paceProfile: '▌ ▌ ▌ ▌▌ ▌▌▌▌▌▌',
    paceLabel: 'Tension build · quick release',
  },
  {
    slug: 'impress-coffee-shop',
    title: 'Impress Coffee Shop',
    client: 'Impress Video',
    editingNote:
      'Turns a space transformation into an easy-to-follow visual story, using before/after contrast and production detail.',
    whyThisCutWorks: [
      'Makes the transformation clear',
      'Uses visual contrast to tell the story',
      'Keeps the sequence easy to follow',
    ],
    tags: ['Story structure', 'Brand film', 'Pacing'],
    vimeoId: '1193372746',
    thumbnail: '/thumbnails/coffee.jpg',
    mediaAspect: '16 / 9',
    clipId: '04_COFFEE_SHOP',
    duration: '00:00:38:00',
    paceProfile: '▌▌ ▌▌ ▌▌▌▌ ▌▌▌',
    paceLabel: 'Reveal-led · steady momentum',
  },
  {
    slug: 'eli-ankutse-boattail',
    title: 'Eli Ankutse Boattail',
    client: 'Eli Ankutse',
    editingNote:
      'Event-led creator footage shaped around rarity, reveal and momentum to keep a rougher source video watchable.',
    whyThisCutWorks: [
      'Builds around rarity and reveal',
      'Keeps rougher footage moving',
      'Uses momentum to hold attention',
    ],
    tags: ['Creator content', 'Retention', 'Story structure'],
    vimeoId: '1193372646',
    thumbnail: '/thumbnails/eli-boattail.jpg',
    mediaAspect: '16 / 9',
    clipId: '05_ELI_BOATTAIL',
    duration: '00:01:48:00',
    paceProfile: '▌ ▌▌ ▌▌▌▌ ▌▌▌▌',
    paceLabel: 'Reveal-led · momentum finish',
  },
  {
    slug: 'rhodes-wealth-management',
    title: 'Rhodes Wealth Management',
    client: 'Rhodes Wealth Management',
    editingNote:
      'A calm corporate edit built around trust, pacing and a steady sense of credibility.',
    whyThisCutWorks: [
      'Keeps the pace measured',
      'Supports trust rather than hype',
      'Lets the message breathe without dragging',
    ],
    tags: ['Corporate', 'Sound polish', 'Pacing'],
    vimeoId: '1193372809',
    thumbnail: '/thumbnails/rhodes.jpg',
    mediaAspect: '16 / 9',
    clipId: '06_RHODES_ABOUT',
    duration: '00:02:14:00',
    paceProfile: '▌▌ ▌▌ ▌▌ ▌▌ ▌▌',
    paceLabel: 'Measured pace · trust-led delivery',
  },
  {
    slug: 'huub-advert',
    title: 'HUUB Advert',
    client: 'HUUB',
    editingNote:
      "Grit-focused pacing, clean visual intensity and a final voiceover changed to AI at the client's request.",
    whyThisCutWorks: [
      'Uses intensity without clutter',
      'Keeps movement and energy consistent',
      'Adapts cleanly around the final voiceover choice',
    ],
    tags: ['Ad edit', 'Sound polish', 'Pacing'],
    vimeoId: '1193372647',
    thumbnail: '/thumbnails/huub.jpg',
    mediaAspect: '16 / 9',
    clipId: '07_HUUB_ADVERT',
    duration: '00:00:32:12',
    paceProfile: '▌▌▌▌▌▌▌ ▌▌▌▌▌▌',
    paceLabel: 'Grit pacing · clean finish',
  },
  {
    slug: 'eli-ankutse-rolls-royce',
    title: 'Eli Ankutse Rolls Royce Review',
    client: 'Eli Ankutse',
    editingNote:
      'A natural presenter-led piece shaped for rhythm, clarity and enthusiasm without overcomplicating the cut.',
    whyThisCutWorks: [
      'Keeps the presenter feeling natural',
      'Shapes enthusiasm into structure',
      'Avoids over-editing the delivery',
    ],
    tags: ['Presenter rhythm', 'Creator content', 'Clarity'],
    vimeoId: '1193372651',
    thumbnail: '/thumbnails/eli-rolls.jpg',
    mediaAspect: '16 / 9',
    clipId: '08_ELI_ROLLS',
    duration: '00:01:24:00',
    paceProfile: '▌▌▌ ▌▌ ▌▌▌ ▌▌',
    paceLabel: 'Natural delivery · structured rhythm',
  },
];

// ---------------------------------------------------------------------------
// Editing decisions
// ---------------------------------------------------------------------------

export type EditDecision = {
  marker: string;
  short: string;
  title: string;
  body: string;
};

export const editDecisions: EditDecision[] = [
  {
    marker: 'M01',
    short: 'Hook',
    title: 'Hook before polish',
    body: 'The opening has to create a reason to keep watching before the nice shots matter.',
  },
  {
    marker: 'M02',
    short: 'Dead air',
    title: 'Cut dead time',
    body: 'Pauses, repeated phrases and slow setup get removed before the viewer notices the drag.',
  },
  {
    marker: 'M03',
    short: 'Message',
    title: 'Shape the message',
    body: 'The best edit is usually the clearest version of the idea, not the longest one.',
  },
  {
    marker: 'M04',
    short: 'Sound',
    title: 'Sound carries pace',
    body: 'Music, breath, silence, impact and voice timing decide how expensive the edit feels.',
  },
  {
    marker: 'M05',
    short: 'Platform',
    title: 'Platform matters',
    body: 'A LinkedIn cut, a reel and a website film do not need the same rhythm.',
  },
  {
    marker: 'M06',
    short: 'Delivery',
    title: 'Finish for delivery',
    body: 'Captions, aspect ratios, exports and clean review versions are part of the edit, not afterthoughts.',
  },
];

// ---------------------------------------------------------------------------
// Editing range
// ---------------------------------------------------------------------------

export type EditMode = { seqId: string; name: string; description: string };

export const editingRange: EditMode[] = [
  {
    seqId: 'SEQ_01_SOCIAL_AD',
    name: 'Social ads',
    description: 'Fast openings, clear value and no wasted setup.',
  },
  {
    seqId: 'SEQ_02_PRESENTER',
    name: 'Presenter-led content',
    description: 'Natural rhythm, tighter phrasing and clean support from b-roll.',
  },
  {
    seqId: 'SEQ_03_BRAND_FILM',
    name: 'Brand films',
    description: 'Structure, tone and pacing that make a company feel credible.',
  },
  {
    seqId: 'SEQ_04_AUTOMOTIVE',
    name: 'Automotive walkthroughs',
    description: 'Useful detail, clean visual rhythm and a reason to keep watching.',
  },
  {
    seqId: 'SEQ_05_CREATOR',
    name: 'Creator content',
    description: "Personality-led edits shaped for retention without killing the presenter's voice.",
  },
  {
    seqId: 'SEQ_06_TESTIMONIAL',
    name: 'Testimonials',
    description: 'Human answers shaped into clear, believable stories.',
  },
  {
    seqId: 'SEQ_07_RECRUITMENT',
    name: 'Recruitment videos',
    description: 'Pace and clarity that make a workplace feel real, not staged.',
  },
  {
    seqId: 'SEQ_08_EVENT',
    name: 'Event-led edits',
    description: 'Messier footage shaped around moments, atmosphere and payoff.',
  },
];

// ---------------------------------------------------------------------------
// Ambient typing lines for the Notes from the edit box
// ---------------------------------------------------------------------------

export const notesFromTheEdit: string[] = [
  'Cut the dead air before the viewer feels it.',
  'The first three seconds do the heavy lifting.',
  'Sound sells the cut before the grade does.',
  'Every pause has to earn its place.',
  'Structure first. Polish second.',
];

// ---------------------------------------------------------------------------
// Mini hero timeline markers
// ---------------------------------------------------------------------------

export const timelineMarkers: string[] = [
  'Hook',
  'Cut',
  'Pace',
  'Sound',
  'Payoff',
  'Export',
];

// ---------------------------------------------------------------------------
// Workflow
// ---------------------------------------------------------------------------

export const workflowCopy =
  'I keep edits organised from rough cut to final export, with clean timelines, clear review versions, captions where needed and platform-ready deliverables for web, social and client approval.';

export const workflowTools: string[] = [
  'Premiere Pro',
  'After Effects',
  'Photoshop',
  'Adobe Creative Cloud Suite',
  'Adobe Audition',
  'DaVinci Resolve',
];

export const workflowPipeline: string[] = [
  'Ingest',
  'Rough cut',
  'Structure',
  'Sound',
  'Captions',
  'Review',
  'Export',
];

export const workflowProcess: string[] = [
  'Captions and subtitles',
  'Sound polish',
  'Colour correction',
  'Multi-format exports',
  'Revision-ready delivery',
];

// ---------------------------------------------------------------------------
// EDL footer rows (fake editorial signature detail)
// ---------------------------------------------------------------------------

export type EdlRow = { n: string; label: string; tc: string };

export const edlRows: EdlRow[] = [
  { n: '001', label: 'HERO', tc: '00:00:00:00 - 00:00:08:12' },
  { n: '002', label: 'SELECTED', tc: '00:00:08:12 - 00:01:32:00' },
  { n: '003', label: 'DECISIONS', tc: '00:01:32:00 - 00:02:14:08' },
  { n: '004', label: 'RANGE', tc: '00:02:14:08 - 00:02:48:00' },
  { n: '005', label: 'CONTACT', tc: '00:02:48:00 - 00:03:00:00' },
];
