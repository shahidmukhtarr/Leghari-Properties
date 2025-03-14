import React from 'react';
import { Link } from 'react-router-dom';
import './header.css'; 

const Header = () => (
    <header className="header-container">
        <div className="header-content">
        
            <h1>Leghari Properties</h1>
            <p className="header-subtitle">Let Leghari Property Experts make your dreams come true</p>
            <nav>
                <ul className="header-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/for-rent">For Rent</Link></li>
                    <li><Link to="/for-sale">For Sale</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
        
    </header>
);

export default Header;
