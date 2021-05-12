import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>This Is Heading</h1>
            <p>This is Paragraph from Header Component Renderrr</p>
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
        <Switch>
            <Route path="/" component={Home}  exact={true} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);

const domElement = document.getElementById('app');

ReactDOM.render(jsx, domElement);


// console.log(typeof React);
// console.log(typeof ReactDOM);

// console.dir(React);

