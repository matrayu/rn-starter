import React from "react";
import { Text, StyleSheet, View } from "react-native";

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 1,
        borderColor: 'black',
        height: 300,
        flexDirection: "row",
        justifyContent: "space-between",
        //alignItems: "",
        
    },
    viewOneStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'red',
        borderWidth: 3,
        borderColor: 'red',
        margin: 5,
        padding: 5,
    },
    viewTwoStyle: {
        height: 100,
        width: 100,
        backgroundColor: 'green',
        borderWidth: 3,
        borderColor: 'green',
        margin: 5,
        padding: 5,
        alignSelf: "flex-end",
        //marginTop: 105,
        //position: 'absolute',
        //left: 145,
        //top: 105,
        //...StyleSheet.absoluteFillObject

    },
    viewThreeStyle: {
        height: 100,
        width: 100,
        borderWidth: 3,
        backgroundColor: 'blue',
        borderColor: 'blue',
        margin: 5,
        padding: 5,
    }
});

export default BoxScreen;