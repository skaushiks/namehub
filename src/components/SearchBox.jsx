import React from 'react';

const searchbox = ({onInputChange}) => {
    return (
        <div className="searchbox">
            <input onChange={(event) => {onInputChange(event.target.value);}} 
            type="text" placeholder="Type here" className="searchbox_input"/>
        </div>
    );
};

export default searchbox;