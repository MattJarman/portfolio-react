import React from 'react';

function AbsoluteWrapper({ children }) {
    return (
        <div className="absolute w-full h-full">
            { children }
        </div>
    );
}

export default AbsoluteWrapper;