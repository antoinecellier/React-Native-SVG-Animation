import React from 'react';
import { View, StyleSheet, Text, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
class Parallel extends React.Component {

    _radiusAnimation= new Animated.Value(0);
    _sizeAnimation= new Animated.Value(70);
      

    componentDidMount() {
        Animated.parallel([
            Animated.timing(this._radiusAnimation, {
              toValue: 35,
              duration: 2000,
            }),
            Animated.timing(this._sizeAnimation, {
                toValue: 35,
                duration: 2000,
            }),
        ]).start();
    }

    render() {
        return (
            <View style={styles.container}>
                <Animated.View style={{height:70, borderRadius: this._radiusAnimation, width: 70, backgroundColor:'#6a51af', marginRight: 10}}/>
                <Animated.View style={{height:this._sizeAnimation, borderRadius: 35, width: this._sizeAnimation, backgroundColor:'#6a51af'}}/>
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

export default Parallel;
