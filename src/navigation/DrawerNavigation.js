import React from 'react';
import { createDrawerNavigator } from 'react-navigation';

//components
import SvgComponents from '../screens/SvgComponents.screen';
import Home from '../screens/Home.screen';
import Animation from '../screens/Animation.screen';


const navigatorConfig = {
    drawerWidth: 300,
}

export const DrawerNavigation = createDrawerNavigator({
    Animation: {
        screen: Animation,
        navigationOptions: {
            title: 'Animation',
            headerTitle: 'Animation',
            drawerLabel: 'Animation'
        },
    },
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
    // Animation: {
    //     screen: Animation,
    //     navigationOptions: {
    //         title: 'Animation',
    //         headerTitle: 'Animation',
    //         drawerLabel: 'Animation'
    //     },
    // },
},navigatorConfig);
