import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class Spring extends React.Component {

    springValue = new Animated.Value(0.3)

    componentDidMount() {
        this.springValue.setValue(0.3)
        Animated.spring(
            this.springValue,
            {
                toValue: 150,
                friction: 1
            }
        ).start();
    }

    componentWillUnmount() {
        Animated.timing(                  
            this.springValue,
        ).stop()
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{height:this.springValue, borderRadius: 75, width: this.springValue, backgroundColor:'#6a51af'}}/>
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

export default Spring;
