import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigation } from "@react-navigation/stack";

import Contacts from './src/pages/Contacts'
import Information from './src/pages/Information'

const Stack = createStackNavigation();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Contacts" component={Contacts}/>
        <Stack.Screen name="Information" component={Information}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}