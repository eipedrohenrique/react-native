import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Recovery() {
    const [hidePass, setHidePass] = useState(true)
    const [hidePasst, setHidePasst] = useState(true)
    const navigation = useNavigation();
    
    return (
        <View style={style.containerHeader}>
                <TextInput
                    placeholder="New password"
                    style={style.input}
                    secureTextEntry={hidePass}
                />

                <TextInput
                    placeholder="Confirm new password"
                    style={style.input}
                    secureTextEntry={hidePasst}
                />

                <Text style={style.text}>Recovery password</Text>

                <Icon style={style.iconfour} name="lock" size={25} color="#000"/>
                <Icon style={style.iconfive} name="lock" size={25} color="#000"/>

                <TouchableOpacity style={style.icon} onPress={ () => navigation.navigate('Forgot')}>
                    <Icon name="arrow-left" size={25} color="#29ABE2"/>
                </TouchableOpacity>

                <TouchableOpacity style={style.icontwo} onPress={ () => setHidePass(!hidePass) }>
                    <Icon name="eye-off" size={25} color="#868E96"/>
                </TouchableOpacity>

                <TouchableOpacity style={style.iconthree} onPress={ () => setHidePasst(!hidePasst) }>
                    <Icon name="eye-off" size={25} color="#868E96"/>
                </TouchableOpacity>

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Recovery</Text>
                </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    containerHeader: {
        marginTop: '27%',
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
        paddingVertical: 10,
        marginTop: 450,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 25,
    },

    icon: {
        left: 1,
        top: -195,
        color: '#29ABE2'
    },

    icontwo: {
        position: 'absolute',
        left: 340,
        marginTop: 10,
        color: '#868E96'
    },

    iconthree: {
        position: 'absolute',
        left: 340,
        marginTop: 67,
        color: '#868E96'
    },

    iconfour: {
        position: 'absolute',
        left: 30,
        marginTop: 10,
        color: '#868E96'
    },

    iconfive: {
        position: 'absolute',
        left: 30,
        marginTop: 66,
        color: '#868E96'
    },

    text: {
        alignSelf: 'center',
        color: '#29ABE2',
        top: -170,
        fontSize: 20,
        right: 50,
        fontWeight: 'bold'
    },
})