import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class AddMediaTab extends Component {
  
    render(){
        return (
            <View style={styles.container}>
              <Text> AddMediaTab </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default AddMediaTab;