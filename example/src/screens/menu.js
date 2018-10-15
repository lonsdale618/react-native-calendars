import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {createBottomTabNavigator} from 'react-native-navigation'
import Agenda from './agenda'
import CalendarsList from './calendarsList'
import HorizontalCalendarList from './horizontalCalendarList'
import ClassDetails from './classdetails'

export default class MenuScreen extends Component {

  render() {
    return (        
        <View>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarsPress.bind(this)}>
          <Text style={styles.menuText}>Completed Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Inventory</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onHorizontalCalendarListPress.bind(this)}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onAgendaPress.bind(this)}>
          <Text style={styles.menuText}>Classes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onClassdetailsPress.bind(this)}>
          <Text style={styles.menuText}>Class Details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onJsaPress.bind(this)}>
          <Text style={styles.menuText}>JSA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menu} onPress={this.onSignaturePress.bind(this)}>
          <Text style={styles.menuText}>Signature</Text>
        </TouchableOpacity>
        </View>
    );
  }

  onCalendarsPress() {
    this.props.navigator.push({
      screen: 'Calendars',
      title: 'Calendars'
    });
  }

  onCalendarListPress() {
    this.props.navigator.push({
      screen: 'CalendarsList',
      title: 'Calendar List'
    });
  }

  onHorizontalCalendarListPress() {
    this.props.navigator.push({
      screen: 'HorizontalCalendarList',
      title: 'Horizontal Calendars List'
    });
  }

  onAgendaPress() {
    this.props.navigator.push({
      screen: 'Agenda',
      title: 'Classes'
    });
  }

  onClassdetailsPress() {
    this.props.navigator.push({
      screen: 'ClassDetails',
      title: 'Class Details'
    });
  }

  onJsaPress() {
    this.props.navigator.push({
      screen: 'Jsa',
      title: 'JSA'
    });
  }

  onSignaturePress() {
    this.props.navigator.push({
      screen: 'Signature',
      title: 'Signature'
    });
  }
}

const styles = StyleSheet.create({
  menu: {
    height: 50,
    justifyContent: 'center',
    paddingLeft: 15,
    borderBottomWidth: 1
  },
  menuText: {
    fontSize: 18
  }
});