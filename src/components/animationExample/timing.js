import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class Timing extends React.Component {

    _timingAnimation= new Animated.Value(0);

    componentDidMount() {
        //This will animate our _timingAnimation from 0 to 100 over the course of 2000 milliseconds
        Animated.timing(                  
            this._timingAnimation,            
            {
                toValue: 75,       
                delay: 200,         //This animation will wait 200 milliseconds before triggering
                duration: 2000,         
            }
        ).start(); 
    }

    componentWillUnmount() {
        Animated.timing(                  
            this._timingAnimation,
        ).stop()
    }

    render() {
        return (
            <View style={styles.container}>
                    <Animated.View style={{height:150, borderRadius: this._timingAnimation, width: 150, backgroundColor:'#6a51af'}}/>
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

export default Timing;
