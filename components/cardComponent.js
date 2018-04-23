import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';

class CardComponent extends Component {

    render() {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: "https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_MOS_52e05e3fe24a61.04593858.jpg" }} />
                        <Body>
                            <Text> Arun </Text>
                            <Text note>Jan 15, 2018 </Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem>
                    <Image source={{ uri: "https://cdn.movieweb.com/img.news.tops/NEuKSfpIjAB0xD_1_b/Justice-League-Movie-Box-Office-Total-Disappointment.jpg" }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ height: 45 }}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart-outline" size={20} style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles-outline" size={20} style={{ color: 'black' }} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send-outline" size={20} style={{ color: 'black' }} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20 }}>
                    <Text>101 likes </Text>
                </CardItem>
                <CardItem >
                    <Body>
                        <Text>
                            <Text style={{fontWeight:"500"}}>Arun </Text>
                            Fueled by his restored faith in humanity and inspired by Superman's selfless act enemy
                      </Text>
                    </Body>
                </CardItem>
            </Card>
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

export default CardComponent;