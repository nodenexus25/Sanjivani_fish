export interface StatItem {
  id: string;
  label: string;
  image: string;
}

export const stats: StatItem[] = [
  {
    id: 'farmers',
    label: 'Farmer Members',
    image: '/three decaded section/Screenshot 2026-09-30 103316.png',
  },
  {
    id: 'ponds',
    label: 'Ponds under Advisory',
    image: '/three decaded section/Screenshot 2026-09-30 103321.png',
  },
  {
    id: 'seed',
    label: 'Seed Produced / Year',
    image: '/three decaded section/Screenshot 2026-09-30 103328.png',
  },
  {
    id: 'tonnage',
    label: 'Harvest Aggregated',
    image: '/three decaded section/Screenshot 2026-09-30 103335.png',
  },
];

export interface Milestone {
  year: string;
  title: string;
  description: string;
  image: string;
}

export const milestones: Milestone[] = [
  {
    year: '1996',
    title: 'Society Founded',
    description: 'Registered as co-operative under Late Shankarraoji Kolhe.',
    image: '/timeline/Screenshot 2026-09-28 144912.png',
  },
  {
    year: '2010',
    title: 'Hatchery Commissioned',
    description: 'Induced breeding & carp seed production facility operational.',
    image: '/timeline/Screenshot 2026-09-28 144924.png',
  },
  {
    year: '2021',
    title: 'Re-incorporated as FFPO',
    description: 'Upgraded to Fish Farmer Producer Organization under SFAC guidelines.',
    image: '/timeline/Screenshot 2026-09-28 144943.png',
  },
  {
    year: '2024',
    title: 'Biofloc & Feed Plant',
    description: 'New biofloc training center & floating feed mill.',
    image: '/timeline/Screenshot 2026-09-28 144958.png',
  },
];
