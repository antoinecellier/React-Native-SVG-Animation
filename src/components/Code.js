import React from 'react';
import {View, Text, ScrollView} from "react-native";

class Code extends React.Component {
  render() {
    return <ScrollView style={{padding:10, borderWidth: 1, borderColor: '#6a51af', borderRadius: 5}}>
        <Text style={{fontSize:14, fontStyle:'italics'}}>{this.props.code}</Text>
    </ScrollView>;
  }
}

export default Code;
