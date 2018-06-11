import React, { Component } from 'react';
import { Svg } from 'expo';
import { Dimensions, View } from 'react-native';

const {height, width} = Dimensions.get('window');

const GradientText = ({text = "Gradient Text"}) => {
    let svgWidth = width-40
    return (
        <Svg height={300} width={width-40} fill="blue">
            <Svg.Defs>
                <Svg.LinearGradient id="grad" x1="0" y1="0" x2={svgWidth} y2="0">
                    <Svg.Stop offset="0" stopColor="#f08300" stopOpacity="1" />
                    <Svg.Stop offset="0.33" stopColor='#e3000f' stopOpacity="1" />
                    <Svg.Stop offset="0.66" stopColor='#a72879' stopOpacity="1" />
                    <Svg.Stop offset="1" stopColor='#064497' stopOpacity="1" />
                </Svg.LinearGradient>
            </Svg.Defs>
            <Svg.G originY={svgWidth/2}>
                <Svg.Text
                    fill="url(#grad)"
                    fontSize="30"
                    fontWeight="900"
                    textAnchor="middle"
                    x={svgWidth/2}
                    y={100}
                >{text}</Svg.Text>
            </Svg.G>
        </Svg>
    );
}

export default GradientText;