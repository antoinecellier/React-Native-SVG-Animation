import React from "react";
import {Text} from "react-native";

export const selectorComponent = Component => {
     switch(Component) {
         case 'Circle':
            // return <Circle/>

         default: return <Text>Something went wrong</Text>
     }
 }