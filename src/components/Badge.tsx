import React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from '../theme';

export default function Badge({ text }: { text: string }) {
  const { colors, spacing, radii, type } = useTheme();

  // Cast Pressable to any to fix Snack JSX type bug
  const TextAny: any = Text;
  const ViewAny: any = View;

  return (
    <ViewAny style={{ backgroundColor: colors.surface, paddingVertical: spacing(1), paddingHorizontal: spacing(2),
      borderRadius: radii.sm, borderWidth: 1, borderColor: colors.border, marginRight: spacing(1.5), marginTop: spacing(1.5) }}>
      <TextAny style={[type.caption, { color: colors.muted }]}>{text}</TextAny>
    </ViewAny>
  );
}
