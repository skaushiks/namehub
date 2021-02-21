import React from 'react';
import './Header.css';
import logo from './logo.jpg';

const Header = ({headTitle, headExpand}) => {
    return (
        <div className="header">
            <img src={logo} alt="Header Logo" className={`header_image ${headExpand? "header_imageExpanded": "header_imageContracted"}`}/>
            <h1 className={`header_text ${headExpand? "header_textExpanded": "header_textContracted"}`}>{headTitle}</h1>
        </div>
    );
};

export default Header;