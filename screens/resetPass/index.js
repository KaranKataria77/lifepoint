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

export default class ResetPass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            conformPassword: "a"
        };
    }

    verify() {
        if (this.state.password.length > 8) {
            if (this.state.conformPassword.length > 8) {
                if (this.state.password == this.state.conformPassword) {
                    this.props.navigation.navigate("MyTab")
                } else {
                    Toast.show({
                        text: 'password does not match!',
                        type: 'danger'
                    })
                }
            } else {
                Toast.show({
                    text: 'please provide conformPassword of valid length!',
                    type: 'danger'
                })
            }
        } else {
            Toast.show({
                text: 'please provide password of valid length!',
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
                                <View style={{ flexDirection: 'row', width: wp('60%'), justifyContent: 'space-between' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                                        <Icons name="keyboard-backspace" size={25} color="#fff" />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 26, color: '#fff' }}>Reset Password</Text>
                                </View>
                                <Text style={{ fontSize: 12, color: '#fff', lineHeight: 22 }}>Email Id verified. Set a new passowrr</Text>
                            </View>

                            <View style={{ width: wp('75%'), height: hp('20%'), alignSelf: 'center', justifyContent: 'space-between' }}>
                                <View>
                                    <Icons name="check" size={this.state.password.length > 8 ? 25 : 0} color="#fff" style={{ position: 'absolute', zIndex: 1, top: 15, right: 0 }} />
                                    <Item floatingLabel>
                                        <Label style={{ color: '#A7A7A7', fontSize: 12 }}>PASSWORD</Label>
                                        <Input onChangeText={(text) => this.setState({ password: text })} style={{ color: '#fff' }} secureTextEntry={true} />
                                    </Item>
                                </View>
                                <View>
                                    <Icons name={this.state.conformPassword == this.state.password ? "check" : "close"} size={this.state.conformPassword.length == this.state.password.length ? 25 : 0} color="#fff" style={{ position: 'absolute', zIndex: 1, top: 15, right: 0 }} />
                                    <Item floatingLabel>
                                        <Label style={{ color: '#A7A7A7', fontSize: 12 }}>CONFORM PASSWORD</Label>
                                        <Input onChangeText={(text) => this.setState({ conformPassword: text })} style={{ color: '#fff' }} secureTextEntry={true} />
                                    </Item>
                                </View>
                            </View>

                            <View style={{ height: hp('10%') }}></View>

                            <View style={{ width: wp('75%'), height: hp('12%'), alignSelf: 'center', justifyContent: 'space-between' }}>
                                <Button block style={{ borderRadius: 20, backgroundColor: '#5098F2' }} onPress={() => this.verify()}>
                                    <Text style={{ color: '#fff' }}>RESET PASSWORD</Text>
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