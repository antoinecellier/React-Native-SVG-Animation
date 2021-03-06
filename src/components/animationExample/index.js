import React from "react";
import {Text} from "react-native";

import Timing from "./timing";
import Spring from './spring';
import Interpolate from './interpolate';
import Sequence from "./sequence";
import Parallel from './parallel';
import Stagger from './stagger';
import Loop from "./loop";
import Burger from "./burger";

export const selectorComponent = Component => {
     switch(Component) {
        case 'Timing':
            return <Timing/>
        case 'Spring':
            return <Spring/>
        case 'Interpolate':
            return <Interpolate/>
        case 'Sequence & Delay':
            return <Sequence/>
        case 'Parallel':
            return <Parallel/>
        case 'Stagger':
            return <Stagger/>
        case 'Loop':
            return <Loop/>
        case 'Burger':
            return <Burger/>

        default: return <Text>Something went wrong</Text>
     }
 }