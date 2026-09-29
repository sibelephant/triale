export const proofPoints = [
  'Small teams, senior only — no bench, no hand-off to a team you never met',
  'Kickoff in two weeks, or we tell you why we are not the right fit',
  'You own the code, the repos, and the decisions from day one',
  'Fixed scope, visible progress, nothing invoiced you did not approve',
];

export const numbers = [
  { value: '40+', label: 'products shipped' },
  { value: '14 days', label: 'median kickoff' },
  { value: '36 mo', label: 'average engagement' },
  { value: '100%', label: 'code owned by you' },
];

export const engagementModels = [
  { name: 'Discovery workshop', body: 'Build momentum without the wait. We cut through the brief in a few focused days and leave you with a direction you can actually staff and fund.' },
  { name: 'Project outsourcing', body: 'A full team ready to deliver, for a scope that is already clear. From architecture through deployment, with a single accountable lead.' },
  { name: 'Team extension', body: 'Add capability without reworking your org chart. We bring in skills that are rare or slow to hire and fold them into your delivery rituals.' },
  { name: 'Dedicated team', body: 'Scale with a team aligned to your goals, pace, and product vision — engineers who embed as a long-term extension of your organisation.' },
];

export const faqs = [
  { q: 'How much does a project cost?', a: 'Every project is scoped individually, with a price that reflects your goals, timeline, and stack. You will see where every dollar goes before anything is signed.' },
  { q: 'How long does it take to build?', a: 'Most products reach a usable release in three to six months. Larger work with integrations, security, or compliance takes longer — but progress is visible from the first sprint, not the last.' },
  { q: 'How quickly can you start?', a: 'Typically two weeks from the first call. If we are not the right fit for the problem, we say so in the first conversation rather than the third.' },
  { q: 'What do you work with?', a: 'TypeScript and React on the front, Node, Python, and Go behind it, on AWS, Azure, and Google Cloud. We also modernise older systems when that is the real job.' },
  { q: 'Do you take on AI work?', a: 'Yes, but narrowly. We are most useful on AI that has to survive contact with production data: retrieval, evaluation, cost control, and the unglamorous parts in between.' },
  { q: 'How do you work with our team?', a: 'We join your tools, your standups, and your sprint rhythm rather than asking you to change. Work, decisions, and status stay visible throughout.' },
  { q: 'Can we scale the team up or down?', a: 'Yes, in either direction within days. If you need to pause, pause. If you need two more engineers for a release, we find them and they start.' },
  { q: 'Who owns the intellectual property?', a: 'You do, entirely. Every deliverable, repository, and line of code is yours from the first commit. We put it in writing before we start.' },
];

type FooterLink = { label: string; to?: string; href?: string };

export const footerColumns: { heading: string; links: FooterLink[] }[] = [
  {
    heading: 'Company',
    links: [
      { label: 'About us', to: '/about' },
      { label: 'How we work', to: '/about#principles' },
      { label: 'Selected work', to: '/work' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Expertise',
    links: [
      { label: 'Product strategy', to: '/services' },
      { label: 'Brand and interface', to: '/services' },
      { label: 'Full-stack delivery', to: '/services' },
      { label: 'Engagement models', to: '/services#models' },
    ],
  },
  {
    heading: 'Engagement',
    links: [
      { label: 'Start a conversation', to: '/contact' },
      { label: 'hello@triale.studio', href: 'mailto:hello@triale.studio' },
    ],
  },
];
