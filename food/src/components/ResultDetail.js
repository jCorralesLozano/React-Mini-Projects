import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const ResultDetail = ({result}) =>{
    // outer quote = JS object,
    // innner quote = actual object
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: result.image_url}}/> 
            <Text style={styles.name}>{result.name}</Text>
            <Text >
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 125,
        borderRadius: 4,
        marginBottom: 5
    },
    name: {
        fontWeight: 'bold',
    },
    container: {
        marginLeft: 15
    }
});

export default ResultDetail;