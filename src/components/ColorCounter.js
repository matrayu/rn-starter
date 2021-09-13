import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    //const [color, setColor] = useState('');
    const [counter, setCounter] = useState(0)
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
        </View>
    );
};

const styles = StyleSheet.create({});

export default ColorCounter;