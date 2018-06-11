import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Group extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.G>
                <Svg.Rect
                    x={20}
                    y={20}
                    width={160}
                    height={160}
                    fill="#6a51af"
                />
                <Svg.Rect
                    x={40}
                    y={40}
                    width={120}
                    height={120}
                    fill="#fff"
                />
                <Svg.Circle
                    cx={100}
                    cy={100}
                    r={40}
                    fill="#6a51af"
                />
            </Svg.G>
          </Svg>
          <RenderCode code='<Svg.G>     
                <Svg.Rect
                    x={20}
                    y={20}
                    width={160}
                    height={160}
                    fill="#6a51af"
                />  
                <Svg.Rect
                    x={40}
                    y={40}
                    width={120}
                    height={120}
                    fill="#fff"
                />  
                <Svg.Circle
                    cx={100}
                    cy={100}
                    r={40}
                    fill="#6a51af"
                />          
                </Svg.G>'/>
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

export default Group;
