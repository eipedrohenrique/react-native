import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Container, Ball } from './style';
import { Animated } from "react-native";

export default function Welcome() {
    const navigation = useNavigation();

    const animations = {
        one: new Animated.Value(0),
        two: new Animated.Value(0),
        three: new Animated.Value(0),
        four: new Animated.Value(0),
    }

    function navigateToHome (){
        setTimeout (() => {navigation.navigate('SignIn')}, 5000)
    }

    function onAnimate(animation, nextAnimation) {
        Animated.sequence([
            Animated.timing(animation, {
                toValue: -10,
                duration: 400,
                useNativeDriver: true,
            }),
    
            Animated.timing(animation, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start();

        setTimeout(nextAnimation, 200);
    }

    function onStartAnimate(){
        function onFourAnimation(){
            onAnimate(animations.four, () => {
                setTimeout(onStartAnimate, 500);
            });
        }

        function onThreeAnimation(){
            onAnimate(animations.three, onFourAnimation);
        }

        function onTwoAnimation(){
            onAnimate(animations.two, onThreeAnimation);
        }

        onAnimate(animations.one, onTwoAnimation);
    }


    useEffect(() => {
        onStartAnimate();
        navigateToHome();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Image
                    source={require('../../img/logo.png.png')}
                    style={{ width: '60%' }}
                    resizeMode="contain"
                />

                <Container>
                  <Ball style={{transform: [{translateY: animations.one}]}} color="#29ABE2" />
                  <Ball style={{transform: [{translateY: animations.two}]}} color="#29ABE2" />
                  <Ball style={{transform: [{translateY: animations.three}]}} color="#29ABE2" />
                  <Ball style={{transform: [{translateY: animations.four}]}} color="#29ABE2" />
                </Container>

                <Image
                source={require('../../img/logotwo.png')}
                style={{ width: '100%', height: '13%', top: '18%', }}
                resizeMode="contain"
                />

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
        alignItems: 'center',
    }
})