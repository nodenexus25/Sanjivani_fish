export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  category: 'pond' | 'biofloc' | 'harvest' | 'visit' | 'training';
  image: string;
}

export const gallery: GalleryImage[] = [
  {
    id: 'dsc-2120',
    title: 'Hatchery Floor',
    caption: 'DSC_2120 — indoor carp hatchery facility',
    category: 'pond',
    image: '/gallery/DSC_2120.JPG',
  },
  {
    id: 'dsc-2125',
    title: 'Egg Incubation',
    caption: 'DSC_2125 — egg incubation tanks, carp seed production',
    category: 'pond',
    image: '/gallery/DSC_2125.JPG',
  },
  {
    id: 'dsc-2130',
    title: 'Rearing Hall',
    caption: 'DSC_2130 — larval rearing & nursery operation',
    category: 'pond',
    image: '/gallery/DSC_2130.JPG',
  },
  {
    id: 'wa-53507-1',
    title: 'Team at Pond Bank',
    caption: 'Farmer field visit — pond consultation',
    category: 'visit',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.35.07 PM (1).jpeg",
  },
  {
    id: 'wa-53507-2',
    title: 'Farm Snapshot',
    caption: 'On-site documentation — aquaculture extension team',
    category: 'visit',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.35.07 PM.jpeg",
  },
  {
    id: 'wa-53615-1',
    title: 'Harvest Day',
    caption: 'Carp harvest with traditional seine net',
    category: 'harvest',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.15 PM (1).jpeg",
  },
  {
    id: 'wa-53615-2',
    title: 'Net Full',
    caption: 'Market-ready carp — grading & loading',
    category: 'harvest',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.15 PM (2).jpeg",
  },
  {
    id: 'wa-53616',
    title: 'Biofloc Tanks',
    caption: 'High-density biofloc unit in operation',
    category: 'biofloc',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.16 PM.jpeg",
  },
  {
    id: 'wa-53617-1',
    title: 'Training Session',
    caption: 'Farmer training — practical biofloc demo',
    category: 'training',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.17 PM (1).jpeg",
  },
  {
    id: 'wa-53629',
    title: 'Seed Dispatch',
    caption: 'Quality carp seed — loading for farmer pickup',
    category: 'harvest',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.29 PM.jpeg",
  },
  {
    id: 'wa-53708',
    title: 'Pond Complex',
    caption: 'Aerated pond cluster at Sanjivani farm',
    category: 'pond',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.37.08 PM.jpeg",
  },
  {
    id: 'wa-53709',
    title: 'Aerators at Work',
    caption: 'Paddlewheel aeration — early morning run',
    category: 'pond',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.37.09 PM.jpeg",
  },
  {
    id: 'dsc-2120-b',
    title: 'Hatchery Operations',
    caption: 'Indoor hatchery — broodstock conditioning & spawning setup',
    category: 'pond',
    image: '/gallery/DSC_2120.JPG',
  },
  {
    id: 'dsc-2125-b',
    title: 'Egg Hatching Unit',
    caption: 'Temperature-controlled hatching jars for carp egg incubation',
    category: 'pond',
    image: '/gallery/DSC_2125.JPG',
  },
  {
    id: 'dsc-2130-b',
    title: 'Nursery Management',
    caption: 'Fry rearing tanks — daily water quality & feed monitoring',
    category: 'pond',
    image: '/gallery/DSC_2130.JPG',
  },
  {
    id: 'wa-53507-3',
    title: 'Farmer Consultation',
    caption: 'On-farm advisory — soil & water testing guidance for new farmers',
    category: 'visit',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.35.07 PM (1).jpeg",
  },
  {
    id: 'wa-53615-3',
    title: 'Quality Harvest',
    caption: 'Rohu & Catla harvest — uniform size & premium farm-gate quality',
    category: 'harvest',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.15 PM (1).jpeg",
  },
  {
    id: 'wa-53617-2',
    title: 'Hands-on Training',
    caption: 'Participants learning feed calculation & biofloc C:N ratio tuning',
    category: 'training',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.17 PM (1).jpeg",
  },
  {
    id: 'wa-53708-b',
    title: 'Farm Panorama',
    caption: 'Multiple earthen ponds — integrated aquaculture layout at full capacity',
    category: 'pond',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.37.08 PM.jpeg",
  },
  {
    id: 'wa-53616-b',
    title: 'Biofloc Water Management',
    caption: 'Sludge settling & probiotic maintenance rounds for biofloc systems',
    category: 'biofloc',
    image: "/gallery/WhatsApp Image 2025-05-31 at 5.36.16 PM.jpeg",
  },
];

export interface TrainingItem {
  id: string;
  date: string;
  topic: string;
  duration: string;
}

export const upcomingTraining: TrainingItem[] = [
  {
    id: 't1',
    date: 'Sep 14–15, 2026',
    topic: 'Introduction to Biofloc Aquaculture',
    duration: '2 days · residential',
  },
  {
    id: 't2',
    date: 'Sep 28, 2026',
    topic: 'Pond Preparation & Stocking Management',
    duration: '1 day · on-site',
  },
  {
    id: 't3',
    date: 'Oct 12–13, 2026',
    topic: 'Carp Hatchery Operations (Hands-on)',
    duration: '2 days · hatchery',
  },
  {
    id: 't4',
    date: 'Nov 09, 2026',
    topic: 'Fish Health, Disease & Water Quality',
    duration: '1 day · classroom + lab',
  },
];
