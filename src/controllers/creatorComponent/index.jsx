import React from 'react';

const newComponent  = ( { component : Component, ...rest } ) => {
    return <Component  { ...rest } />
}

export default newComponent;
