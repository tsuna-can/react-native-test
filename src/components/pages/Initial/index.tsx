// Initial/index.tsx

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Initial() {
  return (
    <View style={styles.container}>
      <Text>Initial</Text>
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
