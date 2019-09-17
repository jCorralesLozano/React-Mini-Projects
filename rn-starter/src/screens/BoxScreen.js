import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return(
        <View style={styles.parentStyles}>
            <View style={styles.viewOneStyles}/>
            <View style={styles.viewTwoStyles}/>
            <View style={styles.viewThreeStyles}/>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyles: {
        flexDirection: 'row',
        height: 100,
        justifyContent: 'space-between',
    },
    viewOneStyles: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'lightcoral',

    },
    viewTwoStyles: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: 'green',
        backgroundColor: 'lightgreen',
        // top: 50,
        alignSelf: 'flex-end'
    },
    viewThreeStyles: {
        height: 50,
        width: 50,
        borderWidth: 3,
        borderColor: 'blue',
        backgroundColor: 'lightblue',

    },
});

export default BoxScreen;