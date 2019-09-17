import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', age: 45},
        {name: 'Friend #2', age: 67},
        {name: 'Friend #3', age: 13},
        {name: 'Friend #4', age: 23},
        {name: 'Friend #5', age: 17},
        {name: 'Friend #6', age: 28},
        {name: 'Friend #7', age: 99},
        {name: 'Friend #8', age: 56},
        {name: 'Friend #9', age: 33},
    ];
    return(
        <FlatList 
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(friends) => friends.name}
            data={friends} 
            renderItem={ ({item}) => {
                return (
                    <Text style={styles.textStyle}>
                        {item.name} - Age {item.age}
                    </Text>
                );
            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 10
    }
});

export default ListScreen;