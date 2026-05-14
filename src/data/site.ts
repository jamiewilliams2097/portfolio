export const site = {
  name: 'Jamie Williams',
  fullName: 'Jamie A Williams',
  role: 'Video Editor & Shoot Director',
  location: 'Derbyshire, UK',
  availability: 'Available for freelance — UK-wide, remote edit-only worldwide.',

  // TODO: swap to a branded address (e.g. hello@jamiewilliams.video) once the domain is configured.
  email: 'jamiewilliams2097@gmail.com',
  phone: '07870 716816',

  url: 'https://jamiewilliamscreative.co.uk',

  positioning: 'Cuts with pace, clarity and emotional timing.',
  subheading:
    'Video editor and shoot director making sharp, practical films for brands, agencies and social. Derbyshire-based, UK-wide.',
  description:
    'Jamie Williams — freelance video editor and shoot director based in Derbyshire. Practical, polished work for brands, agencies and social.',

  // TODO: keep this in sync with what you're actually working on, or set to '' to hide the footer line.
  currentlyEditing: '' as string,

  // TODO: replace with the live Vimeo showreel ID once cut.
  showreelVimeoId: '76979871',

  // TODO: drop the PDF in /public so this resolves.
  cvPdfPath: '/JamieWilliams-CV.pdf',

  // TODO: drop a 1200x630 still in /public so OG/Twitter cards have artwork.
  ogImage: '/og-default.jpg',

  // TODO: replace with real profile URLs.
  socials: {
    instagram: 'https://www.instagram.com/',
    linkedin: 'https://www.linkedin.com/',
    vimeo: 'https://vimeo.com/',
  },

  // TODO: paste a Cloudflare Web Analytics beacon token to enable analytics.
  // Find it under Cloudflare dashboard -> Web Analytics -> your site -> JS snippet.
  cloudflareAnalyticsToken: '' as string,
} as const;

export type Site = typeof site;
