import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Line extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
          <Svg.Line
                x1="25"
                y1="25"
                x2="175"
                y2="175"
                stroke="#6a51af"
                strokeWidth="2"
            />
          </Svg>
          <RenderCode code='<Svg.Line x1="25" y1="25" x2="175" y2="175" stroke="#6a51af" strokeWidth="2"/>'/>
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

export default Line;
