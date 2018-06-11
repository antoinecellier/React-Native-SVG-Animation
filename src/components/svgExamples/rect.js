import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Rect extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Rect
                x={20}
                y={20}
                width={160}
                height={80}
                fill="#6a51af"
            />
          </Svg>
          <RenderCode code='<Svg.Rect x={20} y={20} width={160} height={160} fill="#6a51af"/>'/>
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

export default Rect;
