import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';

class Circle extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={100} width={100}>
            <Svg.Circle
              cx={50}
              cy={50}
              r={25}
              fill="#f1c40f"
            />
          </Svg>
          <Text style={{color:'#fff'}}>
            {'<Svg height={100} width={100}><Svg.Circle cx={50} cy={50} r={25} fill="#f1c40f"/></Svg>'}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // paddingTop: Constants.statusBarHeight,
      // backgroundColor: '#ecf0f1',
    },
});

export default Circle;
