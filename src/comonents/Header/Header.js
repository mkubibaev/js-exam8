import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = props => {
    return (
        <nav className="navbar navbar-dark bg-primary">
            <NavLink to="/" className="navbar-brand">Quotes Central</NavLink>
            <ul className="nav">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link">Quotes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/add" className="nav-link">Submit new quote</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Header;