import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function HackerReactWithSearchButton(){

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('react hooks');

    useEffect(() =>{              
        fetchData();           
    }, []);

    const fetchData = async () => {
        const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
        //let r = response.data.hits;
        //console.log(r);
        setResults(response.data.hits);        
    }; 
    
    return (
        <>           
           <input type="text" value={query} onChange={event => setQuery(event.target.value)} /> 
           <button type="button" onClick={fetchData}>Search</button>  {/* works for clicking the button */}
            <ul>
                {results.map(result => (
                    <li key={result.objectID}>
                        <a href={result.url}>{result.title}</a>
                    </li>
                ))}
            </ul>
           
        </>
    );
}