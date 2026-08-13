export interface StatItem {
  id: string;
  value: string;
  label: string;
}

export const stats: StatItem[] = [
  { id: 'farmers', value: '2,400+', label: 'Farmer Members' },
  { id: 'ponds', value: '850', label: 'Ponds under Advisory' },
  { id: 'seed', value: '18 Cr', label: 'Seed Produced / Year' },
  { id: 'tonnage', value: '3,200 T', label: 'Harvest Aggregated' },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    year: '1996',
    title: 'Society Founded',
    description: 'Registered as co-operative under Late Shankarraoji Kolhe.',
  },
  {
    year: '2010',
    title: 'Hatchery Commissioned',
    description: 'Induced breeding & carp seed production facility operational.',
  },
  {
    year: '2021',
    title: 'Re-incorporated as FFPO',
    description: 'Upgraded to Fish Farmer Producer Organization under SFAC guidelines.',
  },
  {
    year: '2024',
    title: 'Biofloc & Feed Plant',
    description: 'New biofloc training center + 10 TPD floating feed mill.',
  },
];
