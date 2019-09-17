import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () =>{
    const greeting = <Text>GReetings</Text>;
    const farewell = "My name is Jesse";

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native</Text>
            {greeting}
            <Text style={{fontSize: 20}}>{farewell}</Text>
        </View>
    );            
};

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    }
});

export default ComponentsScreen;