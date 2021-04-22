import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { Item, Label, Input, Button, Root, Toast } from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontIcon from 'react-native-vector-icons/FontAwesome';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    verify() {
        if (this.state.email.length > 4) {
            if (this.state.password.length > 8) {
                this.props.navigation.navigate("MyTab")
            } else {
                Toast.show({
                    text: 'please provide password!',
                    type: 'danger'
                })
            }
        } else {
            Toast.show({
                text: 'please provide email!',
                type: 'danger'
            })
        }
    }

    render() {
        return (
            <Root>
                <ScrollView style={styles.page}>
                    <View style={{ height: hp('100%'), alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ justifyContent: 'space-between', height: hp('90%') }}>
                            <View>
                                <View style={{ height: hp('25%'), width: wp('50%'), borderColor: '#24244b', borderWidth: 1, borderRadius: 150, alignItems: 'center', justifyContent: 'center', alignSelf: "center" }}>
                                    <View style={{ height: 10, width: 10, backgroundColor: '#5098f2', position: 'absolute', zIndex: 1, top: 15, right: 25 }}></View>
                                    <Image source={require('../../assets/image.png')} resizeMode="contain" style={{ width: wp('30%') }} />
                                </View>
                            </View>

                            <View style={{ width: wp('75%'), height: hp('22%'), alignSelf: 'center', justifyContent: 'space-between' }}>
                                <View>
                                    <Icons name="check" size={this.state.email.length > 4 ? 25 : 0} color="#fff" style={{ position: 'absolute', zIndex: 1, top: 15, right: 0 }} />
                                    <Item floatingLabel>
                                        <Label style={{ color: '#A7A7A7', fontSize: 12 }}>EMAIL</Label>
                                        <Input onChangeText={(text) => this.setState({ email: text })} style={{ color: '#fff' }} textContentType="emailAddress" />
                                    </Item>
                                </View>
                                <View>
                                    <Icons name="check" size={this.state.password.length > 8 ? 25 : 0} color="#fff" style={{ position: 'absolute', zIndex: 1, top: 15, right: 0 }} />
                                    <Item floatingLabel>
                                        <Label style={{ color: '#A7A7A7', fontSize: 12 }}>PASSWORD</Label>
                                        <Input onChangeText={(text) => this.setState({ password: text })} style={{ color: '#fff' }} secureTextEntry={true} />
                                    </Item>
                                    <Text onPress={() => this.props.navigation.navigate("ForgotPass")} style={{ fontSize: 10, color: '#fff', paddingTop: 20 }}>Forget Password?</Text>
                                </View>
                            </View>

                            <View style={{ width: wp('75%'), height: hp('12%'), justifyContent: 'space-between', alignSelf: 'center' }}>
                                <Button block style={{ backgroundColor: "#5098F2", borderRadius: 20 }} onPress={() => this.verify()}>
                                    <Text style={{ color: '#fff' }}>LOG IN</Text>
                                </Button>
                                <View style={{ width: wp('75%'), flexDirection: 'row', alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: '#fff', fontSize: 12 }}>Don't have an Account? </Text>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate("SignUp")}>
                                        <Text style={{ color: '#fff', fontSize: 12, }}>Create one</Text>
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
        backgroundColor: "#00001F",
    },
})