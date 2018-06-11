import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import ScreenTemplate from '../components/ScreenTemplate';
import GradientTextComponent from '../components/GradientText';

const { width, height } = Dimensions.get('window');

class GradientText extends React.Component {

  render() {
    return <View style={styles.container}>
        <ScreenTemplate navigation={this.props.navigation} title={'Gradient Text'}>
            <View style={{flex:1,zIndex: 2}}>
                <GradientTextComponent/>
            </View>
        </ScreenTemplate>
    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      width: width
  },
});
export default GradientText;
