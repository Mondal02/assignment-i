import React from 'react';
import { View, Text, Image } from 'react-native';
import { useTheme } from '../theme';
import Badge from './Badge';

export default function OutfitCard({
  parts, title, tags,
}: { parts: { label: string; image: string }[]; title: string; tags: string[]; }) {
  const { spacing, radii, type, shadowCard } = useTheme();
  const TextAny: any = Text;
  const ViewAny: any = View;
  const ImageAny: any = Image;

  return (
    <ViewAny style={{ backgroundColor: 'white', borderRadius: radii.xl, padding: spacing(3), ...shadowCard }}>
      <ViewAny style={{ flexDirection: 'row', gap: spacing(2), marginBottom: spacing(2) }}>
        {parts.map((p) => (
          <ViewAny key={p.label} style={{ flex: 1, alignItems: 'center' }}>
            <ImageAny source={{ uri: p.image }} style={{ width: '100%', height: 120, borderRadius: radii.md }} />
            <TextAny style={[type.caption]}>{p.label}</TextAny>
          </ViewAny>
        ))}
      </ViewAny>
      <TextAny style={[type.h2]}>{title}</TextAny>
      <ViewAny style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: spacing(1) }}>
        {tags.map((t) => <Badge key={t} text={t} />)}
      </ViewAny>
    </ViewAny>
  );
}
