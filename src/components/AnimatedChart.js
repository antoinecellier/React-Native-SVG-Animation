import React from 'react';
import { View, StyleSheet, Text, Animated } from 'react-native';

class AnimatedBar extends React.Component {
    constructor(props) {
      super(props);
      this._width = new Animated.Value(0); // Added
    }

    componentDidMount() {
        const { value } = this.props;
        Animated.timing(this._width, {
          toValue: value,
        }).start();
    }
  
    render() {
      const barStyles = {
        backgroundColor: 'teal',
        height: 40,
        width: this._width, // Changed
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
      };
  
      return (
        <Animated.View style={barStyles} />
      );
    }
  }
  
  export default AnimatedBar;