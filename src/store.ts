import { create } from 'zustand';
import { ITEMS, PRESETS, Filters, Item } from './data/items';

type Screen = 'ItemsPreview' | 'Outfits' | 'Collections';

type State = {
  screen: Screen;
  items: Item[];
  filters: Filters;
  activeOutfitIndex: number; // for carousel
  loading: boolean;
  setScreen: (s: Screen) => void;
  toggleFilter: (group: keyof Filters, value: any) => void;
  clearFilter: (group: keyof Filters, value?: any) => void;
  setSearch: (q: string) => void;
  nextOutfit: () => void;
  prevOutfit: () => void;
  simulateLoading: (ms?: number) => Promise<void>;
};

const initialFilters: Filters = {
  category: [],
  color: [],
  style: [],
  search: '',
};

export const useStore = create<State>((set, get) => ({
  screen: 'ItemsPreview',
  items: ITEMS,
  filters: initialFilters,
  activeOutfitIndex: 0,
  loading: false,
  setScreen: (s) => set({ screen: s }),
  toggleFilter: (group, value) => {
    if (group === 'search') return;
    const next = new Set<any>((get().filters as any)[group]);
    next.has(value) ? next.delete(value) : next.add(value);
    set({ filters: { ...get().filters, [group]: Array.from(next) } });
  },
  clearFilter: (group, value) => {
    if (group === 'search') {
      set({ filters: { ...get().filters, search: '' } });
    } else if (value === undefined) {
      set({ filters: { ...get().filters, [group]: [] } });
    } else {
      const rest = (get().filters as any)[group].filter((v: any) => v !== value);
      set({ filters: { ...get().filters, [group]: rest } });
    }
  },
  setSearch: (q) => set({ filters: { ...get().filters, search: q } }),
  nextOutfit: () => {
    const max = PRESETS.topBottomFootwearTriples.length - 1;
    set({ activeOutfitIndex: Math.min(get().activeOutfitIndex + 1, max) });
  },
  prevOutfit: () => {
    set({ activeOutfitIndex: Math.max(get().activeOutfitIndex - 1, 0) });
  },
  simulateLoading: async (ms = 600) => {
    set({ loading: true });
    await new Promise((r) => setTimeout(r, ms));
    set({ loading: false });
  },
}));

export const selectFilteredItems = (state: State): Item[] => {
  const { items, filters } = state;
  return items.filter((it) => {
    const byCategory = !filters.category.length || filters.category.includes(it.category);
    const byColor = !filters.color.length || filters.color.includes(it.color);
    const byStyle = !filters.style.length || filters.style.includes(it.style);
    const bySearch = !filters.search || it.title.toLowerCase().includes(filters.search.toLowerCase());
    return byCategory && byColor && byStyle && bySearch;
  });
};
