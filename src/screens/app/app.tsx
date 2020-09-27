import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useCachedResources } from '../../hooks/useCachedResources';
import { AppNavigator } from './app.navigator'
import { Provider } from 'react-redux';
import store from '../../store';

export const App = () => {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;
    
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  )
}
