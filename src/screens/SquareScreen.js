import React, { useReducer } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { ColorCounter } from "../components";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
    // state === { red: num, green: num, blue: num }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15} 

    switch (action.colorToChange) {
        case 'red':
            return {...state, red: state.red + action.amount };
        case 'green':
            return {...state, green: state.green + action.amount };
        case 'blue':
            return {...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {

    const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })

    return (
        <View>
            <ColorCounter onIncrease={() => } onDecrease={() => } color="Red"/>
            <ColorCounter onIncrease={() => } onDecrease={() => } color="Green"/>
            <ColorCounter onIncrease={() => } onDecrease={() => } color="Blue"/>
            <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red},${green},${blue})` }} />
            <Text>{`${red},${green},${blue}`}</Text>
        </View>
    );
};

const styles = StyleSheet.create({});

export default SquareScreen;