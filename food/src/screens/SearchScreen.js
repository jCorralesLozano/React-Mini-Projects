import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar.js'
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    const filterResultsByPrice = (price) => {
        // price === '$' || '$$' || '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    };
    
    return(
        // if content is going off the screen, adding
        // a flex property will help
        <View style={{flex: 1}}>
            <SearchBar 
                term={term} 
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <ScrollView>
                <ResultsList 
                    results={filterResultsByPrice('$')} 
                    title='Cost Effective' 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$')} 
                    title='Bit Pricier' 
                />
                <ResultsList 
                    results={filterResultsByPrice('$$$')} 
                    title='Big Spender' 
                />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({

});

export default SearchScreen;