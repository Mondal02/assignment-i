import React from 'react';
import { Pressable, Text, View } from 'react-native';
import Animated, { useSharedValue, withTiming, useAnimatedStyle } from 'react-native-reanimated';
import { useTheme } from '../theme';

export default function Chip({
  label,
  active,
  onPress,
}: {
  label: string;
  active?: boolean;
  onPress?: () => void;
}) {
  const { colors, spacing, radii, type } = useTheme();
  const scale = useSharedValue(1);
  const a = useAnimatedStyle(() => ({ transform: [{ scale: scale.value }] }));

  // Cast Pressable to any to fix Snack JSX type bug
  const PressableAny: any = Pressable;
  const AnimatedView: any = Animated.View;
  const TextAny: any = Text;

  return (
    <PressableAny
      onPressIn={() => (scale.value = withTiming(0.98, { duration: 70 }))}
      onPressOut={() => (scale.value = withTiming(1, { duration: 70 }))}
      onPress={onPress}
      style={{ marginRight: spacing(2), marginBottom: spacing(2) }}
      accessibilityRole="button"
      accessibilityLabel={`${label} filter`}
    >
      <AnimatedView
        style={[
          a,
          {
            backgroundColor: active ? colors.primary : colors.chipBg,
            paddingVertical: spacing(2),
            paddingHorizontal: spacing(3),
            borderRadius: radii.lg,
            borderWidth: 1,
            borderColor: active ? colors.primary : colors.border,
          },
        ]}
      >
        <TextAny
          style={[
            type.body,
            {
              color: active ? 'white' : colors.chipText,
              fontFamily: 'InterSemiBold',
            },
          ]}
        >
          {label}
        </TextAny>
      </AnimatedView>
    </PressableAny>
  );
}
