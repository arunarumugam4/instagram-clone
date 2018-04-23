import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class SearchTab extends Component {
 
    render(){
        return (
            <View style={styles.container}>
              <Text> SearchTab </Text>
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

export default SearchTab;