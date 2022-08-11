import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
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
            <View style={style.containerHeader}>
                <TextInput
                    placeholder="E-mail"
                    style={style.input}
                />

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

    tokenOne: {
        color: '#868E96',
        textAlign: 'center',
        marginTop: '5%',
    },

    tokenTwo: {
        color: '#868E96',
        textAlign: 'center',
    },
})