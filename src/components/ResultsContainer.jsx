import React from 'react';
import NameCard from './NameCard';

const ResultsContainer = ({suggestName}) => {
    const listOfNames = suggestName.map((list) => {
        return <NameCard key={list} list={list} />;
    });

    return (
        <div className="resultsContainer">{listOfNames}</div>
    );
};

export default ResultsContainer;