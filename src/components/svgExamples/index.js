import React from "react";
import {Text} from "react-native";

import Circle from './circle';
import Rect from './rect';
import Line from './line';
import Polygon from './polygon';
import Polyline from './polyline';
import Path from './path';
import SVGText from './text';
import Group from './group';
import Def from './def';

export const selectorComponent = Component => {
     switch(Component) {
         case 'Circle':
            return <Circle/>
        case 'Rectangle':
            return <Rect/>
        case 'Line':
            return <Line/>
        case 'Polygon':
            return <Polygon/>
        case 'Polyline':
            return <Polyline/>
        case 'Path':
            return <Path/>
        case 'Text':
            return <SVGText/>
        case 'G':
            return <Group/>
        case 'Def/Use':
            return <Def/>

         default: return <Text>Something went wrong</Text>
     }
 }