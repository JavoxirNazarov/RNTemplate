import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { ThemeProvider } from './src/feauteres/theme';
import RootScreen from './src/feauteres/navigation';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.root}>
        <StatusBar barStyle={'dark-content'} />
        <RootScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
