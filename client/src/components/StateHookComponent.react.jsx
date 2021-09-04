import React, { useState } from 'react';

const StateHookComponent = (props) => {
    /**
     * first argument (first element in the array): state variable
     * second argument (second element in the array): function that updates the state variable
     */
    const [count, setCount] = useState(0);
    const [str, setStr] = useState('');

    /**
     * All setCount/setStr does is take the current state and updates it.
     * Think of the args in the functions as currentState = currentState + someValue,
     * the functions then sets the current state to that value.
     */
    return (
        <div>
            <p>You clicked: {count} times</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <p>This is the current string: {str}</p>
            <button onClick={() => setStr(str + 'foobar')}>+foobar</button>
        </div>
    );
};

export default StateHookComponent;
