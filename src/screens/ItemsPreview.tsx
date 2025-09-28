import React, { useEffect } from 'react';
import { View, Text, FlatList, Dimensions } from 'react-native';
import { useStore, selectFilteredItems } from '../store';
import { useTheme } from '../theme';
import FilterBar from '../components/FilterBar';
import CardItem from '../components/CardItem';
import Skeleton from '../components/Skeleton';
import Animated, { FadeInUp, Layout } from 'react-native-reanimated';

export default function ItemsPreview() {
  const s = useStore();
  const { spacing, type } = useTheme();
  const data = selectFilteredItems(s);
  const numColumns = Dimensions.get('window').width > 480 ? 2 : 1;

  useEffect(() => { s.simulateLoading(400); }, []);

  const empty = !s.loading && data.length === 0;
  const TextAny: any = Text;
  const ViewAny: any = View;
  const AnimatedView: any = Animated.View;
  const FlatListAny: any = FlatList;

  return (
    <ViewAny style={{ flex: 1, padding: spacing(4) }}>
      <TextAny style={[type.h1, { marginBottom: spacing(2) }]}>Items</TextAny>
      <FilterBar />
      {s.loading ? (
        <ViewAny style={{ gap: spacing(3) }}>
          <Skeleton h={220} w="100%" r={16} />
          <Skeleton h={220} w="100%" r={16} />
        </ViewAny>
      ) : empty ? (
        <TextAny style={type.body}>No items match your filters.</TextAny>
      ) : (
        <FlatListAny
          data={data}
          key={numColumns}
          numColumns={numColumns}
          keyExtractor={(i:any) => i.id}
          renderItem={({ item }:any) => (
            <AnimatedView entering={FadeInUp.springify().damping(14)} layout={Layout.springify()}>
              <ViewAny style={{ paddingRight: spacing(3), width: numColumns === 2 ? '50%' : '100%' }}>
                <CardItem
                  title={item.title}
                  image={item.image}
                  category={item.category}
                  color={item.color}
                  styleTags={item.tags}
                />
              </ViewAny>
            </AnimatedView>
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: spacing(8) }}
        />
      )}
    </ViewAny>
  );
}
