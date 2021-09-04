import React, { useEffect, useState } from 'react';

const EffectHookComponentAdv = () => {
    // useState sets the initial windowWidth state to the window's current width.
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // handleResize updates the state to the window's current width.
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    /**
     * useEffect adds the resize event listener to the window when the component mounts (bc of the second arg), 
     * and will run the handleResize function whenever the window is resized to dynamically update the windowWidth state.
     * 
     * We add a return to remove the event listener when the component is unmounted (removed).
     * 
     * The return is used for clean up and is called anytime the component unmounts. It will 
     * run as long as the useEffect ran at least once, which it always will. 
     * 
     * Another example is when useEffect subscribes to some API. The return should unsubcribe from the API.
     * 
     */
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            {windowWidth}
        </div>
    );
};

export default EffectHookComponentAdv;
