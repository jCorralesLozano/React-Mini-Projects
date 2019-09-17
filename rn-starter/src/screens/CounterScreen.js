import React, {useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

// state = {counter: number}
// action = {changeAmount: string}
const reducer = (state, action) => {
    switch(action.changeAmount){
        case 'increase':
            return {...state, counter: state.counter + 1};
        case 'decrease':
            return {...state, counter: state.counter - 1};
        default:
            return state;
    }
}

const CounterScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {counter: 0});

    return(
        <View>
            <Button 
                title="Increase" 
                onPress={() => {
                    // dont do this
                    // counter++;
                    dispatch({changeAmount: 'increase'})
                }} 
            />
            <Button 
                title="Decrease" 
                onPress={() => {
                    dispatch({changeAmount: 'decrease'})
                }} 
            />
            <Text>Current count: {state.counter}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});

export default CounterScreen;