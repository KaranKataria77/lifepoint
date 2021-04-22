import React, { Component } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class Welcome extends Component {
    render() {
        return (
            <View style={styles.page}>
                <TouchableOpacity style={styles.img} onPress={() => this.props.navigation.navigate('SignUp')}>
                <View style={styles.box}></View>
                <Image source={require('../../assets/image.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:'#00001f',
        height:hp('100%'),
        width:wp('100%'),
        alignItems:'center',
        justifyContent:'center'
    },
    img:{
        height:hp('40%'),
        width:wp('75%'),
        alignItems:'center',
        justifyContent:'center',
        borderRadius:200,
        borderWidth:1,
        borderColor:'#24244b'
    },
    box:{
        width:15, 
        height:15, 
        backgroundColor:'#62acc7', 
        position:'absolute', 
        zIndex:1, 
        right:wp('8%'), 
        top:hp('5%')}
})