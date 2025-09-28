import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../theme';

export default function Skeleton({ h, w, r = 8 }: { h: number; w: number | string; r?: number }) {
  const { colors } = useTheme();
  const ViewAny: any = View;

  return <ViewAny style={{ height: h, width: w, backgroundColor: '#e9eef5', borderRadius: r }} />;
}
