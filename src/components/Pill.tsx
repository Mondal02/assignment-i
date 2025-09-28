import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useTheme } from '../theme';

export default function Pill({ text, onClear }: { text: string; onClear: () => void }) {
  const { colors, spacing, radii, type } = useTheme();

  // Cast Pressable to any to fix Snack JSX type bug
  const PressableAny: any = Pressable;
  const TextAny: any = Text;
  const ViewAny: any = View;

  return (
    <ViewAny style={{
      flexDirection: 'row', alignItems: 'center',
      backgroundColor: colors.surface, borderWidth: 1, borderColor: colors.border,
      paddingVertical: spacing(1.5), paddingHorizontal: spacing(2), borderRadius: radii.lg, marginRight: spacing(2)
    }}>
      <TextAny style={[type.caption, { color: colors.text, marginRight: spacing(2) }]}>{text}</TextAny>
      <PressableAny accessibilityLabel={`Clear ${text}`} onPress={onClear} style={{ padding: spacing(1) }}>
        <TextAny style={[type.caption, { color: colors.muted }]}>✕</TextAny>
      </PressableAny>
    </ViewAny>
  );
}
