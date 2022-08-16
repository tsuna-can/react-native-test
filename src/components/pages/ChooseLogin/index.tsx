// ChooseLogin/index.tsx

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Choose login</Text>
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
