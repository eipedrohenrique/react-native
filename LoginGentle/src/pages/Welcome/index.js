import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../img/logo.png.png')}
                    style={{ width: '60%' }}
                    resizeMode="contain"
                />
            </View>
  
            <View>
                <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('SignIn')}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    containerLogo:{
        flex:2,
        justifyContent:'center',
        alignItems: 'center',
    }
})