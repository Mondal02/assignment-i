import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Animated, { FadeIn, FadeOut, Layout } from 'react-native-reanimated';
import { useTheme } from '../theme';

// Screens
import ItemsPreview from '../screens/ItemsPreview';
import Outfits from '../screens/Outfits';
import Collections from '../screens/Collections';

export function ScreenManager() {
  const { colors, spacing, type } = useTheme();

  // single state to control active screen
  const [active, setActive] = useState<'items' | 'outfits' | 'collections'>('items');

  // render current screen
  const renderScreen = () => {
    switch (active) {
      case 'items':
        return <ItemsPreview />;
      case 'outfits':
        return <Outfits />;
      case 'collections':
        return <Collections />;
      default:
        return null;
    }
  };

  // Reusable top tab
  const TopTab = ({ name, route }: { name: string; route: typeof active }) => {
    const PressableAny: any = Pressable;
    const TextAny: any = Text;
    const isActive = active === route;
    return (
      <PressableAny
        onPress={() => setActive(route)}
        style={({ hovered }: any) => ({
          paddingVertical: spacing(2),
          paddingHorizontal: spacing(3),
          borderRadius: 10,
          backgroundColor: hovered ? '#EFF6FF' : 'transparent',
        })}
        accessibilityRole="button"
        accessibilityLabel={`${name} tab`}
      >
        <TextAny
          style={[
            type.body,
            {
              color: isActive ? colors.primary : colors.text,
              fontFamily: 'InterSemiBold',
            },
          ]}
        >
          {name}
        </TextAny>
      </PressableAny>
    );
  };

  // Reusable footer button
  const FooterButton = ({
    label,
    icon,
    keyName,
  }: {
    label: string;
    icon: string;
    keyName: typeof active;
  }) => {
    const PressableAny: any = Pressable;
    const TextAny: any = Text;
    const isActive = active === keyName;
    return (
      <PressableAny
        onPress={() => setActive(keyName)}
        accessibilityRole="button"
        accessibilityLabel={label}
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: spacing(2),
          backgroundColor: colors.surface,
        }}
      >
        <Ionicons
          name={icon as any}
          size={22}
          color={isActive ? colors.primary : colors.muted}
          style={{ marginBottom: spacing(0.5) }}
        />
        <TextAny
          style={[
            type.caption,
            {
              fontFamily: 'InterSemiBold',
              color: isActive ? colors.primary : colors.muted,
            },
          ]}
        >
          {label}
        </TextAny>
      </PressableAny>
    );
  };

  const ViewAny: any = View;

  return (
    <ViewAny style={{ flex: 1, backgroundColor: colors.bg }}>
      {/* Top Tab Bar */}
      <ViewAny
        style={{
          paddingHorizontal: spacing(4),
          paddingTop: spacing(3),
          paddingBottom: spacing(2),
          flexDirection: 'row',
          gap: spacing(2),
          borderBottomWidth: 1,
          borderColor: colors.border,
        }}
      >
        <TopTab name="Collections" route="collections" />
        <TopTab name="Outfits" route="outfits" />
        <TopTab name="Items" route="items" />
      </ViewAny>

      {/* Animated content area */}
      <Animated.View
        entering={FadeIn}
        exiting={FadeOut}
        layout={Layout}
        style={{ flex: 1 }}
      >
        {renderScreen()}
      </Animated.View>

      {/* Footer navigation */}
      <ViewAny
        style={{
          flexDirection: 'row',
          borderTopWidth: 1,
          borderTopColor: colors.border,
          backgroundColor: colors.surface,
          shadowColor: colors.shadow,
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 6,
          elevation: 4,
        }}
      >
        <FooterButton icon="home-outline" keyName="items" />
        <FooterButton icon="shirt-outline" keyName="outfits" />
        <FooterButton icon="heart-outline" keyName="collections" />
      </ViewAny>
    </ViewAny>
  );
}
