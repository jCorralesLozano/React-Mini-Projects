 import {useEffect, useState} from 'react';
 import yelp from '../api/yelp';

 export default() => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('hi there');
        /* because this api request could fail, we must wrap it 
            in a try-catch statement
        */
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm, // es2015 syntax equal to writing 'term: term'
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses);
        } catch(e){
            setErrorMessage('Something went wrong');
        }
    }
    
    // call search api when component is first rendered
    // BAD CODE
    // searchApi('pasta');
    // GOOD CODE: use the function useEffect()
    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
 };