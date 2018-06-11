import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Text extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Text
              fill="none"
              stroke="purple"
              fontSize="30"
              fontWeight="bold"
              x="100"
              y="100"
              textAnchor="middle">SVG Text</Svg.Text>
          </Svg>
          <RenderCode code='<Svg.Text
              fill="none"
              stroke="purple"
              fontSize="30"
              fontWeight="bold"
              x="100"
              y="100"
              textAnchor="middle">SVG Text</Svg.Text>'/>
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

export default Text;
