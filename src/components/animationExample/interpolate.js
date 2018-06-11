import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class Interpolate extends React.Component {

    _timingAnimation= new Animated.Value(0);

    componentDidMount() {
        //This will animate our _timingAnimation from 0 to 100 over the course of 2000 milliseconds
        Animated.timing(                  
            this._timingAnimation,            
            {
                toValue: 100,
                duration: 3000,         
            }
        ).start(); 
    }

    componentWillUnmount() {
        Animated.timing(                  
            this._timingAnimation,
        ).stop()
    }

    render() {
        const interpolateValue = this._timingAnimation.interpolate({
            inputRange: [0, 50, 90, 100],
            outputRange: [0, 75, 0, 10]
        });
        return (
            <View style={styles.container}>
                    <Animated.View style={{height:150, borderRadius: interpolateValue, width: 150, backgroundColor:'#6a51af'}}/>
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

export default Interpolate;
