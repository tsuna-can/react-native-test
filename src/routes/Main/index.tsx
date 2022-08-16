// route/Main/index.tsx

import React, { useContext } from 'react';
import { createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack';
import { INITIAL, LOADING, HOME, CHOOSE_LOGIN } from '../../constants/path';
import { Initial, Loading, Home, ChooseLogin } from '../../components/pages';
import * as UiContext from '../../contexts/ui';

const Stack = createStackNavigator();
const forFade = ({ current }: StackCardInterpolatonProps) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

function switchingAuthStatus(status: UiContexts.Status) {
  switch (status) {
    case UiContext.Status.UN_AUTHORIZED:
      return <Stack.Screen name={CHOOSE_LOGIN} component={ChooseLogin} />;
    case UiContext.Status.AUTHORIZED:
      return <Stack.Screen name={HOME} component={Home} />;
    case UiContext.Status.FIRST_OPEN:
      return <Stack.Screen name={INITIAL} component={Initial} />;
  }
}

function AuthWithRoutes() {
  const uiContext = useContext(UiContext.Context);
  return (
    <Stack.Navigator
      initialRouteName={LOADING}
      screenOptions={{
        cardStyleInterpolator: forFade,
        headerShown: false,
      }}
    >
      {uiContext.applicationState !== UiContext.Status.LOADING ? (
        switchingAuthStatus(uiContext.applicationState)
      ) : (
        <Stack.Screen name={LOADING} component={Loading} />
      )}
    </Stack.Navigator>
  );
}

export default AuthWithRoutes;
