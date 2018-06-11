import React from 'react';
import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native';

const { width } = Dimensions.get('window');
import ScreenTemplate from '../components/ScreenTemplate';
class Home extends React.Component {

    state = {
        textAnimation: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
          this.state.textAnimation,            // The animated value to drive
          {
            toValue: 100,                
            duration: 6000,              // Make it take a while
          }
        ).start();                        // Starts the animation
    }

    componentWillUnmount() {
        Animated.timing(                  
            this.state.textAnimation
          ).stop()
    }

    render() {
        const animatedFont = fontSize => this.state.textAnimation.interpolate({
            inputRange: [0, 30, 66 ,100],
            outputRange: [fontSize, fontSize*1.5, 23, fontSize]
        });

        return <View style={styles.container}>
            <ScreenTemplate navigation={this.props.navigation} title={'Home'}>
                <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
                    <Animated.Text style={{fontSize: animatedFont(42),color: '#fff'}}>React</Animated.Text>
                    <Animated.Text style={{fontSize: animatedFont(36),color: '#fff'}}>Native</Animated.Text>
                    <Animated.Text style={{fontSize: animatedFont(23),color: '#fff'}}>Animation</Animated.Text>
                    <Animated.Text style={{fontSize: animatedFont(64),color: '#fff'}}>And</Animated.Text>
                    <Animated.Text style={{fontSize: animatedFont(54),color: '#fff'}}>SVG</Animated.Text>
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

export default Home;
