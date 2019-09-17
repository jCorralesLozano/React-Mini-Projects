import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const[password, setPassword] = useState('');

    return (
        <View>
            <Text>Enter Password</Text>
            <TextInput 
                style={styles.input} 
                autoCapitalize="none"
                autoCorrect={false}
                // because value was initialized to '', it cannot change
                // values because it is hard coded. A callback function 
                // will allow us to adjust {name}
                value={password}
                onChangeText={(newValue) => setPassword(newValue)}
            />
            <Text>My name is {password.length}</Text>
            {(password.length < 6) 
                ? <Text>{password}</Text> 
                : <Text>Error! character limit exceeded!</Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;