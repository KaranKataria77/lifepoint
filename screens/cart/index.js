import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Item, Label, Input, Button } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontIcon from 'react-native-vector-icons/FontAwesome';

export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:""
        };
      }

    render() {
        return (
            <ScrollView style={styles.page}>
                <Text>Cart</Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#00001f"
    },
})