import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Modal, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export default class Detail extends Component {
    render() {
        return (
            <View style={{flex:1, backgroundColor:'#00001f'}}>
                <View>
                <Icons name="keyboard-backspace" size={30} color="#fff" style={{position:'absolute', zIndex:1, top:20, left:20}} />
                <Image source={require('../../assets/image29.png')} />
                <LinearGradient 
                 colors={['transparent', '#00001f']}
                 style={{
                     width:wp('100%'),
                     height:hp('25%'),
                     position:"absolute",
                     zIndex:1,
                     bottom:0
                 }} />
                 <View style={{width:wp('85%'), height:hp('20%'), justifyContent:'space-between', alignSelf:'center', position:'absolute', zIndex:1, bottom:0}}>
                     <Text style={{fontSize:30, color:'#fff'}}>Nike Joyride</Text>
                     <Text style={{fontSize:15, color:'#fff'}}>Lorem Ipsum is simply dummy text of</Text>
                     <Text style={{fontSize:12, color:'#fff', lineHeight:22}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Text>
                 </View>
                </View>

                <View style={{width:wp('85%'), height:hp('10%'), alignSelf:'center', paddingTop:20}}>
                    <View style={{width:wp('30%'), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                        <View style={{height:50, width:50, borderWidth:1, borderRadius:50, borderColor:'#84FF88', alignItems:"center", justifyContent:'center'}}>
                        <FontIcon name="thumbs-up" size={30} color="#84FF88" />
                        </View>
                        <View style={{height:50, width:50, borderWidth:1, borderRadius:50, borderColor:'#388FFA', alignItems:"center", justifyContent:'center'}}>
                        <FontIcon name="thumbs-down" size={30} color="#fff" />
                        </View>
                    </View>
                </View>

                <View style={{width:wp('85%'), height:hp('60%'), alignSelf:'center', paddingTop:20}}>
                    <View style={{height:50, width:50, borderRadius:50, borderColor:'#fff', borderWidth:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'#232323', position:'absolute', zIndex:1, top:hp('15%'), left:wp('35%')}}>
                    <FontIcon name="play" size={25} color="#fff" />
                    </View>
                    <Image source={require('../../assets/nike.png')} resizeMode="cover" style={{height:hp('30%'), borderTopRightRadius:20, borderTopLeftRadius:20}} />
                    <View style={{width:wp('85%'), height:hp('7%'), justifyContent:'space-evenly', flexDirection:'row', backgroundColor:'#171732', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                        <View style={{borderWidth:2, borderColor:'#AFAFAF', width:wp('60%'), height:2, alignSelf:'center', borderRadius:2}}></View>
                        <Text style={{fontSize:12, color:'#fff', alignSelf:'center', }}>4:22 / 10:02</Text>
                    </View>
                </View>
            </View>
        )
    }
}
