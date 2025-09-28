export type Item = {
  id: string;
  title: string;
  category: 'Top' | 'Bottom' | 'Footwear' | 'Outerwear';
  color: 'Black' | 'White' | 'Blue' | 'Brown' | 'Green' | 'Gray';
  style: 'Casual' | 'Formal' | 'Sport' | 'Street';
  image: string; // remote image url
  tags: string[];
};

export const ITEMS: Item[] = [
  {
    id: '1',
    title: 'Relaxed Tee',
    category: 'Top',
    color: 'White',
    style: 'Casual',
    image: 'https://picsum.photos/seed/tee/400/400',
    tags: ['Cotton', 'Basic', 'Summer'],
  },
  { id: '2', title: 'Slim Chinos', category: 'Bottom', color: 'Brown', style: 'Casual',
    image: 'https://picsum.photos/seed/chinos/400/400', tags: ['Stretch', 'Everyday'] },
  { id: '3', title: 'Leather Sneakers', category: 'Footwear', color: 'Black', style: 'Street',
    image: 'https://picsum.photos/seed/sneakers/400/400', tags: ['Comfort', 'All-day'] },
  { id: '4', title: 'Denim Jacket', category: 'Outerwear', color: 'Blue', style: 'Street',
    image: 'https://picsum.photos/seed/denim/400/400', tags: ['Layering', 'Midweight'] },
  { id: '5', title: 'Oxford Shirt', category: 'Top', color: 'Blue', style: 'Formal',
    image: 'https://picsum.photos/seed/oxford/400/400', tags: ['Office', 'Classic'] },
  { id: '6', title: 'Tailored Trousers', category: 'Bottom', color: 'Gray', style: 'Formal',
    image: 'https://picsum.photos/seed/trousers/400/400', tags: ['Wool Blend'] },
  { id: '7', title: 'Trail Runners', category: 'Footwear', color: 'Green', style: 'Sport',
    image: 'https://picsum.photos/seed/runners/400/400', tags: ['Grip', 'Outdoor'] },
  { id: '8', title: 'Hooded Shell', category: 'Outerwear', color: 'Black', style: 'Sport',
    image: 'https://picsum.photos/seed/shell/400/400', tags: ['Water-resist'] },
  { id: '9', title: 'Polo Shirt', category: 'Top', color: 'Green', style: 'Casual',
    image: 'https://picsum.photos/seed/polo/400/400', tags: ['Weekend'] },
  { id: '10', title: 'Chelsea Boots', category: 'Footwear', color: 'Brown', style: 'Formal',
    image: 'https://picsum.photos/seed/chelsea/400/400', tags: ['Leather', 'Dress'] },
];

export const PRESETS = {
  user: { name: 'Guest' },
  occasions: ['Work', 'Weekend', 'Gym', 'Evening'] as const,
  topBottomFootwearTriples: [
    // Compose “outfits” by ids you see in video
    ['5','6','10'], // oxford + trousers + chelsea
    ['1','2','3'],  // tee + chinos + sneakers
    ['4','2','3'],  // denim + chinos + sneakers
  ],
};

export type Filters = {
  category: Item['category'][]; // multi-select
  color: Item['color'][];       // multi-select
  style: Item['style'][];       // multi-select
  search: string;
};
