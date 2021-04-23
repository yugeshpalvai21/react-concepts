import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './../components/Home.js';
import About from './../components/About.js';
import Header from './../components/Header.js';
import Portfolios from './../components/Portfolios.js';
import Contact from './../components/Contact.js';
import NotFound from './../components/NotFound.js';

const AppRouter = () => (
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
)

export { AppRouter as default}