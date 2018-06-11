import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

//components
import {DrawerNavigation} from './navigation/DrawerNavigation';

const { width } = Dimensions.get('window');
class AppEntry extends React.Component {

  render() {
    return <View style={styles.container}>
        <DrawerNavigation/>
    </View>;
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width: width
    },
});

export default AppEntry;
