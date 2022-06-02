import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./style";

export default function QuotationsItems() {
    return (
        <View style={styles.mainContent}>
            <View style={styles.contextLeft}>
                <View style={styles.boxLogo}>
                    <Image
                    style={styles.logBitcoin}
                    source={require("../../../img/bitcoinred.png")}
                    />
                    <Text style={styles.dayCotation}>02/06/2022</Text>
                </View>
            </View>
                <View style={styles.contextRight}>
                    <Text style={styles.price}>$ 65135135</Text>
                </View>         
        </View>
    )
}