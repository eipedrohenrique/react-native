import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Welcome from '../pages/Welcome'
import SignIn from '../pages/SignIn'
import Forgot from "../pages/Forgot";
import Recovery from "../pages/Recovery";

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Forgot"
                component={Forgot}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="Recovery"
                component={Recovery}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

const style = StyleSheet.create({
    container: {
        backgroundColor: '#29ABE2'
    }
})