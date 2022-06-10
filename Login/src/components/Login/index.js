import React, { useState } from "react";
import { KeyboardAvoidingView, TextInput, TouchableOpacity, Text, View } from "react-native";
import styles from "./style";

function Login() {
    const [display, setDisplay]=useState('none');
    
    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} 
        style={[styles.container, styles.darkbg]}>
            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>Login</Text>
            </View>
            <View style={styles.loginForm}>
                <TextInput style={styles.loginInput} placeholder="Usuário:"/>
                <TextInput style={styles.loginInput} placeholder="Senha:" secureTextEntry={true}/>
                <TouchableOpacity style={styles.loginButton} onPress={()=>setDisplay('flex')}>
                    <Text style={styles.loginButtonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.loginMsg(display)}>Usuário ou senha inválidos!</Text>
            </View>
        </KeyboardAvoidingView>
    );
}

export default Login