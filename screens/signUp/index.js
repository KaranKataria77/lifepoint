import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {Item, Label, Input, Button, Toast, Root} from 'native-base';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FontIcon from 'react-native-vector-icons/FontAwesome';

export default class SignUp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            conformPassword:"a",
            male:false,
            female:false,
            other:false,
        };
      }

      selectMale(){
          this.setState({male:!this.state.male})
          if(this.state.female == true || this.state.other == true){
              this.setState({female:false, other:false})
          }
      }

      selectFemale(){
        this.setState({female:!this.state.female})
        if(this.state.male == true || this.state.other == true){
            this.setState({male:false, other:false})
        }
    }

    selectOther(){
        this.setState({other:!this.state.other})
        if(this.state.female == true || this.state.male == true){
            this.setState({female:false, male:false})
        }
    }

    verify(){
        if(this.state.username.length > 4){
            if(this.state.email.length > 4){
                if(this.state.password.length > 8){
                    if(this.state.conformPassword.length > 8){
                        if(this.state.conformPassword == this.state.password){
                            if(this.state.male || this.state.female || this.state.other){
                                this.props.navigation.navigate("OtpVerify") 
                            } else {
                                Toast.show({
                                    text: 'please select gender!',
                                    type:'danger'
                                })
                            }
                        } else {
                            Toast.show({
                                text: 'password does not matches!',
                                type:'danger'
                            })
                        }
                    } else {
                        Toast.show({
                            text: 'Please provide conformPassword with valid length!',
                            type:'danger'
                        })
                    }
                }  else {
                    Toast.show({
                        text: 'Please provide password with valid length!',
                        type:'danger'
                    })
                }
            } else {
                Toast.show({
                    text: 'Please provide email with valid length!!',
                    type:'danger'
                })
            }
        } else {
            Toast.show({
                text: 'Please provide username with valid length!!',
                type:'danger'
            })
        }
    }

    render() {
        return (
                <Root>
                    <ScrollView style={styles.page} >
                <View style={{justifyContent:'space-between', flex:1, height:hp('100%')}}>
                <View style={{ height: hp('10%'), width: wp('20%'), alignSelf: 'center',paddingTop:15 }}>
                    <Text style={styles.text}>PROFILE PICTURE</Text>
                    <View style={styles.camera}>
                        <Icons name="camera-alt" size={25} color="#fff" />
                    </View>
                </View>

                <View style={{ height: hp('12%'), width: wp('75%'), alignSelf: 'center', alignItems:'flex-end',paddingTop:15 }}>
                    <Text style={styles.genderText}>GENDER</Text>
                    <View style={{ height: hp('12%'), width: wp('65%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{height:hp('12%'), width:wp('12%')}}>
                        <TouchableOpacity onPress={() => this.selectMale()} style={{ height: 50, width: 50, backgroundColor: this.state.male ? '#5098F2' : '#24244b', alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                            <FontIcon name="male" size={25} style={{color: this.state.male ? '#fff' : '#a7a7a7'}} />
                        </TouchableOpacity>
                        <Text style={{color:'#A7A7A7', fontSize:8, alignSelf:"center", paddingVertical:5}}>MALE</Text>
                        </View>
                        <View style={{height:hp('12%'), width:wp('12%')}}>
                        <TouchableOpacity onPress={() => this.selectFemale()} style={{ height: 50, width: 50, backgroundColor: this.state.female ? '#5098F2' : '#24244b', alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                            <FontIcon name="female" size={25} style={{color: this.state.female ? '#fff' : '#a7a7a7'}} />
                        </TouchableOpacity>
                        <Text style={{color:'#A7A7A7', fontSize:8, alignSelf:"center", paddingVertical:5}}>FEMALE</Text>
                        </View>
                        <View style={{height:hp('12%'), width:wp('12%')}}>
                        <TouchableOpacity onPress={() => this.selectOther()} style={{ height: 50, width: 50, backgroundColor: this.state.other ? '#5098F2' : '#24244b', alignItems: 'center', justifyContent: 'center', borderRadius: 100 }}>
                            <FontIcon name="transgender" size={25} style={{color: this.state.other ? '#fff' : '#a7a7a7'}} />
                        </TouchableOpacity>
                        <Text style={{color:'#A7A7A7', fontSize:8, alignSelf:"center", paddingVertical:5}}>OTHER</Text>
                        </View>
                        <Icons name="check" size={25} style={{ alignSelf: 'center', paddingBottom:20, color:this.state.male || this.state.female || this.state.other == true ? '#fff' : '#00001f' }} />
                    </View>
                </View>

                <View style={{width:wp('75%'), height:hp('65%'), alignSelf:'center', justifyContent:"space-between"}}>
                    <View>
                    <Icons name="check" size={this.state.username.length > 4 ? 25 : 0} color="#fff" style={{ position:'absolute', zIndex:1, top:15, right:0 }} />
                    <Item floatingLabel>
                        <Label style={{color:'#A7A7A7', fontSize:12}}>USERNAME</Label>
                        <Input onChangeText={(text) => this.setState({username:text})} style={{color:'#fff'}} textContentType="username" />
                    </Item>
                    </View>
                    <View>
                    <Icons name="check" size={this.state.email.length > 4 ? 25 : 0} color="#fff" style={{ position:'absolute', zIndex:1, top:15, right:0 }} />
                    <Item floatingLabel>
                        <Label style={{color:'#A7A7A7', fontSize:12}}>EMAIL</Label>
                        <Input onChangeText={(text) => this.setState({email:text})} style={{color:'#fff'}} textContentType="emailAddress" />
                    </Item>
                    </View>
                    <View>
                    <Icons name="check" size={this.state.password.length > 8 ? 25 : 0} color="#fff" style={{ position:'absolute', zIndex:1, top:15, right:0 }} />
                    <Item floatingLabel>
                        <Label style={{color:'#A7A7A7', fontSize:12}}>PASSWORD</Label>
                        <Input onChangeText={(text) => this.setState({password:text})} style={{color:'#fff'}} secureTextEntry={true} />
                    </Item>
                    </View>
                    <View>
                    <Icons name={this.state.conformPassword == this.state.password ? "check" : "close"} size={this.state.conformPassword.length == this.state.password.length ? 25 : 0} color="#fff" style={{ position:'absolute', zIndex:1, top:15, right:0 }} />
                    <Item floatingLabel>
                        <Label style={{color:'#A7A7A7', fontSize:12}}>CONFORM PASSWORD</Label>
                        <Input onChangeText={(text) => this.setState({conformPassword:text})} style={{color:'#fff'}} secureTextEntry={true} />
                    </Item>
                    </View>
                    <Button block style={{borderRadius:20,backgroundColor:'#5098f2'}} onPress={() => this.verify()}>
                        <Text style={{color:'#fff'}}>CREATE ACCOUNT</Text>
                    </Button>
                    <View style={{width:wp('75%'), flexDirection:'row', alignSelf:'center', alignItems:'center', justifyContent:'center', paddingBottom:25}}>
                    <Text style={{color:'#fff', fontSize:12}}>Have an Account? </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")}>
                        <Text style={{color:'#fff', fontSize:12,}}>Log In</Text>
                    </TouchableOpacity>
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
    camera: {
        height: hp('10%'),
        width: wp('20%'),
        borderWidth: 1,
        borderColor: '#24244b',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    text: {
        fontSize: 8,
        color: '#A7A7A7',
        alignSelf: 'center',
        paddingVertical: 10
    },
    genderText: {
        fontSize: 8,
        color: '#A7A7A7',
        alignSelf: 'flex-start',
        paddingVertical: 10,
        paddingLeft:wp('12%')
    }
})