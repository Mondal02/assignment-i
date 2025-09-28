import React, { useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useTheme } from '../theme';
import { ITEMS } from '../data/items';
import OutfitCard from '../components/OutfitCard';
import Skeleton from '../components/Skeleton';
import { useStore } from '../store';

export default function Collections() {
  const { spacing, type } = useTheme();
  const s = useStore();
 const ViewAny: any = View;
  const TextAny:  any = Text;
  const ScrollViewAny: any= ScrollView;

  useEffect(() => { s.simulateLoading(500); }, []);

  return (
    <ViewAny style={{ flex: 1, padding: spacing(4) }}>
      <TextAny style={[type.h1, { marginBottom: spacing(3) }]}>Collections</TextAny>
      {s.loading ? (
        <ScrollViewAny horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing(3) }}>
          <Skeleton h={220} w={280} r={16} />
          <Skeleton h={220} w={280} r={16} />
          <Skeleton h={220} w={280} r={16} />
        </ScrollViewAny>
      ) : (
        <ScrollViewAny horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: spacing(3) }}>
          {[0, 1, 2].map(i => {
            const parts = ITEMS.slice(i, i + 3).map(it => ({ label: it.category, image: it.image }));
            return <OutfitCard key={i} parts={parts} title={`Collection ${i+1}`} tags={['Curated']} />;
          })}
        </ScrollViewAny>
      )}
    </ViewAny>
  );
}
