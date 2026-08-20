export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  marathiLabel: string;
  category: ('freshwater' | 'biofloc' | 'ready')[];
  image: string;
}

export const species: Species[] = [
  {
    id: 'rohu',
    commonName: 'Rohu',
    scientificName: 'Labeo rohita',
    marathiLabel: 'रोहू',
    category: ['freshwater', 'ready'],
    image: '/rohu.webp',
  },
  {
    id: 'katla',
    commonName: 'Katla',
    scientificName: 'Catla catla',
    marathiLabel: 'काटला',
    category: ['freshwater', 'ready'],
    image: '/katla.webp',
  },
  {
    id: 'mrigal',
    commonName: 'Mrigal',
    scientificName: 'Cirrhinus cirrhosus',
    marathiLabel: 'मृगाल',
    category: ['freshwater', 'ready'],
    image: '/mrigal.webp',
  },
  {
    id: 'tilapia',
    commonName: 'Tilapia',
    scientificName: 'Oreochromis niloticus',
    marathiLabel: 'तिलापिया',
    category: ['biofloc', 'ready'],
    image: '/tilapia.jpg',
  },
  {
    id: 'pangasius',
    commonName: 'Pangasius',
    scientificName: 'Pangasianodon hypophthalmus',
    marathiLabel: 'पांगासियस',
    category: ['biofloc', 'ready'],
    image: '/Pangasius.webp',
  },
  {
    id: 'common-carp',
    commonName: 'Common Carp',
    scientificName: 'Cyprinus carpio',
    marathiLabel: 'कॉमन कार्प',
    category: ['freshwater'],
    image: '/Common Carp.webp',
  },
  {
    id: 'grass-carp',
    commonName: 'Grass Carp',
    scientificName: 'Ctenopharyngodon idella',
    marathiLabel: 'ग्रास कार्प',
    category: ['freshwater'],
    image: '/Grass Carp.jpg',
  },
  {
    id: 'silver-carp',
    commonName: 'Silver Carp',
    scientificName: 'Hypophthalmichthys molitrix',
    marathiLabel: 'सिल्व्हर कार्प',
    category: ['freshwater'],
    image: '/Silver Carp.webp',
  },
  {
    id: 'prawn',
    commonName: 'Freshwater Prawn',
    scientificName: 'Macrobrachium rosenbergii',
    marathiLabel: 'कोळंबी',
    category: ['freshwater', 'biofloc', 'ready'],
    image: '/Freshwater Prawn.webp',
  },
];
