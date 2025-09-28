import React, { useMemo } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { useStore } from '../store';
import { PRESETS, ITEMS } from '../data/items';
import { useTheme } from '../theme';
import OutfitCard from '../components/OutfitCard';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, interpolate } from 'react-native-reanimated';
import { Pressable } from 'react-native';

export default function Outfits() {
  const { spacing, type } = useTheme();
  const { activeOutfitIndex, nextOutfit, prevOutfit } = useStore();
  const width = Dimensions.get('window').width;
  const x = useSharedValue(0);
  const ViewAny: any = View;
  const TextAny:  any = Text;
  const PressableAny: any= Pressable;
  const AnimatedView: any = Animated.View;
  
  const outfit = useMemo(() => {
    const ids = PRESETS.topBottomFootwearTriples[activeOutfitIndex] ?? [];
    const parts = ids
      .map(id => ITEMS.find(i => i.id === id))
      .filter(Boolean)
      .map(i => ({ label: i!.category, image: i!.image }));
    const title = parts.map(p => p.label).join(' • ');
    const tags = ['Preset', 'Recommended'];
    return { parts, title, tags };
  }, [activeOutfitIndex]);

  const aStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: interpolate(x.value, [-1,0,1], [-width, 0, width]) }],
  }));

 const shift = (dir: number) => {
    x.value = withSpring(dir, { damping: 14, stiffness: 120 }, () => {
      x.value = 0;
    });
    if (dir === 1) nextOutfit();
    else prevOutfit();
  };

  return (
    <ViewAny style={{ flex: 1, padding: spacing(4) }}>
      <TextAny style={[type.h1, { marginBottom: spacing(2) }]}>Outfits</TextAny>
      <ViewAny style={{ flexDirection: 'row', alignItems: 'center', gap: spacing(2), marginBottom: spacing(3) }}>
        <PressableAny accessibilityLabel="Previous outfit" onPress={() => shift(-1)} style={{ padding: spacing(2) }}><TextAny>◀</TextAny></PressableAny>
        <PressableAny accessibilityLabel="Next outfit" onPress={() => shift(1)} style={{ padding: spacing(2) }}><TextAny>▶</TextAny></PressableAny>
      </ViewAny>
      <AnimatedView style={[aStyle]}>
        <OutfitCard parts={outfit.parts} title={outfit.title} tags={outfit.tags} />
      </AnimatedView>
    </ViewAny>
  );
}
