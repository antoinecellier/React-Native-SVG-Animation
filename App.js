import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AppEntry from './src';

export default class App extends React.Component {
  render() {
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
          <StatusBar barStyle="dark-content" backgroundColor="#fff" />
          <AppEntry/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
