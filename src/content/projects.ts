export type Project = {
  name: string;
  sector: string;
  outcome: string;
  type: string;
  description: string;
  image: string;
};

export const projects: Project[] = [
  { name: 'Northstar Field Guide', sector: 'Climate operations platform', outcome: '42% faster reporting', type: 'Product system', description: 'A shared field guide for teams turning fragmented climate operations into clear, useful action.', image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Common Thread', sector: 'Credit union onboarding', outcome: '3.1x completion rate', type: 'Service redesign', description: 'A calmer onboarding service replacing institutional friction with useful moments of trust.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85' },
  { name: 'Lumen House', sector: 'Boutique hotel group', outcome: 'Beta in 18 days', type: 'Launch platform', description: 'A launch platform making a new kind of stay tangible before opening day.', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85' },
];
