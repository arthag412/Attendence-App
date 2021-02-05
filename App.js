import * as React from 'react';
import {  View } from 'react-native';
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import AppHeader from './components/AppHeader'

export default class  App extends React.Component {
  render() {
    return (
      <View>
       <AppHeader/>
        <AppContainer/>
      </View>
    );
  }
}
var AppNavigator= createSwitchNavigator({
  Screen1:Screen1,
  Screen2:Screen2,
})

const AppContainer =createAppContainer(AppNavigator)

