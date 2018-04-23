/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";

import MainScreen from "./components/MainScreen.js";
import { Icon } from "native-base";
import HomeTab from "./components/AppTabNavigator/HomeTab";
import SearchTab from "./components/AppTabNavigator/SearchTab";
import AddMediaTab from "./components/AppTabNavigator/AddMediaTab";
import LikeTab from "./components/AppTabNavigator/LikeTab";
import ProfileTab from "./components/AppTabNavigator/ProfileTab";


export default class App extends Component {
 
  render() {
    return (
      <AppStackNavigator />
    );
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: {
		
				headerTitleStyle: {
          color: 'black',
          alignSelf: 'center',
          textAlign: 'center',
					fontFamily: 'MuseoSansRounded-300',
          fontWeight: '500',
          flex:1
				}
			
		}
  }
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
