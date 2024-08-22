import React from 'react';
import ReactDOM from 'react-dom';

const Greet = (props) => (
    <div>
        <h1>Hello!! {props.msg}</h1>
    </div>
)

const domElement = document.getElementById('app');

const processComponent = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                { props.isAdmin && <p>Hey I'm Admin</p> }
                { props.isAuthenticated && <p>I'm also Authenticated Person....</p> }
                <WrappedComponent {...props}/>
            </div>
        )
    }
}

const HigherOrderComponent = processComponent(Greet);
const OtherHOC = processComponent(Greet);

ReactDOM.render(<OtherHOC isAdmin={false} isAuthenticated={true} msg="From other Higher Order" />, domElement);