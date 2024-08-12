import React from 'react';
import ReactDOM from 'react-dom';


class Person extends React.Component {
    constructor(props) {
        console.log('calling component constructor method');
        super(props);
        this.state = {first_name: 'yugesh', last_name: 'palvai', location: 'IND'};
        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange() {
        this.setState((prevState) => {
            return {
                first_name: 'New Yugesh'
            }
        });
    }

    render() {
        console.log('calling component render method');
        return (
            <div>
                <h1>Person Info</h1>
                <p>{this.state.first_name}</p>
                <p>{this.state.last_name}</p>
                <p>{this.state.location}</p>
                <button onClick={this.handleNameChange}>Change State By Changing Name</button>
            </div>
        );
    }

    UNSAFE_componentWillMount() {
        console.log('component will mount calling...');
    }

    componentDidMount() {
        console.log('component Did Mount Calling....');
    }

    UNSAFE_componentWillUpdate() {
        console.log('component will update calling...')
    }

    componentDidUpdate() {
        console.log('component did update calling....')
    }

    componentWillUnmount() {
        console.log('component did unmount calling....')
    }
}

const domElement = document.getElementById('app');

ReactDOM.render(<Person />, domElement);