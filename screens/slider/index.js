import React, { Component, useState } from 'react';
import {View, Text, Image, FlatList, Dimensions, Animated, TouchableOpacity} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MaaskedView from '@react-native-community/masked-view';
import Svg, {Rect} from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const data = [
    {src:require('../../assets/image21.png')},
    {src:require('../../assets/image30.png')},
    {src:require('../../assets/image32.png')},
    {src:require('../../assets/man.png')}
]

const {width, height} = Dimensions.get('window')

const spacing = 10;
const ITEM_SIZE = width*0.72
const spacer_item_size = (width - ITEM_SIZE) / 2;

export default function Slider({navigation}){
    const scrollX = React.useRef(new Animated.Value(0)).current;
        return (
            <View style={{width:wp('100%'), height:hp('80%'), alignSelf:'center',}}>
                <Animated.FlatList 
                 showsHorizontalScrollIndicator={false}
                 data={data}
                 keyExtractor={(item) => item.key}
                 horizontal
                 snapToInterval={ITEM_SIZE}
                 decelerationRate={1}
                 bounces={false}
                 onScroll={Animated.event(
                     [{nativeEvent: {contentOffset:{x: scrollX}}}],
                     {useNativeDriver:true}
                 )}
                 scrollEventThrottle={16}
                 contentContainerStyle={{
                     alignItems:'center'
                 }}
                 renderItem={({item, index}) => {
                     const inputRange = [
                         (index - 1) * ITEM_SIZE,
                         (index) * ITEM_SIZE,
                         (index +1)*ITEM_SIZE
                     ]
                     const translateY = scrollX.interpolate({
                         inputRange,
                         outputRange:[0, 0, 0]
                     })
                     return (
                         <TouchableOpacity onPress={() => navigation.navigate("Detail")} style={{width:ITEM_SIZE}}>
                             <Animated.View style={{marginHorizontal:spacing, padding:spacing*2, alignItems:'center', borderRadius:34, transform:[{translateY}]}}>
                             <Image source={item.src} resizeMode='cover' style={{width:wp('60%'), height:hp('50%'), borderTopLeftRadius:20, borderTopRightRadius:20}} />
                             <View style={{width:wp('60%'), height:hp('10%'), alignSelf:'center', justifyContent:'space-evenly', backgroundColor:'#171732', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                                 <Text style={{fontSize:12, color:'#fff', paddingLeft:20, paddingTop:8}}>Nike</Text>
                                 <Text style={{fontSize:10, color:'#a7a7a7', paddingLeft:20}}>Lorem Ipsum is simply dummy text </Text>
                             </View>
                         </Animated.View>
                         </TouchableOpacity>
                     )
                 }} />
            </View>
        )
}
