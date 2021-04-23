import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <div>
        <h2 align="center">REACT-ROUTER-APP</h2>
        <hr/>
        <NavLink to="/" activeClassName="highlight" exact={true}>Home</NavLink>
        <NavLink to="about" activeClassName="highlight">About</NavLink>
        <NavLink to="portfolios" activeClassName="highlight">Portfolios</NavLink>
        <NavLink to="contact" activeClassName="highlight">Contact</NavLink>
        <hr/>
    </div>
)

export {Header as default}