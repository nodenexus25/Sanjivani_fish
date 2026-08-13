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
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Fresh%20Rohu%20fish%20swimming%20in%20clear%20pond%20water%2C%20silver%20scales%2C%20aquaculture%20photography&image_size=square_hd',
  },
  {
    id: 'katla',
    commonName: 'Katla',
    scientificName: 'Catla catla',
    marathiLabel: 'काटला',
    category: ['freshwater', 'ready'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Katla%20fish%20large%20silver%20carp%20in%20earthen%20pond%2C%20Indian%20major%20carp%2C%20aquaculture%20farm&image_size=square_hd',
  },
  {
    id: 'mrigal',
    commonName: 'Mrigal',
    scientificName: 'Cirrhinus cirrhosus',
    marathiLabel: 'मृगाल',
    category: ['freshwater', 'ready'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Mrigal%20carp%20fish%20in%20shallow%20water%2C%20bottom%20feeder%2C%20Indian%20aquaculture&image_size=square_hd',
  },
  {
    id: 'tilapia',
    commonName: 'Tilapia',
    scientificName: 'Oreochromis niloticus',
    marathiLabel: 'तिलापिया',
    category: ['biofloc', 'ready'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Tilapia%20fish%20in%20biofloc%20tank%20green%20water%2C%20intensive%20aquaculture%2C%20high%20density%20farming&image_size=square_hd',
  },
  {
    id: 'pangasius',
    commonName: 'Pangasius',
    scientificName: 'Pangasianodon hypophthalmus',
    marathiLabel: 'पांगासियस',
    category: ['biofloc', 'ready'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Pangasius%20catfish%20swimming%20in%20biofloc%20cultivation%20tank%2C%20basa%20fish%20aquaculture&image_size=square_hd',
  },
  {
    id: 'common-carp',
    commonName: 'Common Carp',
    scientificName: 'Cyprinus carpio',
    marathiLabel: 'कॉमन कार्प',
    category: ['freshwater'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Common%20carp%20fish%20in%20pond%20with%20reflection%2C%20scaled%20carp%2C%20traditional%20pond%20culture&image_size=square_hd',
  },
  {
    id: 'grass-carp',
    commonName: 'Grass Carp',
    scientificName: 'Ctenopharyngodon idella',
    marathiLabel: 'ग्रास कार्प',
    category: ['freshwater'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Grass%20carp%20fish%20near%20aquatic%20plants%20in%20pond%2C%20herbivorous%20fish%20farming&image_size=square_hd',
  },
  {
    id: 'silver-carp',
    commonName: 'Silver Carp',
    scientificName: 'Hypophthalmichthys molitrix',
    marathiLabel: 'सिल्व्हर कार्प',
    category: ['freshwater'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Silver%20carp%20jumping%20in%20pond%2C%20filter%20feeding%20fish%2C%20polyculture%20aquaculture&image_size=square_hd',
  },
  {
    id: 'prawn',
    commonName: 'Freshwater Prawn',
    scientificName: 'Macrobrachium rosenbergii',
    marathiLabel: 'कोळंबी',
    category: ['freshwater', 'biofloc', 'ready'],
    image: 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Giant%20river%20prawn%20freshwater%20scampi%20in%20cultivation%20tank%2C%20Macrobrachium%20rosenbergii&image_size=square_hd',
  },
];
