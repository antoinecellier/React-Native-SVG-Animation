import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window');
import ScreenTemplate from '../components/ScreenTemplate';
import {selectorComponent} from '../components/animationExample';

class Animation extends React.Component {

  state = {
    show: false
  }
  
  list = [
    {name: 'Timing'},
    {name: 'Spring'},
    {name: 'Interpolate'},
    {name: 'Sequence & Delay'},
    {name: 'Parallel'},
    {name: 'Stagger'},
  ]

  renderModal = () => {
    return(
        <View style={{ borderRadius: 10, overflow: 'hidden', flex:1,marginVertical:height/8, position: 'absolute', zIndex: 1, height: height*3/4, width: width-40, backgroundColor:'#fff'}}>
          <View style={{padding:20, backgroundColor: '#6a51af', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 14, color: '#fff'}}>{this.state.show}</Text>
            <Feather onPress={()=>this.setState({show: false})} style={{paddingLeft: 20,alignSelf:'flex-end'}} name="x" size={20} color="#fff" />
          </View>
          <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
            {selectorComponent(this.state.show)}
          </View>
        </View>
    )
  }

  renderRows = (rowData) => {
    let {name} = rowData.item;
    return (
      <TouchableOpacity key={name} onPress={()=>this.setState({show: name})} style={{flex:1,paddingVertical: 10}}>
        <Text style={{color:'#fff',fontSize:15}}>{name}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return <View style={styles.container}>
        <ScreenTemplate navigation={this.props.navigation} title={'Animation'}>
          <FlatList
              data={this.list}
              renderItem={ (item) =>this.renderRows(item)}
              ItemSeparatorComponent = {() => <View style = {{flex:1,height:1,backgroundColor:'#fff'}} />}
            />
        </ScreenTemplate>
        {this.state.show && this.renderModal()}
    </View>;
  }

}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center',
      width: width
  },
});
export default Animation;
