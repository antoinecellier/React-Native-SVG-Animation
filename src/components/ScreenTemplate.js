import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

class ScreenTemplate extends React.Component {

    openDrawer = () => {
        this.props.navigation.openDrawer();
    }

    render() {
        return <View style={{flex:1}}>
            <View style={styles.header}>
                <Feather onPress={this.openDrawer} style={{paddingLeft: 20,alignSelf:'flex-start'}} name="menu" size={20} color="#fff" />
                <View style={{flex:1, alignItems: 'center'}}>
                    <Text style={{color:'#fff', alignSelf: 'center', fontSize: 16, fontWeight: "600"}}>{this.props.title}</Text>
                </View>
            </View>
            <View style={{flex:1, padding:20, backgroundColor:'#000',}}>
                {this.props.children}
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        width: width,
        backgroundColor: '#6a51af',
        paddingTop: 30,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 0,
        flexDirection: 'row'
    },
});

export default ScreenTemplate;
