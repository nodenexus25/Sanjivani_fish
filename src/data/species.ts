export interface Species {
  id: string;
  commonName: string;
  scientificName: string;
  marathiLabel: string;
  category: ('big-pond' | 'small-pond')[];
  image: string;
}

export const species: Species[] = [
  {
    id: 'rohu',
    commonName: 'Rohu',
    scientificName: 'Labeo rohita',
    marathiLabel: 'रोहू',
    category: ['big-pond'],
    image: '/rohu.webp',
  },
  {
    id: 'katla',
    commonName: 'Katla',
    scientificName: 'Catla catla',
    marathiLabel: 'काटला',
    category: ['big-pond'],
    image: '/katla.webp',
  },
  {
    id: 'mrigal',
    commonName: 'Mrigal',
    scientificName: 'Cirrhinus cirrhosus',
    marathiLabel: 'मृगाळ',
    category: ['big-pond'],
    image: '/mrigal.webp',
  },
  {
    id: 'kombada',
    commonName: 'Kombada',
    scientificName: 'Cyprinus carpio',
    marathiLabel: 'कोंबडा',
    category: ['big-pond'],
    image: '/Common Carp.webp',
  },
  {
    id: 'chopada',
    commonName: 'Chopada',
    scientificName: 'Ctenopharyngodon idella',
    marathiLabel: 'चोपडा',
    category: ['big-pond'],
    image: '/Grass Carp.jpg',
  },
  {
    id: 'singhi',
    commonName: 'Singhi',
    scientificName: 'Heteropneustes fossilis',
    marathiLabel: 'शिंगी',
    category: ['small-pond'],
    image: '/singhi.jpg',
  },
  {
    id: 'pabda',
    commonName: 'Pabda',
    scientificName: 'Ompok bimaculatus',
    marathiLabel: 'पाबडा',
    category: ['small-pond'],
    image: '/pabda.jpg',
  },
  {
    id: 'koi',
    commonName: 'Koi',
    scientificName: 'Anabas testudineus',
    marathiLabel: 'कोई',
    category: ['small-pond'],
    image: '/koi.jpg',
  },
  {
    id: 'murrel',
    commonName: 'Murrel',
    scientificName: 'Channa striata',
    marathiLabel: 'मुरेल',
    category: ['small-pond'],
    image: '/murrel.jpg',
  },
];
