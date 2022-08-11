import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";

export default function Recovery() {
    return (
        <View style={style.containerHeader}>
                <TextInput
                    placeholder="New password"
                    style={style.input}
                    secureTextEntry={true}
                />

                <TextInput
                    placeholder="Confirm new password"
                    style={style.input}
                    secureTextEntry={true}
                    
                />

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Recovery</Text>
                </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
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
        marginTop: 450,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        color: '#fff',
        fontSize: 25,
    },
})