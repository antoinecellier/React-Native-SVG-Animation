import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Polygon extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Polygon
              points="20,20 150,70 20,120"
              fill="#6a51af"
            />
          </Svg>
          <RenderCode code='<Svg.Polygon points="20,20 150,70 20,120" fill="#f1c40f"/>'/>
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

export default Polygon;
