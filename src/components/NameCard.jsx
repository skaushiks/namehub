import React from 'react';
import './NameCard.css';

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({list}) => {
        return (
            <div className="card-container">
                <a href={`${nameCheapUrl}${list}`} className="links" target="_blank" rel="noreferrer">
                    <p className="card-item">{list}</p>
                </a>
            </div>
        );
};

export default NameCard;