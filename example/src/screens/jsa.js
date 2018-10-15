'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  CheckBox,
  AppRegistry,
  TouchableOpacity,
  Linking,
  Alert,
  Dimensions,
} from 'react-native';
import ReqClass from './components/classdetails/ReqClass'
import { RNCamera } from 'react-native-camera';
import Camera from 'react-native-camera';
import MultipleChoice from 'react-native-multiple-choice'



export default class Jsa extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      qrcode: '',
      isLoading: true
    };
  }
    onBarCodeRead = (e) => this.setState({qrcode: e.data});

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
  onSuccess(e) {
    Linking
      .openURL(e.data)
      .catch(err => console.error('An error occured', err));
  }

  render() {
    return (
      
    <ScrollView>
      <MultipleChoice
    options={[
    'Slips, trips and falls',
    'Suitable distance from flammables',
    'Placement of fuel cans and small gear',
    'PPE fit for purpose',
    'Establish a Safety Officer; top standby to assist as necessary'
    ]}
    selectedOptions={['Lorem ipsum']}
    maxSelectedOptions={5}
   // onSelection={(option)=>alert(option + ' was selected!')}
/>

        <View  style={styles.container}>
                <Camera
                    style={styles.preview}
                    onBarCodeRead={this.onBarCodeRead}
                    ref={cam => this.camera = cam}
                    aspect={Camera.constants.Aspect.fill}
                    >
                        <Text style={{
                            backgroundColor: 'white'
                        }}>{this.state.qrcode}</Text>
                    </Camera>
            </View>
      
      <View style={{flex: 1}}>
      <Text style={{ fontSize: 20, fontWeight: '700', 
      paddingHorizontal: 10 }}>Hazards, Risks and Controls</Text>
      </View>
      <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 10 }}>Protecting the Client
       from airborne dust or pollutants and radiated heat of Flammable liquids</Text>
      <Text style={{ fontSize: 18, fontWeight: '300', paddingHorizontal: 10 }}>Risk assessment/Descriptions
Air born extinguishing agents as well as smoke form a low risk environmental hazard to people down wind of the training event.</Text>
      <Text style={{ fontSize: 18, fontWeight: '600', paddingHorizontal: 10 }}>Protecting the environment and Built Infrastructure</Text>   
      
      <ReqClass itemm="Tools & Equips" imageUri={require('../assets/firefighter.png')}/>
      <ReqClass itemm="Note" imageUri={require('../assets/todo.png')}/>
      

      <View>
      <Text style={{ fontSize: 20, fontWeight: '100', padding:10,
      paddingHorizontal: 10 }}>Need to go over basic fire drills. There has been some confusion as to steps 4-6.</Text>
      </View>

      <ReqClass itemm="JSA Checkdasfasdfslist" imageUri={require('../assets/todo.png')}/>
      <ReqClass itemm="Attendance" imageUri={require('../assets/todo.png')}/>
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
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
});
