import React from 'react';
import { View, StyleSheet, Text, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
class Sequence extends React.Component {

    _radiusAnimation= new Animated.Value(0);
    _sizeAnimation= new Animated.Value(150);
      

    componentDidMount() {
        Animated.sequence([
            Animated.timing(this._radiusAnimation, {
              toValue: 75,
              duration: 2000,
            }),
            Animated.delay(1000),
            Animated.timing(this._sizeAnimation, {
                toValue: 75,
                duration: 2000,
            }),
            Animated.delay(1000),
            Animated.timing(this._radiusAnimation, {
                toValue: 0,
                duration: 2000,
            }),
        ]).start();
    }

    render() {
        return (
            <View style={styles.container}>
                    <Animated.View style={{height:this._sizeAnimation, borderRadius: this._radiusAnimation, width: this._sizeAnimation, backgroundColor:'#6a51af'}}/>
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

export default Sequence;
