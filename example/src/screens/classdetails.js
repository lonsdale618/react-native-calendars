import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import ReqClass from './components/classdetails/ReqClass'


export default class ClassDetails extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      isLoading: true
    };
  }

  componentDidMount(){
    return fetch('http://172.105.196.104/read_class_info.php', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userid: '5',
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.ClassDetails,
      }, function(){
      });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render() {
    return (
    <ScrollView>
      
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.name}, {item.email}</Text>}
          keyExtractor={({userid}, index) => userid}
        /></View>

      <View style={{flex: 1}}>
      <Text style={{ fontSize: 20, fontWeight: '700', 
      paddingHorizontal: 10 }}>Details for this class</Text>
      </View>   
      
      <ReqClass itemm="Tools & Equips" imageUri={require('../assets/firefighter.png')}/>
      <ReqClass itemm="Note" imageUri={require('../assets/todo.png')}/>

      <View>
      <Text style={{ fontSize: 20, fontWeight: '100', padding:10,
      paddingHorizontal: 10 }}>Need to go over basic fire drills. There has been some confusion as to steps 4-6.</Text>
      </View>

      <ReqClass itemm="JSA Checklist" imageUri={require('../assets/todo.png')}/>
      <ReqClass itemm="Attendance" imageUri={require('../assets/todo.png')}/>
      <ReqClass itemm="Mark Extinguisher" imageUri={require('../assets/extinguisher.png')}/>
      <ReqClass itemm="Leave Comment" imageUri={require('../assets/todo.png')}/>
      <ReqClass itemm="Feedback" imageUri={require('../assets/todo.png')}/>
      <ReqClass itemm="Qualifications" imageUri={require('../assets/todo.png')}/>
      <ReqClass itemm="Customer Sign Off" imageUri={require('../assets/todo.png')}/>
    </ScrollView>
    );
  }
}

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
