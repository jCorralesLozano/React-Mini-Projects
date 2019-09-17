import React from 'react';
import {Text, View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return(
        <View style={styles.background} >
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput 
                style={styles.inputStyle}
                placeholder="Search"
                value={term}
                autoCapitolize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />  
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5, // responsible for rounded corners
        marginHorizontal: 15,
        flexDirection: 'row',
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10,
    }
});

export default SearchBar;