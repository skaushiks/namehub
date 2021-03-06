import React from 'react';
import './NameCard.css';

const nameCheapUrl = 'https://www.namecheap.com/domains/registration/results/?domain=';

const NameCard = ({list}) => {
        return (
            <div className="nameCard">
                <a href={`${nameCheapUrl}${list}`} className="links" target="_blank" rel="noreferrer">
                    <p className="nameCard_item">{list}</p>
                </a>
            </div>
        );
};

export default NameCard;