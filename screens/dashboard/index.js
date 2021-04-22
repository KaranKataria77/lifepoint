import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, Modal, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Item, Label, Input } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Slider from '../slider';
import Svg, { G, Circle } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const size = 60;
const strokeWidth = 2;
const center = size / 2;
const radius = size / 2 - strokeWidth / 2;
const circumference = 2 * Math.PI * radius

export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            modalVisible: false
        };
    }

    setModalVisible(value) {
        this.setState({ modalVisible: value })
    }

    render() {
        return (
            <View style={styles.page}>
                <View style={{ width: wp('100%'), height: hp('12%') }}>
                   <LinearGradient start={{x: 0.0, y: 0}} end={{x: 1.5, y: 1}} locations={[0,0.7,0]} colors={['#171732', '#3b5998', '#192f6a']} 
                    style={{
                        width:wp('100%'),
                        height:hp('12%'),
                    }} />
                    <View style={{ width: wp('85%'), height: hp('12%'), alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between',                         position:'absolute',
                        zIndex:1, 
                        top:0}}>
                        <View style={{ width: wp('30%'), height: hp('12%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Image source={require('../../assets/man.png')} style={{ width: 60, height: 60, borderRadius: 60 }} />
                            <Text style={{ fontSize: 12, color: '#a7a7a7' }}>DavidW</Text>
                        </View>
                        <View style={{ width: wp('30%'), height: hp('12%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: '#a7a7a7' }}>Points</Text>
                                <Text style={{ fontSize: 18, color: '#fff', paddingTop: 8 }}>40</Text>
                            </View>
                            <TouchableOpacity style={{ width: wp('15%'), height: hp('8%') }} onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                                <Image source={require('../../assets/image.png')} resizeMode="contain" style={{ width: wp('10%'), position: 'absolute', zIndex: 1, top: -40, left: 10 }} />
                                <Svg width={size} height={size}>
                                    <G rotation="-90" origin={center} />
                                    <Circle stroke="#24244b" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                                    <Circle stroke="#61E4FF" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={circumference - (circumference * 60) / 100} />
                                </Svg>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Slider navigation={this.props.navigation} />
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => { this.setModalVisible(!this.state.modalVisible); }}>
                    <TouchableOpacity onPress={() => { this.setModalVisible(!this.state.modalVisible) }} style={{height:40, width:40, borderRadius:40, backgroundColor:'#00001f', alignItems:'center', justifyContent:'center',position:'absolute', zIndex:1, right:10, top:40}}>
                    <Icons name="close" size={25} color="white"/>
                    </TouchableOpacity>
                    <View style={styles.modalOverlay}>
                        <View style={styles.modalContent}>
                            <View style={styles.modalBox} >
                                <View style={styles.modalView}>
                                    <View style={{width:wp('80%'), height:hp('14%'), justifyContent:'space-evenly', borderBottomColor:'#31316A', borderBottomWidth:1, paddingVertical:10}}>
                                        <View style={{width:wp('80%'), height:hp('5%'), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                            <Image source={require('../../assets/image.png')} resizeMode="contain" style={{width:wp('10%')}}/>
                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20, color:'#fff'}}>30</Text>
                                                <Text style={{fontSize:10, color:'#a7a7a7'}}>POINTS</Text>
                                            </View>
                                        </View>
                                        <Text style={{fontSize:10, color:'#a7a7a7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                                    </View>
                                    <View style={{width:wp('80%'), height:hp('14%'), justifyContent:'space-evenly', borderBottomColor:'#31316A', borderBottomWidth:1, paddingVertical:10}}>
                                        <View style={{width:wp('80%'), height:hp('5%'), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                            <Image source={require('../../assets/image.png')} resizeMode="contain" style={{width:wp('10%')}}/>
                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20, color:'#fff'}}>100</Text>
                                                <Text style={{fontSize:10, color:'#a7a7a7'}}>POINTS</Text>
                                            </View>
                                        </View>
                                        <Text style={{fontSize:10, color:'#a7a7a7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                                    </View>
                                    <View style={{width:wp('80%'), height:hp('14%'), justifyContent:'space-evenly', borderBottomColor:'#31316A', borderBottomWidth:1, paddingVertical:10}}>
                                        <View style={{width:wp('80%'), height:hp('5%'), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                            <Image source={require('../../assets/image.png')} resizeMode="contain" style={{width:wp('10%')}}/>
                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20, color:'#fff'}}>80</Text>
                                                <Text style={{fontSize:10, color:'#a7a7a7'}}>POINTS</Text>
                                            </View>
                                        </View>
                                        <Text style={{fontSize:10, color:'#a7a7a7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                                    </View>
                                    <View style={{width:wp('80%'), height:hp('14%'), justifyContent:'space-evenly', borderBottomColor:'#31316A', borderBottomWidth:1, paddingVertical:10}}>
                                        <View style={{width:wp('80%'), height:hp('5%'), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                            <Image source={require('../../assets/image.png')} resizeMode="contain" style={{width:wp('10%')}}/>
                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20, color:'#fff'}}>40</Text>
                                                <Text style={{fontSize:10, color:'#a7a7a7'}}>POINTS</Text>
                                            </View>
                                        </View>
                                        <Text style={{fontSize:10, color:'#a7a7a7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                                    </View>
                                    <View style={{width:wp('80%'), height:hp('14%'), justifyContent:'space-evenly', borderBottomColor:'#31316A', borderBottomWidth:1, paddingVertical:10}}>
                                        <View style={{width:wp('80%'), height:hp('5%'), flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                                            <Image source={require('../../assets/image.png')} resizeMode="contain" style={{width:wp('10%')}}/>
                                            <View style={{alignItems:'center'}}>
                                                <Text style={{fontSize:20, color:'#fff'}}>60</Text>
                                                <Text style={{fontSize:10, color:'#a7a7a7'}}>POINTS</Text>
                                            </View>
                                        </View>
                                        <Text style={{fontSize:10, color:'#a7a7a7'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#00001f"
    },
    modalOverlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
    },
    modalContent: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    modalBox: {
        flexDirection: 'column',
        backgroundColor: '#00001f',
        width: '90%',
        borderRadius: 10,
        height:hp('85%'),
        alignItems:'center',
        justifyContent:'center'
    },
    modalView: {
        width:wp('80%'),
        height:hp('75%')
        // paddingLeft:20,
        // paddingRight:20,
    },
    modalHeadingView: {
        paddingLeft: '5%',
        paddingRight: '5%',
        paddingTop: '2%',
        paddingBottom: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: "center",
        justifyContent: 'center',
        borderBottomColor: '#e0e0e0'
    },
})