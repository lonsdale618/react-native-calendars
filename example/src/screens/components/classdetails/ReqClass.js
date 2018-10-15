import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
} from 'react-native';

class ReqClass extends Component {
    render() {
      return (
        <View>
        <View style={{flexDirection:'column',padding:20,backgroundColor:'white'}}>
        <View style={{ flexDirection:'row'}}>
        <Image source={this.props.imageUri}  style={{ width: 40, height: 40}}/>
        <Text style={{ fontSize: 20, fontWeight: '300', paddingHorizontal: 10 }}>{this.props.itemm}</Text>
        </View>
      </View>
      <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}></View>
        </View>     
      );
    }
  }
  export default ReqClass;

const styles = StyleSheet.create({
    item: {
      backgroundColor: 'white',
      flex: 1,
      borderRadius: 5,
      padding: 10,
      marginRight: 10,
      marginTop: 17
    },
  });