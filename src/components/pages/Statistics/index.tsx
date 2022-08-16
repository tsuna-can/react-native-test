// src/components/pages/Statistics/index.tsx

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Statistics() {
  return (
    <View style={styles.container}>
      <Text>Statistics</Text>
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
