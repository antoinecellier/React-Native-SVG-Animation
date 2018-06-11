import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Svg } from 'expo';
import RenderCode from '../Code';

class Def extends React.Component {

  render() {
    return (
        <View style={styles.container}>
          <Svg height={200} width={200}>
            <Svg.Defs>
              {/* Define Shape */}
              <Svg.G id="shape">
                  <Svg.G>
                      <Svg.Circle fill="#6a51af" cx="50" cy="50" r="50" />
                      <Svg.Rect fill="#6a51af" x="50" y="50" width="50" height="50" />
                      <Svg.Circle cx="50" cy="50" r="5" fill="#fff" />
                  </Svg.G>
              </Svg.G>
            </Svg.Defs>
            {/* Use Shape */}
            <Svg.Use href="#shape" x="20" y="0"/>
          </Svg>
          <RenderCode code='<Svg.Defs>
              {/* Define Shape */}
              <Svg.G id="shape">
                  <Svg.G>
                      <Svg.Circle fill="#6a51af" cx="50" cy="50" r="50" />
                      <Svg.Rect fill="#6a51af" x="50" y="50" width="50" height="50" />
                      <Svg.Circle cx="50" cy="50" r="5" fill="#fff" />
                  </Svg.G>
              </Svg.G>
            </Svg.Defs>
            {/* Use Shape */}
            <Svg.Use href="#shape" x="20" y="0"/>'/>
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

export default Def;
