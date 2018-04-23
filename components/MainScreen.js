import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import { StackNavigator, TabNavigator } from "react-navigation";
import Icon from 'react-native-vector-icons/Ionicons';

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikeTab from "./AppTabNavigator/LikeTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";


class MainScreen extends Component {
    static navigationOptions = {
        title: 'Instagram',
        headerLeft: <Icon size={33} name="ios-camera-outline" style={{paddingLeft: 10,}} />,
        headerRight: <Icon size={33}  name="ios-send-outline" style={{paddingRight: 10}} />,
        
      }
    render(){
        return (
            <AppTabNavigator />
        )
    }
}

const AppTabNavigator = TabNavigator({
    HomeTab: {
      screen: HomeTab,
      navigationOptions: {
        tabBarLabel: 'label',
       tabBarIcon: ({tintColor}) => <Icon name="ios-home" size={20} style={{color:tintColor}} />,
      }
    },
    SearchTab: {
     screen: SearchTab,
     navigationOptions: {
       tabBarLabel: 'label',
      tabBarIcon: ({tintColor}) => <Icon name="ios-search" size={20} style={{color:tintColor}} />,
     }
   },
   AddMediaTab: {
    screen: AddMediaTab,
    navigationOptions: {
      tabBarLabel: 'label',
     tabBarIcon: ({tintColor}) => <Icon name="ios-add-circle" size={20} style={{color:tintColor}} />,
    }
  },
  LikeTab: {
   screen: LikeTab,
   navigationOptions: {
     tabBarLabel: 'label',
    tabBarIcon: ({tintColor}) => <Icon name="ios-heart" size={20} style={{color:tintColor}} />,
   }
 },
 ProfileTab: {
  screen: ProfileTab,
  navigationOptions: {
    tabBarLabel: 'label',
    tabBarIcon: ({tintColor}) => <Icon name="ios-person" size={20} style={{color:tintColor}} />,
  }
 }
 },
 {
    showIcon: true,
    lazyLoad: true,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
        indicatorStyle: {
            opacity: 0
          },
        showIcon: true,
        showLabel: false,
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'white',
            borderTopWidth: 1,
          }
    }  
 });
 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MainScreen;