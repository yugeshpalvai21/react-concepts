import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const Home = () => (
        <div>
            <h1>Home Page.. will Update Soon...</h1>
        </div>
)

const About = () => (
    <h2>This is About Section...</h2>
)

const Portfolios = () => (
    <h3>This Section Displays portfolios</h3>
)

const Contact = () => (
    <h5>This Section Displays Contact Details....</h5>
)

const NotFound = () => (
    <h3>Pages That You're Trying to Access Is Not Available</h3>
)

const Header = () => (
    <div>
        <h2 align="center">REACT-ROUTER-APP</h2>
        <hr/>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="portfolios">Portfolios</Link>
        <Link to="contact">Contact</Link>
        <hr/>
    </div>
)

const jsx = (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About} />
            <Route path="/portfolios" component={Portfolios} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);