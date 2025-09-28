import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { useTheme } from '../theme';
import Badge from './Badge';


export default function CardItem({
  title, image, category, color, styleTags, onPress,
}: { title: string; image: string; category: string; color: string; styleTags: string[]; onPress?: () => void; }) {
  const { spacing, radii, type, colors, shadowCard } = useTheme();
  
  // Cast Pressable to any to fix Snack JSX type bug
  const PressableAny: any = Pressable;
  const TextAny: any = Text;
  const ViewAny: any = View;
  const ImageAny: any = Image;

  return (
    <PressableAny onPress={onPress} style={{ flex: 1, minWidth: 160, cursor: 'pointer' as any }} accessibilityRole="button" accessibilityLabel={title}>
      <ViewAny style={{ backgroundColor: 'white', borderRadius: radii.xl, overflow: 'hidden', ...shadowCard }}>
        <ImageAny source={{ uri: image }} style={{ width: '100%', height: 160 }} />
        <ViewAny style={{ padding: spacing(3) }}>
          <TextAny style={[type.body, { fontFamily: 'InterSemiBold' }]} numberOfLines={1}>{title}</TextAny>
          <ViewAny style={{ flexDirection: 'row', marginTop: spacing(2) }}>
            <Badge text={category} />
            <Badge text={color} />
          </ViewAny>
          <ViewAny style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing(1) }}>
            {styleTags.map((t) => <Badge key={t} text={t} />)}
          </ViewAny>
        </ViewAny>
      </ViewAny>
    </PressableAny>
  );
}
