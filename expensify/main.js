import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
           <NavLink to="about"> About Page</NavLink>
           <NavLink to="/"> Home Page</NavLink> 
        </div>
    )
}

const Home = () => {
    return (
        <div>
            <h1>This is rendered fro Home Component</h1>
        </div>
    )
}

const About = () => {
    return (
        <div>
            <h1>This is rendered fro About Component</h1>
        </div>
    )
}

const NotFound = () => {
    return (
        <div>
            <h1>Page Not Found Error...</h1>
        </div>
    )
}

const jsx = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={Home}  exact={true} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);


// console.log(typeof React);
// console.log(typeof ReactDOM);

// console.dir(React);

