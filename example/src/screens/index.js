import {Navigation} from 'react-native-navigation';

import MenuScreen from './menu';
import CalendarsScreen from './calendars';
import AgendaScreen from './agenda';
import CalendarsList from './calendarsList';
import HorizontalCalendarList from './horizontalCalendarList';
import ClassDetail from './classdetails';
import JsaList from './jsa';
import Signature from './signature';

export function registerScreens() {
  Navigation.registerComponent('Menu', () => MenuScreen);
  Navigation.registerComponent('Calendars', () => CalendarsScreen);
  Navigation.registerComponent('Agenda', () => AgendaScreen);
  Navigation.registerComponent('CalendarsList', () => CalendarsList);
  Navigation.registerComponent('HorizontalCalendarList', () => HorizontalCalendarList);
  Navigation.registerComponent('ClassDetails', () => ClassDetail);
  Navigation.registerComponent('Jsa', () => JsaList);
  Navigation.registerComponent('Signature', () => Signature);
}
