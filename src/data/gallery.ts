export interface GalleryImage {
  id: string;
  title: string;
  caption: string;
  category: 'pond' | 'biofloc' | 'harvest' | 'visit' | 'training';
  image: string;
}

export const gallery: GalleryImage[] = [
  {
    id: 'pond-aerial',
    title: 'Pond Complex',
    caption: 'Aerial view — Kopargaon hatchery ponds',
    category: 'pond',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Aerial%20view%20of%20large%20fish%20farm%20ponds%20in%20rows%2C%20rural%20Maharashtra%2C%20agriculture%20landscape%2C%20morning%20light&image_size=landscape_4_3',
  },
  {
    id: 'biofloc-row',
    title: 'Biofloc Tanks',
    caption: 'Indoor biofloc unit — 40-tank cluster',
    category: 'biofloc',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Rows%20of%20circular%20biofloc%20fish%20farming%20tanks%20with%20aerators%20running%2C%20industrial%20indoor%20aquaculture%20facility&image_size=landscape_4_3',
  },
  {
    id: 'hatchery-tanks',
    title: 'Hatchery',
    caption: 'Egg incubation & larval rearing hall',
    category: 'pond',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Fish%20hatchery%20interior%20with%20circular%20incubation%20tanks%2C%20clear%20flowing%20water%2C%20carp%20seed%20production&image_size=landscape_4_3',
  },
  {
    id: 'harvest-1',
    title: 'Net Harvest',
    caption: 'Carp harvest — traditional seine net',
    category: 'harvest',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Farmers%20harvesting%20fish%20with%20seine%20net%20in%20pond%2C%20team%20pulling%20net%2C%20silver%20carp%20splashing%2C%20rural%20India&image_size=landscape_4_3',
  },
  {
    id: 'harvest-2',
    title: 'Market Ready',
    caption: 'Graded Rohu — dispatch to Mumbai',
    category: 'harvest',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Freshly%20harvested%20Rohu%20fish%20arranged%20in%20crates%20on%20ice%2C%20market%20ready%20graded%20carp%2C%20wholesale%20distribution&image_size=landscape_4_3',
  },
  {
    id: 'visit-1',
    title: 'Farmer Visit',
    caption: 'On-site pond consultation — Shirdi taluka',
    category: 'visit',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Aquaculture%20extension%20officer%20consulting%20farmer%20at%20pond%20bank%2C%20clipboard%20water%20test%20kit%2C%20Maharashtra%20village&image_size=landscape_4_3',
  },
  {
    id: 'training-1',
    title: 'Classroom',
    caption: 'Biofloc training — 5th batch 2025',
    category: 'training',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Indian%20farmers%20in%20classroom%20aquaculture%20training%20session%2C%20presentation%20on%20screen%2C%20rural%20training%20hall&image_size=landscape_4_3',
  },
  {
    id: 'aerator',
    title: 'Aeration',
    caption: 'Paddlewheel aerators at dawn',
    category: 'pond',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Paddlewheel%20aerators%20running%20in%20fish%20pond%20at%20sunrise%2C%20spraying%20water%2C%20early%20morning%20mist%2C%20aquaculture%20farm&image_size=landscape_4_3',
  },
  {
    id: 'feed-plant',
    title: 'Feed Mill',
    caption: 'Extruder line — floating pellet production',
    category: 'visit',
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Floating%20fish%20feed%20pellet%20extrusion%20plant%20interior%2C%20stainless%20steel%20machinery%2C%20workers%20packing%20bags&image_size=landscape_4_3',
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
