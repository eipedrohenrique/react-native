import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    darkbg:{
        backgroundColor: "#333"
    },

    loginMsg:(text='none')=>({
        fontWeight:"bold",
        fontSize: 22,
        color:"#FF0043",
        marginBottom: 15,
        display: text,
        padding: 10,
    }),

    loginForm: {
        width: "80%"
    },

    loginInput: {
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        width: 300,
        borderRadius: 5,
    },

    loginButton: {
        padding: 12,
        backgroundColor: "#F58634",
        alignSelf: "center",
        borderRadius: 5,
    },

    loginButtonText: {
        fontWeight: "bold",
        fontSize: 22,
        color: "#333",
    },

    boxTitle: {
        alignItems:"center",
        justifyContent:"center",
        padding: 10,
    },

    textTitle: {
        color: "#F58634",
        fontSize:55,
        fontWeight:"bold",
    }
});

export default styles