import React from 'react';
import ReactDOM from 'react-dom';


//const jsx = React.createElement('h1', null, 'Welcome Aborad, This Is React');

//const jsx = <h1>Welcome Aborad, This Is From React</h1>;

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.addOne = this.addOne.bind(this);
        this.minusOne = this.minusOne.bind(this);
        this.reSet = this.reSet.bind(this);

    }

    addOne() {
        this.setState((prevState) => ({ counter: prevState.counter + 1 }))
    }

    minusOne() {
        this.setState((prevState) => ({ counter: prevState.counter - 1 }))
    }

    reSet() {
        this.setState(() => ({ counter: 0 }))
    }

    render() {
        return (
            <div>
                <h3>Counter App - React</h3><hr />
                <h4>Counter - {this.state.counter}</h4><hr />
                <button onClick={this.addOne}>Add One (+1)</button> <br /><br />
                <button onClick={this.minusOne}>Minus One (-1)</button> <br /><br />
                <button onClick={this.reSet}>Reset Counter</button>
            </div>
        )
    }
}

const domElement = document.getElementById('app');

ReactDOM.render(<Counter />, domElement);
