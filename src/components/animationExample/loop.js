import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class Loop extends React.Component {

    _loopAnimation= new Animated.Value(0);

    componentDidMount() {
        //This will animate our _timingAnimation from 0 to 100 over the course of 2000 milliseconds
        Animated.loop(
            Animated.timing(                  
                this._loopAnimation,            
                {
                    toValue: 100,
                    duration: 2000,         
                }
            )
            // ,{iterations: 2}         //we can set iterations in the config object as second param.
        ).start();
    }

    componentWillUnmount() {
        Animated.timing(                  
            this._loopAnimation,
        ).stop()
    }

    render() {
        const interpolateValue = this._loopAnimation.interpolate({
            inputRange: [0, 50, 100],
            outputRange: [0, 100, 0]
        });
        return (
            <View style={styles.container}>
                    <Animated.View style={{height:interpolateValue, borderRadius: 75, width: interpolateValue, backgroundColor:'#6a51af'}}/>
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

export default Loop;
