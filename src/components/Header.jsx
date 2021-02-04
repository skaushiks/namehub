import React from 'react';
import './Header.css';
import logo from './logo1.jpg';

const Header = ({headTitle, headExpand}) => {
    return (
        <div className="head-container">
            <img src={logo} alt="headerImage" className={`head-image ${headExpand? "head-image-expanded": "head-image-contracted"}`}/>
            <h1 className={`head-text ${headExpand? "head-text-expanded": "head-text-contracted"}`}>{headTitle}</h1>
        </div>
    );
};

export default Header;