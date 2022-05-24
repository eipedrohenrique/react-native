import React from "react";
import { View, Text } from "react-native"

function ResultImc(props) {
    return(
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.messageResultImc}</Text>
        </View>
    );
}

export default ResultImc