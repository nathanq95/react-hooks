import React from 'react';
import StateHookComponent from './StateHookComponent.react';
import EffectHookComponent from './EffectHookComponent.react';
import EffectHookComponentAdv from './EffectHookComponentAdv.react';

class ParentComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>State Hook</h2>
                <StateHookComponent/>
                <h2>Effect Hook</h2>
                <EffectHookComponent/>
                <h2>Effect Hook Advanced</h2>
                <EffectHookComponentAdv />
            </div>
        
        )
    }
}

export default ParentComponent;

