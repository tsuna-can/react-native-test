// src/App.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as UiContext from './contexts/ui';
import Routes from './routes';

export default function App() {
  const [applicationState, setApplicationState] = useState(UiContext.createApplicationInitialState());
  return (
    <UiContext.Context.Provider value={{ applicationState, setApplicationState }}>
      <Routes />
    </UiContext.Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
