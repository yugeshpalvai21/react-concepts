import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const domElement = document.getElementById('app');

const Header = () => (
    <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </div>
)

const About = () => <h3>This is About Page</h3>;

const Contact = () => <h3>This is Contact Page</h3>;

const PageNotFound = () => <h3>This Page Is Not Defined...</h3>;

const jsx = (
    <BrowserRouter>
        <Header />
        <Route path="/" component={Header} exact={true}/>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
    </BrowserRouter>
);


ReactDOM.render(jsx, domElement);