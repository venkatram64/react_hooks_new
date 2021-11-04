import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function HackerReact(){

    const [results, setResults] = useState([]);

    useEffect(() =>{              
        fetchData();           
    }, []);//will run only once that for state change.

    const fetchData = async () => {
        const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks');
        //let r = response.data.hits;
        //console.log(r);
        setResults(response.data.hits);        
    }  

    /*useEffect(() =>{
        async function fetchData(){
            const response = await axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks');
            //let r = response.data.hits;
            //console.log(r);
            setResults(response.data.hits);
            
        }        
        fetchData();           
    }, []);//will run only once that for state change.*/

    /*useEffect(() =>{
        
        axios.get('http://hn.algolia.com/api/v1/search?query=reacthooks')
            .then(res => {
                console.log(res.data.hits);
                setResults(res.data.hits);
            });
    }, []);//will run only once that for state change. */

    return (
        <>
            <ul>
                {results.length > 0 && results.map(result => {
                    return (<li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>)
                })}
            </ul>
        </>
    );
}