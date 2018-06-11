import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

//components
import SvgComponents from '../screens/SvgComponents.screen';
import Home from '../screens/Home.screen';
import Animation from '../screens/Animation.screen';
import GradientText from '../screens/GradientText.screen';
import SvgAnimation  from '../screens/SvgAnimation.screen'


const navigatorConfig = {
    drawerWidth: 300,
}

export const DrawerNavigation = createDrawerNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home',
            headerTitle: 'Home',
            drawerLabel: 'Home'
        },
    },
    SvgComponents: {
        screen: SvgComponents,
        navigationOptions: {
            title: 'SVG',
            headerTitle: 'SVG',
            drawerLabel: 'SVG'
        },
    },
    Animation: {
        screen: Animation,
        navigationOptions: {
            title: 'Animation',
            headerTitle: 'Animation',
            drawerLabel: 'Animation'
        },
    },
    GradientText: {
        screen: GradientText,
        navigationOptions: {
            title: 'Gradient Text',
            headerTitle: 'Gradient Text',
            drawerLabel: 'Gradient Text'
        },
    },
    SvgAnimation: {
        screen: SvgAnimation,
        navigationOptions: {
            title: 'Animated SVG',
            headerTitle: 'Animated SVG',
            drawerLabel: 'Animated SVG'
        },
    }
},navigatorConfig);
