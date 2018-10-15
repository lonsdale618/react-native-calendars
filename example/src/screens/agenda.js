import React, { Component } from 'react';
import Moment from 'moment';
import {
  Text,
  StyleSheet,
  ScrollView,
  View,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
   FlatList,
} from 'react-native';
import {Calendar, Agenda} from 'react-native-calendars';

export default class AgendaScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:{},
      isLoading: true,
      dataSource: [],
   
    };
  }

   componentDidMount(){
    return fetch('http://13.55.166.98/testnew.php', {
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
      <Agenda
        items={this.state.items}
        data = {this.state.dataSource}
        loadItemsForMonth={this.updateCalendar.bind(this)}
       selected={'2017-05-16', '2018-09-24'} 
      /*selected = {dates}*/
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={this.renderEmptyDate.bind(this)}
        rowHasChanged={this.rowHasChanged.bind(this)}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#666'},
        //    '2017-05-09': {textColor: '#666'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
         // monthFormat={'yyyy'}
         // theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
        //renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
      />
    );
  }

  updateCalendar(day){
   
    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
            const time = day.timestamp + i * 24 * 60 * 60 * 1000;
            const strTime = this.timeToString(time);
            if (!this.state.items[strTime]) {
                this.state.items[strTime] = [];
                this.state.dataSource.map((e) => {
                	const eventTime = this.timeToString(e.start);
                	const course = e.title;
                    if ( strTime === eventTime){
                        this.state.items[strTime].push({
                           name: 'Item for: '+ course,
                           height: 100
                        });
                    }
                });
            }
        }
      //console.log(this.state.items);
      const newItems = {};
      Object.keys(this.state.items).forEach(key => {newItems[key] = this.state.items[key];});
      this.setState({
        items: newItems
      });
    },1000);
   


}

  renderItem(item) {
    return (
      <View style={[styles.item, {height: item.height}]}><Text>{item.name}</Text></View>
    );
  }

  renderEmptyDate() {
    return (
      <View style={styles.emptyDate}><Text>This is empty date!</Text></View>
    );
  }

  rowHasChanged(r1, r2) {
    return r1.name !== r2.name;
  }

  timeToString(time) {
    const date = new Date(time);
    return Moment(time).format("YYYY-MM-DD");
  }
}

const styles = StyleSheet.create({
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  },
  text: {
    textAlign: 'center',
    borderColor: '#bbb',
    padding: 10,
    backgroundColor: '#eee'
  },
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  textForm: {
      fontWeight: 'bold',
      color: 'purple',
      position: 'absolute', // child
      fontSize: 20,
      alignItems: 'center',
       justifyContent: 'flex-end',
       textAlign: 'center',
 
    },
    item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex:1,
    paddingTop: 30
  },
});
