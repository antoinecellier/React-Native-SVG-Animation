import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Path extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Path
              d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"
              stroke="#6a51af"
              fill="none"
            />
          </Svg>
          <RenderCode code='<Svg.Path fill="none" stroke="#6a51af" d="M25 10 L98 65 L70 25 L16 77 L11 30 L0 4 L90 50 L50 10 L11 22 L77 95 L20 25"/>'/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
});

export default Path;
