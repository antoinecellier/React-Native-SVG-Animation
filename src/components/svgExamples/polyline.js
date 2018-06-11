import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Polyline extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Polyline
                points="0,0 0,20 20,20 40,20 40,40 40,60 60,60"
                fill="none"
                stroke="#6a51af"
                strokeWidth="3"
            />
          </Svg>
          <RenderCode code='<Svg.Polyline stroke="#6a51af" strokeWidth="3" points="0,0 0,20 20,20 40,20 40,40 40,60 60,60" fill="none"/>'/>
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

export default Polyline;
