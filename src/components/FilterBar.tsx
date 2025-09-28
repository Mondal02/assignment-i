import React, { useMemo } from 'react';
import { TextInput, View, Text, ScrollView } from 'react-native';
import { useStore } from '../store';
import Chip from './Chip';
import Pill from './Pill';
import { useTheme } from '../theme';

const CATEGORIES = ['Top','Bottom','Footwear','Outerwear'] as const;
const COLORS = ['Black','White','Blue','Brown','Green','Gray'] as const;
const STYLES = ['Casual','Formal','Sport','Street'] as const;

export default function FilterBar() {
  const { filters, toggleFilter, clearFilter, setSearch } = useStore();
  const { spacing, type, colors, radii } = useTheme();
  const ScrollViewAny: any = ScrollView;
  const ViewAny: any = View;
  const TextInputAny: any = TextInput;

  const activePills = useMemo(() => {
    const pills: { text: string; clear: () => void }[] = [];
    filters.category.forEach(v => pills.push({ text: `Category: ${v}`, clear: () => clearFilter('category', v) }));
    filters.color.forEach(v => pills.push({ text: `Color: ${v}`, clear: () => clearFilter('color', v) }));
    filters.style.forEach(v => pills.push({ text: `Style: ${v}`, clear: () => clearFilter('style', v) }));
    if (filters.search) pills.push({ text: `“${filters.search}”`, clear: () => clearFilter('search') });
    return pills;
  }, [filters]);

  return (
    <ViewAny style={{ gap: spacing(3), marginBottom: spacing(3) }}>
      <TextInputAny
        placeholder="Search items"
        value={filters.search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1, borderColor: colors.border, borderRadius: radii.lg,
          paddingHorizontal: spacing(3), paddingVertical: spacing(3), fontSize: 14,
        }}
        accessibilityLabel="Search items"
      />
      <ScrollViewAny horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: spacing(2) }}>
        {CATEGORIES.map(c => <Chip key={c} label={c} active={filters.category.includes(c)} onPress={() => toggleFilter('category', c)} />)}
        {COLORS.map(c => <Chip key={c} label={c} active={filters.color.includes(c)} onPress={() => toggleFilter('color', c)} />)}
        {STYLES.map(s => <Chip key={s} label={s} active={filters.style.includes(s)} onPress={() => toggleFilter('style', s)} />)}
      </ScrollViewAny>
      {!!activePills.length && (
        <ScrollViewAny horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: spacing(2) }}>
          {activePills.map((p, i) => <Pill key={i} text={p.text} onClear={p.clear} />)}
        </ScrollViewAny>
      )}
    </ViewAny>
  );
}
