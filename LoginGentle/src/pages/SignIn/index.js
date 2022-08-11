import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function SignIn() {
    const navigation = useNavigation();
    
    return (
        <View style={style.container}>
            <Image
                    source={require('../../img/logo.png.png')}
                    style={{ width: '100%', height: '18%', top: '10%', }}
                    resizeMode="contain"
            />
            <View style={style.containerHeader}>
                <TextInput
                    placeholder="E-mail"
                    style={style.input}
                />

                <TextInput
                    placeholder="Password"
                    style={style.input}
                    secureTextEntry={true}
                />

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>SignIn</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonForgot} onPress={ () => navigation.navigate('Forgot')}>
                    <Text style={style.ForgotText}>Forgot Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.buttonRegister}>
                    <Text style={style.buttonTextTwo}>Register Now</Text>
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
        marginTop: '25%',
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
        paddingLeft: 10
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
        borderColor: '#29ABE2',
        borderWidth: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '90%',
    },

    buttonTextTwo: {
        color: '#29ABE2',
        fontSize: 20
    }
})