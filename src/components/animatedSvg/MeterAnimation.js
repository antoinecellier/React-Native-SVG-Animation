import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Svg } from 'expo'; // Supported builtin module
const { Circle, Polygon } = Svg;




class MeterAnimation extends Component {

    constructor(props) {
        super(props);
        //calculate even width for calculation
        this.evenWidth = Math.floor(this.props.width) % 2 === 0 ? Math.floor(this.props.width):Math.floor(this.props.width)-1
        this.ContainerWidth = this.evenWidth ? this.evenWidth:150
        this.ContainerHeight = this.ContainerWidth/2;
        this.margin = ((this.ContainerWidth/100)*15)
        this.width = this.ContainerWidth-this.margin;
        this.height = this.width/2;
        //calculate needle points on the basis of given width
        this.needlePoints = "0,"+(this.ContainerHeight)+" "+(this.ContainerHeight)+","+((this.ContainerHeight)-((this.ContainerHeight/100)*7))+" "+(this.ContainerHeight)+","+((this.ContainerHeight)+((this.ContainerHeight/100)*7))
        this.state = {
            spinValue: new Animated.Value(0),
        }
    }

    componentWillMount() {
          setTimeout(() => {
              let value = this.props.value || 0;
              Animated.sequence([
                  Animated.timing(
                      this.state.spinValue,
                  {
                      toValue: 100,
                      duration: 1500,
                  }
                  ),
                  Animated.timing(this.state.spinValue, {
                      toValue: value,
                      duration: (100 - value) * 30,
                  }),
              ]).start()    
          }, 1000);
    }

    render() {
        //interpolate value from 0% -100% to 0deg to 180deg 
        const spin = this.state.spinValue.interpolate({
            inputRange: [0, 100],
            outputRange: ['0deg', '180deg']
          })

        return (
            <View style={{width:this.ContainerWidth,alignItems:'center',height:this.ContainerHeight+((this.ContainerHeight/100)*7)}}>
              //background
                <View style={{position:'absolute'}}>
                    <Svg height={this.ContainerHeight.toString()} width={this.ContainerWidth.toString()}>
                        <Circle cx={this.ContainerHeight.toString()} cy={this.ContainerHeight.toString()} r={this.ContainerHeight.toString()} fill="#fff"/>
                    </Svg>
                </View>
                
                <View style={{width:this.width,backgroundColor:'transparent',top:this.margin/2,height:this.height,overflow:'hidden',position:'relative'}}>
                    //static grey semi-circle
                    <View style={styles.common}>
                        <Svg height={this.height.toString()} width={this.width.toString()}>
                            //grey circle
                            <Circle cx={this.height.toString()} cy={this.height.toString()} r={this.height.toString()} fill={this.props.color} />
                            //inner white circle
                            <Circle cx={this.height.toString()} cy={this.height.toString()} r={((this.height/100)*76).toString()} height={this.height.toString()} width = {this.width.toString()} fill="#fff" />
                        </Svg>
                    </View>
                    //rotation circle
                    <View style={[styles.common]}>
                        <Animated.View style={{transform: [{rotate: spin}],width:this.width,height:this.width }}>
                            <Svg height={this.height.toString()} width={this.width.toString()}>
                                <Circle cx={this.height.toString()} cy={this.height.toString()} r={this.height.toString()}  fill="#ded8d6" />
                                //inner white Circle
                                <Circle cx={this.height.toString()} cy={this.height.toString()} r={((this.height/100)*76).toString()} height={this.height.toString()} width = {this.width.toString()} fill="#fff" />
                            </Svg>
                        </Animated.View>
                    </View>
                </View>
                // needle
                <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                    <Animated.View style={{transform: [{rotate: spin}],width:this.ContainerWidth,height:this.ContainerWidth}}>
                        <Svg height={this.ContainerHeight.toString()+((this.ContainerHeight/100)*7)} width={this.ContainerWidth.toString()}>
                            //needle center
                            <Circle 
                                cx={this.ContainerHeight} 
                                cy={this.ContainerHeight} 
                                r={((this.ContainerHeight/100)*7).toString()}
                                fill="#404040" />
                            //needle pointer
                            <Polygon
                                points={this.needlePoints}
                                fill="#404040"
                                strokeWidth="1"
                            />
                        </Svg>
                    </Animated.View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    common: {
        position: 'absolute',
        top: 0,
        left: 0,
    },
});

export default MeterAnimation;