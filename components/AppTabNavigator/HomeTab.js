import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, Content, Thumbnail, Header, Left, Right, Body } from 'native-base';

import CardComponent from '../cardComponent';

class HomeTab extends Component {
   
    render(){
        return (
            <Container style={styles.container}>
                <Header  style={{ backgroundColor: 'white' }}>
                   <Left style={{ flex: 1,}}><Icon size={33} name="ios-camera-outline" style={{}} /></Left>
                   <Body style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontWeight: 'bold', color:'black', fontSize: 18 }}>Instagram</Text></Body>
                   <Right style={{ flex: 1,}}><Icon size={33}  name="ios-send-outline" style={{}} /></Right>
                </Header>
                <Content>
                    <View style={{height: 100}}>
                      <View style={{flex:1, 
                        flexDirection:'row',justifyContent:'space-between',
                        alignItems: 'center', paddingHorizontal: 7,
                        }}>
                        <Text style={{fontWeight:"bold"}}>Stories</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Icon name="md-play" size={14} />
                        <Text style={{fontWeight:"bold"}}>Watch All</Text>
                        </View>
                        
                      </View>
                      <View style={{flex:3}}>
                        <ScrollView
                         horizontal={true}
                         showsHorizontalScrollIndicator = {false}
                         contentContainerStyle ={{
                             alignItems: 'center',
                             paddingRight: 5,
                             paddingLeft: 5
                         }}
                        >
                            <Thumbnail source={{uri:"https://c1.staticflickr.com/6/5252/5403292396_0804de9bcf_b.jpg"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                             <Thumbnail source={{uri:"https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                             <Thumbnail source={{uri:"http://2.bp.blogspot.com/-G3-fgTdjp5c/VLvcK1uqUFI/AAAAAAAAkIQ/Ra2g5djqIHo/s1600/P1190101.JPG"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                             <Thumbnail source={{uri:"http://i.dailymail.co.uk/i/pix/2015/05/22/19/28FD3E7300000578-0-image-a-59_1432317808943.jpg"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                             <Thumbnail source={{uri:"http://i.dailymail.co.uk/i/pix/2016/02/16/14/314904EC00000578-0-image-a-18_1455633650354.jpg"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                             <Thumbnail source={{uri:"http://i.dailymail.co.uk/i/pix/2014/03/26/article-0-1C91BEE700000578-336_306x393.jpg"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                             <Thumbnail source={{uri:"https://www.tellwut.com/uploads/media/image/205364e1487411060o7751.jpg"}}
                            style={{ marginHorizontal: 5, borderColor: 'pink', borderWidth:2}} />
                        </ScrollView>
                      </View>
                    </View>
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                    <CardComponent />
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default HomeTab;