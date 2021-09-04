import React, { useEffect, useState } from 'react';

const EffectHookComponent = () => {
    const [resourceType, setResourceType] = useState('posts');
    const [items, setItems] = useState([]);

    /**
     * First arg is a function to be ran whenever useEffect is ran.
     * Second arg (optional) is an array that takes in values to be watch for changes.
     *  - if the second arg is given, useEffect will only run when the passed in
     *    values change.
     * 
     * useEffect is ran when the component mounts (initial render).
     * Because a second argument is specified, [resourceType], useEffect
     * will only run when resourceType changes.
     * 
     * In this case, when useEffect is called it sends a GET request to the URL using the
     * current resourceType as a part of the URL.
     * This call is a side effect because it happened after resourceType changed.
     */

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType]);
 
    return (
        <div>
            <div>
                <button onClick={() => setResourceType('posts')}>Posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map(item => <pre key={item.id}>{JSON.stringify(item)}</pre>)}
        </div>
    );
};

export default EffectHookComponent;
