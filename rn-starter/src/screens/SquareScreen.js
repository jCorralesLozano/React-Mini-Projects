import React, {useReducer} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

/* state = {red: number, green: number, blue: number} */
/* action is an object that defines how to change a state object */
/* action = { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15} */
// Preferred naming convention for the action object should be
// action = {type: 'operation', payload: data}
const reducer = (state, action) => {
    switch(action.colorToChange){
        case 'red':
            // never change state value directly 
            // Example: state.red = state.red - 15;
            return (state.red + action.amount > 255 || state.red + action.amount < 0) 
            ? state
            : {...state, red: state.red + action.amount};            
        case 'green':
            return (state.green + action.amount > 255 || state.green + action.amount < 0) 
            ? state
            : {...state, green: state.green + action.amount}; 
        case 'blue':
            return (state.blue + action.amount > 255 || state.blue + action.amount < 0) 
            ? state
            : {...state, blue: state.blue + action.amount};
        default:
            return state;
    }
}

const SquareScreen = () =>{
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View>
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'red', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'red', amount: -1 * COLOR_INCREMENT})}
                color="red"
            />
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'green', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'green', amount: -1 * COLOR_INCREMENT})}
                color="green"
            />
            <ColorCounter 
                onIncrease={() => dispatch({colorToChange: 'blue', amount: COLOR_INCREMENT})}
                onDecrease={() => dispatch({colorToChange: 'blue', amount: -1 * COLOR_INCREMENT})}
                color="blue"
            />
            <View style={{
                    height: 150, 
                    width: 150, 
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`
                }} 
            />
        </View>
    );  
};

const styles = StyleSheet.create({

});

export default SquareScreen;