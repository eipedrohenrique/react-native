import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native';

export default function Forgot() {
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

                <TouchableOpacity style={style.icontwo} onPress={ () => navigation.navigate('SignIn')}>
                    <Icon name="arrow-left" size={25} color="#29ABE2"/>
                </TouchableOpacity>

                <Icon style={style.icon} name="email" size={25} color="#000"/>

                <TouchableOpacity style={style.button} onPress={ () => navigation.navigate('Recovery')}>
                    <Text style={style.buttonText}>Send</Text>
                </TouchableOpacity>

                <Text style={style.tokenOne}>You will receive an email with the</Text>
                <Text style={style.tokenTwo}>token code</Text>
                
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
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
        marginTop: -15,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 25,
    },

    tokenOne: {
        color: '#868E96',
        textAlign: 'center',
        marginTop: '5%',
    },

    tokenTwo: {
        color: '#868E96',
        textAlign: 'center',
    },

    icon: {
        position: 'absolute',
        left: 30,
        marginTop: 10,
        color: '#868E96'
    },

    text: {
        alignSelf: 'center',
        color: '#868E96',
        marginTop: '10%',
        fontSize: 20, 
    },

    icontwo: {
        left: 1,
        top: -340,
        color: '#29ABE2'
    },
})