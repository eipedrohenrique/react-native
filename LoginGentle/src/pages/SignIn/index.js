import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function SignIn() {
    const [hidePass, setHidePass] = useState(true)
    const navigation = useNavigation();
    
    return (
        <View style={style.container}>
            <Image
                    source={require('../../img/logo.png.png')}
                    style={{ width: '100%', height: '18%', top: '10%', }}
                    resizeMode="contain"
            />

            <Image
                source={require('../../img/logotwo.png')}
                style={{ width: '100%', height: '13%', top: '8%', }}
                resizeMode="contain"
            />

            <Text style={style.text}>customer</Text>

            <View style={style.containerHeader}>
                <TextInput
                    placeholder="E-mail"
                    style={style.input}
                />

                <TextInput
                    placeholder="Password"
                    style={style.input}
                    secureTextEntry={hidePass}
                />

                <Icon style={style.icon} name="email" size={25} color="#000"/>
                <Icon style={style.icontwo} name="lock" size={25} color="#000"/>
                

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>SignIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonForgot} onPress={ () => navigation.navigate('Forgot')}>
                    <Text style={style.ForgotText}>Forgot Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonRegister}>
                    <Text style={style.buttonTextTwo}>Register Now</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.iconthree} onPress={ () => setHidePass(!hidePass) }>
                    <Icon name="eye-off" size={25} color="#868E96"/>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },

    containerHeader: {
        marginTop: '5%',
        marginBottom: '8%',
        paddingStart: '5%',
        paddingEnd: '5%'
    },

    input: {
        height: 45,
        marginBottom: 12,
        fontSize: 16,
        borderColor:'#868E96',
        borderWidth: 1,
        borderRadius: 8,
        paddingLeft: 40
    },

    button: {
        backgroundColor: '#29ABE2',
        width: '100%',
        borderRadius: 8,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 25,
    },

    ForgotText: {
        fontSize: 15,
        marginTop: 14,
        alignSelf: 'center',
        color: '#868E96',
        fontWeight: 'bold'
    },

    buttonRegister: {
        height: 65,
        width: 393,
        left: -20,
        borderColor: '#29ABE2',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '55%',
    },

    buttonTextTwo: {
        color: '#29ABE2',
        fontSize: 20
    },

    text: {
        alignSelf: 'center',
        color: '#868E96',
        marginTop: '10%',
        fontSize: 20, 
    },

    icon: {
        position: 'absolute',
        left: 30,
        marginTop: 10,
        color: '#868E96'
    },

    icontwo: {
        position: 'absolute',
        left: 30,
        marginTop: 67,
        color: '#868E96'
    },

    iconthree: {
        position: 'absolute',
        left: 340,
        marginTop: 67,
        color: '#868E96'
    },
})