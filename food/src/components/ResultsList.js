import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetail from './ResultDetail'
import {withNavigation} from 'react-navigation';

const ResultList = ({title, results, navigation}) => {
    if(!results.length) {
        return null;
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title}</Text>
            <FlatList
                horizontal={true}
                data={results}
                keyExtractor={(result) => result.id}
                renderItem={({item}) => {
                    return( 
                        <TouchableOpacity onPress={() => navigation.navigate('Results', {id: item.id})}>
                            <ResultDetail result={item}/>
                        </TouchableOpacity>
                    );
                }}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});

// we are exporting a 'ResultList' component with the
// additional 'withNavigation' functionality tied to it
export default withNavigation(ResultList);