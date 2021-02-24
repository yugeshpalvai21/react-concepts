import React from 'react';
import ReactDOM from 'react-dom';


//const jsx = React.createElement('h1', null, 'Welcome Aborad, This Is React');

//const jsx = <h1>Welcome Aborad, This Is From React</h1>;

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div>
                <h3>Counter App - React</h3>
                <h4>Counter - {this.state.counter}</h4>
            </div>
        )
    }
}
const domElement = document.getElementById('app');

ReactDOM.render(<Counter />, domElement);
