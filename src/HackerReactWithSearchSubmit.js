import React, {useState, useEffect, useRef} from "react";
import axios from 'axios';

export default function HackerReactWithSearchSubmit(){

    const [results, setResults] = useState([]);
    const [query, setQuery] = useState('react hooks');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    /* To bring the focus on this field */
    const searchInputRef = useRef();

    useEffect(() =>{              
        fetchData();           
    }, []);

    const fetchData = async () => {
        setLoading(true);
        try{
            const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
            //let r = response.data.hits;
            //console.log(r);
            setResults(response.data.hits); 
        }catch(err){
            setError(err);
        }
        setLoading(false);       
    }; 

    const handleSearch = (event) =>{
        event.preventDefault();
        fetchData();
    }

    const handleClear = () => {
        setQuery("");
        /* To bring the focus on this field */
        searchInputRef.current.focus();
    }

    return (
        <div className="container max-w-md mx-auto p-4 m-2 bg-blue shadow-lg rounded"> 
            <h1 className="text-grey-darkest font-thin p-4">Hooks News</h1>
            <img src="https://img.icons8.com/dotty/80/000000/react.png" alt="React Logo" className="float-right h-12"/>
            <form className="mb-4" onSubmit={handleSearch}>  
            {/* ref is to bring the focus on this field */}       
                <input className="border p-1 rounded" type="text" 
                    value={query} 
                    ref={searchInputRef} 
                    onChange={event => setQuery(event.target.value)} 
                /> 
                <button className="bg-orange rounded m-1 p-1" type="submit">Search</button>
                <button className="bg-orange p-1 rounded" type="button" onClick={handleClear}>Clear</button>
            </form> {/* works for enter key also */}

            { loading ? (<div className="font-bold text-orange-dark">Loading results...</div>):
                (<ul className="list-reset leading-normal">
                    {results.map(result => (
                        <li className="text-indigo-dark hover:text-indigo-darkest" key={result.objectID}>
                            <a href={result.url}>{result.title}</a>
                        </li>
                    ))}
                </ul>)
            }

            {error && <div className="text-red font-bold">{error.message}</div>}
            
        </div>
    );
}