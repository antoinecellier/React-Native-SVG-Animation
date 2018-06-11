import React from "react";
import {Text,Dimensions} from "react-native";
const { width } = Dimensions.get('window');

import MeterAnimation from './MeterAnimation';
import ProgressBar from './ProgressBar';

export const selectorComponent = Component => {
     switch(Component) {
        case 'Speed Meter':
            return <MeterAnimation value={40} width={200} color="#6a51af" />
        case 'Progree Bar':
            return <ProgressBar width={width/2} progress = {50} />

        default: return <Text>Something went wrong</Text>
     }
 }