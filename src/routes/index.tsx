// route/index.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './Main';

export default function LogginRoutes() {
  return (
    <NavigationContainer>
      <MainRoutes />
    </NavigationContainer>
  );
}
