import React from "react";
import { View, Text } from "react-native"
import styles from "./style";

function Title() {
    return(
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>ONEBITHEALTH</Text>
        </View>
    );
}

export default Title