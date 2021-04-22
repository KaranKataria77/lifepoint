import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Item, Label, Input, Button, Root, Toast } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';

export default class OtpVerify extends Component {

    constructor(props) {
        super(props);
        this.state = {
            otp: ""
        };
    }

    verify() {
        if (this.state.otp.length == 4) {
            this.props.navigation.navigate("Login")
        } else {
            Toast.show({
                text: 'please provide OTP!',
                type: 'danger'
            })
        }
    }

    render() {
        return (
            <Root>
                <ScrollView style={styles.page}>
                    <View style={{ height: hp('100%'), justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ height: hp('85%'), justifyContent: 'space-between' }}>
                            <View style={{ width: wp('30%'), height: hp('15%'), borderWidth: 1, borderRadius: 150, borderColor: '#24244b', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ height: 7, width: 7, backgroundColor: '#62ACC7', position: 'absolute', zIndex: 1, top: 8, right: 15 }}></View>
                                <Image source={require('../../assets/image.png')} resizeMode="contain" style={{ width: wp('20%') }} />
                            </View>

                            <View style={{ width: wp('75%'), height: hp('12%'), justifyContent: 'space-between', alignSelf: 'center' }}>
                                <View style={{ flexDirection: 'row', width: wp('45%'), justifyContent: 'space-between' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                    <Icons name="keyboard-backspace" size={25} color="#fff" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 26, color: '#fff' }}>Verification</Text>
                                </View>
                                <Text style={{ fontSize: 12, color: '#fff', lineHeight: 22 }}>We have sent you a verification code to your Email Id davidwaleb@gmail.com.</Text>
                            </View>

                            <View style={{ width: wp('75%'), height: hp('15%'), alignSelf: 'center', justifyContent: 'space-between' }}>
                                <CodeField
                                    value={this.state.otp}
                                    onChangeText={(otp) => this.setState({ otp })}
                                    cellCount={4}
                                    rootStyle={styles.codeFieldRoot}
                                    keyboardType="number-pad"
                                    textContentType="oneTimeCode"
                                    renderCell={({ index, symbol, isFocused }) => (
                                        <Text
                                            key={index}
                                            style={[styles.cell, isFocused && styles.focusCell]}>
                                            {symbol || (isFocused ? <Cursor /> : null)}
                                        </Text>
                                    )}
                                />
                                <Text style={{ fontSize: 12, color: '#fff', alignSelf: 'center' }}>Didn't get a code?   Tap to resend.</Text>
                            </View>

                            <View style={{ height: hp('10%') }}></View>

                            <View style={{ width: wp('75%'), height: hp('12%'), alignSelf: 'center', justifyContent: 'space-between' }}>
                                <Button block style={{ borderRadius: 20, backgroundColor: '#5098F2' }} onPress={() => this.verify()}>
                                    <Text style={{ color: '#fff' }}>VERIFY</Text>
                                </Button>
                                <View style={{ width: wp('75%'), flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ color: '#fff', fontSize: 12 }}>Have an Account? </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                                        <Text style={{ color: '#fff', fontSize: 12, }}>Log In</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </Root>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: "#00001f"
    },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 45,
        borderBottomColor: '#24244b',
        borderBottomWidth: 1,
        fontSize: 24,
        color: '#fff',
        textAlign: "center"
    }
})