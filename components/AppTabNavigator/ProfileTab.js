import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { Container, Content, Header, Left, Body, Right, Button } from 'native-base';

const { width, height } = Dimensions.get('window');
const images = [
    {uri: 'https://c1.staticflickr.com/6/5252/5403292396_0804de9bcf_b.jpg'},
    {uri: 'https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg'},
    {uri: 'https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg'},
    {uri: 'https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg'},    
    {uri: 'https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg'},
    {uri: 'https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg'},
    {uri: 'https://i.pinimg.com/originals/9d/12/b6/9d12b61a8eb3d47dc9a229e0c14c3106.jpg'},
    
]
class ProfileTab extends Component {
    constructor(props){
        super(props);
        this.state = {
            activeIndex: 0,
            images: [],
            user: null,
        }
    }

    componentWillMount(){
        // user profile
         // user posts
         fetch('https://randomuser.me/api')
         .then(res => res.json())
         .then(result => {
             console.log(result)
             this.setState({
                 user: result.results[0]
             })
         })
         .catch(err => console.log(err))

        // user posts
        fetch('https://randomuser.me/api/?results=50')
         .then(res => res.json())
         .then(result => {
             console.log(result)
             this.setState({
                 images: result.results
             })
         })
         .catch(err => console.log(err))
    }

    segmentClicked(index){
        this.setState({
            activeIndex: index
        })
    }

    renderSectionOne(){
        if(this.state.images.length>0){
            return this.state.images.map((image, index) => {
                return (
                    <View key={index} style ={[{width:(width)/3, height: (width)/3},{marginBottom: 2}, index%3 !== 0 ? { paddingLeft: 2 }:{ paddingLeft: 0 }]} >
                      <Image style={{ flex:1, width:undefined, height:undefined}}
                      source={{uri: image.picture.large}} />
                    </View>
                )
            })
        } else {
            return (null);
        }
        
    }

    renderSection(){
        if(this.state.activeIndex == 0) {
            return (
                <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
                   {this.renderSectionOne()}    
                </View>
            )
        }
    }

    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: 'white' }}>
                <Header style={{ backgroundColor: 'white' }}>
                    <Left style={{ flex: 1, }}><Icon size={30} name="md-person-add" style={{}} /></Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}><Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>{this.state.user?this.state.user.name.first:''}</Text></Body>
                    <Right style={{ flex: 1, }}><EntypoIcon size={30} name="back-in-time" style={{}} /></Right>
                </Header>
                <Content>
                    <View style={{ paddingTop: 10 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, alignItems: 'center' }}>
                                <Image source={this.state.user?{uri: this.state.user.picture.large}:{uri:null}} style={{ width: 75, height: 75, borderRadius: 37.5 }} />
                            </View>
                            <View style={{ flex: 3 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: 'black' }}>20</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>posts</Text>

                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: 'black' }}>206</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>followers</Text>

                                    </View>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: 'black' }}>204</Text>
                                        <Text style={{ fontSize: 10, color: 'gray' }}>following</Text>

                                    </View>

                                </View>

                                <View style={{ flexDirection: 'row', padding: 5 }}>
                                 <Button bordered dark style={{ flex: 3, marginLeft: 10, justifyContent: 'center', height: 30}}>
                                    <Text style={{ color: 'black' }}> Edit Profile </Text>
                                 </Button>

                                 <Button bordered dark style={{ flex: 1, marginLeft: 10, justifyContent: 'center', height: 30}}>
                                    <Icon name="ios-settings-outline" size={20} style={{ color: 'black' }} />
                                 </Button>

                                </View>
                            </View>

                        </View>
                        
                        <View style={{ paddingVertical: 10, paddingHorizontal: 10 }}>
                           <Text style={{ fontWeight: 'bold' }}>{this.state.user?this.state.user.name.first:''} </Text>
                           <Text> Cool | Super Cool | nope </Text>
                           <Text> www.coolarun.com  </Text>
                        </View>
                    </View>

                    <View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
                          <Button
                            transparent
                            onPress = {()=> this.segmentClicked(0)}
                            active = { this.state.activeIndex == 0 }
                            style={{ padding: 3 }}
                          >
                              <Icon size={28} name="ios-apps-outline"  style={[this.state.activeIndex==0?{color: '#00D1FF'}:{}]}/>
                          </Button>

                           <Button
                            transparent
                            onPress = {()=> this.segmentClicked(1)}
                            active = { this.state.activeIndex == 1 }
                            style={{ padding: 3 }}
                          >
                              <Icon size={28} name="ios-list-outline" style={[this.state.activeIndex==1?{color: '#00D1FF'}:{}]}/>
                          </Button>

                           <Button
                            transparent
                            onPress = {()=> this.segmentClicked(2)}
                            active = { this.state.activeIndex == 2 }
                            style={{ padding: 3 }}
                          >
                              <Icon size={28} name="ios-people-outline" style={[this.state.activeIndex==2?{color: '#00D1FF'}:{}]}/>
                          </Button>

                           <Button
                            
                            transparent
                            onPress = {()=> this.segmentClicked(3)}
                            active = { this.state.activeIndex == 3 }
                            style={{ padding: 3 }}
                          >
                              <Icon size={28} name="ios-bookmark-outline" style={[this.state.activeIndex==3?{color: '#00D1FF'}:{}]}/>
                          </Button>
                        </View>

                        { this.renderSection() }
                    </View>
                </Content>
            </Container>
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

export default ProfileTab;