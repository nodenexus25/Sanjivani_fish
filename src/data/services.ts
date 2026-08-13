import type { IconType } from 'react-icons';
import {
  GiFishEggs,
  GiBubbles,
  GiFlour,
  GiDeliveryDrone,
  GiTeacher,
  GiShoppingCart,
  GiGraduateCap,
  GiFactory,
} from 'react-icons/gi';

export interface ServiceItem {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: IconType;
}

export const services: ServiceItem[] = [
  {
    id: 'hatchery',
    title: 'Fish Hatchery',
    shortTitle: 'Hatchery',
    description: 'Quality seed production of Indian major and exotic carps.',
    icon: GiFishEggs,
  },
  {
    id: 'biofloc',
    title: 'Biofloc Ponds',
    shortTitle: 'Biofloc',
    description: 'High-density, low-water biofloc tank installations and guidance.',
    icon: GiBubbles,
  },
  {
    id: 'feed-plant',
    title: 'Fish Feed Plant',
    shortTitle: 'Feed Plant',
    description: 'Nutritionally balanced floating and sinking feed, manufactured on-site.',
    icon: GiFlour,
  },
  {
    id: 'transport',
    title: 'Seed & Brood Transport',
    shortTitle: 'Transport',
    description: 'Oxygenated vehicles for safe live seed and broodfish delivery.',
    icon: GiDeliveryDrone,
  },
  {
    id: 'technical',
    title: 'Technical Guidance',
    shortTitle: 'Guidance',
    description: 'Site surveys, pond preparation, stocking and harvest advisory.',
    icon: GiTeacher,
  },
  {
    id: 'marketing',
    title: 'Fish Marketing',
    shortTitle: 'Marketing',
    description: 'Harvest aggregation, grading and linkage to urban wholesale markets.',
    icon: GiShoppingCart,
  },
  {
    id: 'training',
    title: 'Training & Capacity Building',
    shortTitle: 'Training',
    description: 'Practical on-site and classroom programs for new and existing farmers.',
    icon: GiGraduateCap,
  },
  {
    id: 'equipment',
    title: 'Equipment Supply',
    shortTitle: 'Equipment',
    description: 'Aerators, pumps, nets, biofloc liners and farm accessories.',
    icon: GiFactory,
  },
];
