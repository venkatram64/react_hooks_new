import React, {useState, useEffect} from 'react';

export default function MyCounterHooks(){
    const [counter, setCounter] = useState(0);
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
        document.title = `You have clicked ${counter} times`;
    });

    const incrementCount = (event) => {
        event.preventDefault();
        //setCounter(counter+1);
        setCounter(previousCount => previousCount+1);
    }

    const toggleLight = (event) => {
        event.preventDefault();
        setIsOn(previousState => !previousState);
    }
    return(
        <>
            <button
                onClick={incrementCount}
            >I was clicked {counter} times...</button>

            <h2>Toggle light</h2>
            <div
                onClick={toggleLight}
                style={{
                    height: '50px',
                    width: '50px',
                    background: isOn ? "yellow": "grey"
                }}
            >

            </div>
        </>
    )
}