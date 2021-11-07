import React, {useState, useEffect} from 'react';

export default function InputRender(){

    const [myInput, setMyInput] = useState("Venkatram")



    const handleInputChange = (event) =>{
        event.preventDefault();
        setMyInput(event.target.value);
    }

    return (
        <>
            <input 
            onChange={handleInputChange} 
            value={myInput}
            type="text" placeholder="Enter a name"
            
            />
            {myInput}
        </>
    )
}