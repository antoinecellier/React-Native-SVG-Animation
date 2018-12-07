    import React from 'react';
    import { View, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
    import { Svg } from 'expo'; // Supported builtin module
    const { Line } = Svg;

    class Burger extends React.Component {

        constructor () {
            super();
            this.state = {
                _lineOne: new Animated.Value(6),
                _lineTwo_x1: new Animated.Value(4),
                _lineThree: new Animated.Value(18),
            }
        }

        invokeAnimation = () => {        
            Animated.parallel([
                Animated.timing(this.state._lineOne, {
                toValue: 18,
                duration: 1500,
                }),
                Animated.timing(this.state._lineTwo_x1, {
                    toValue: 12,
                    duration: 1500,
                }),
                Animated.timing(this.state._lineThree, {
                    toValue: 6,
                    duration: 1500,
                }),
            ]).start();
        }

        componentDidMount() {
            this.state._lineOne.addListener( (progress) => {
                this._lineOne.setNativeProps({ y2: progress.value.toString() });
            });
            this.state._lineThree.addListener( (progress) => {
                this._lineThree.setNativeProps({ y2: progress.value.toString() });
            });
            this.state._lineTwo_x1.addListener( (progress) => {
                this._lineTwo.setNativeProps({ 
                    x1: progress.value.toString(),
                    x2:  (24 - progress.value).toString(),
                });
            });
        }

        render() {
            return (
                <TouchableOpacity style={styles.container} onPress={() => this.invokeAnimation()}>
                    <Svg fill="#000" height={24} width={24}>
                        <Line
                            x1={4}
                            y1={6}
                            x2={20}
                            y2={6}
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            ref={ ref => this._lineOne = ref }
                        />
                        <Line
                            x1={4}
                            y1={12}
                            x2={20}
                            y2={12}
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            ref={ ref => this._lineTwo = ref }
                        />
                        <Line
                            x1={4}
                            y1={18}
                            x2={20}
                            y2={18}
                            stroke="#000000"
                            strokeWidth={2}
                            strokeLinecap="round"
                            ref={ ref => this._lineThree = ref }
                        />
                    </Svg>
                </TouchableOpacity>
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

    export default Burger;
