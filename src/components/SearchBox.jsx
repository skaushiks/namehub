import React from 'react';

const searchbox = ({onInputChange}) => {
    return (
        <div className="search-container">
            <input onChange={(event) => {onInputChange(event.target.value);}} 
            type="text" placeholder="Type here" className="search-input"/>
        </div>
    );
};

export default searchbox;