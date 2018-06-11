import React from 'react';
import { View, StyleSheet, Text, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
class Stagger extends React.Component {

    _toCircleAnimation= new Animated.Value(0);
    _toSquareAnimation= new Animated.Value(35);
      

    componentDidMount() {
        Animated.stagger(2000,[
            Animated.timing(this._toCircleAnimation, {
              toValue: 35,
              duration: 3000,
            }),
            Animated.timing(this._toSquareAnimation, {
                toValue: 0,
                duration: 3000,
            }),
        ]).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{height:70, borderRadius: this._toCircleAnimation, width: 70, backgroundColor:'#6a51af', marginRight: 10}}/>
                <Animated.View style={{height:70, borderRadius: this._toSquareAnimation, width: 70, backgroundColor:'#6a51af'}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      flexDirection: 'row'
    },
});

export default Stagger;
