// src/components/Detail/index.tsx

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
