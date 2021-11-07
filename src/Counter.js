
import React, {useReducer} from 'react';

const reducer = (state, action) => {
    switch(action.type){
        case "INCREMENT":
            return {
                count: state.count + 1,
                showText: state.showText
            }
        case "TOGGLE":
            return {
                count: state.count,
                showText: !state.showText
            }
        default:
            return state;
    }
    
}

const initialState={
    count: 0,
    showText: true
}

export default function Counter(){

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleClick =(event) => {
        event.preventDefault();
        dispatch({type: "INCREMENT"});
        dispatch({type: "TOGGLE"});
    }

    return (
        <>
            <button onClick={handleClick}>{state.count} Increment</button>
            {state.showText && <p> This is Venkatram</p>}
        </>
    )
}