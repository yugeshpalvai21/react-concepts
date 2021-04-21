import React from 'react';
import ReactDOM from 'react-dom';

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.changeVisibilityStatus = this.changeVisibilityStatus.bind(this);
    }

    changeVisibilityStatus() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Currently Visibiliy Set To - {this.state.isVisible ? "TRUE" : "False"}</h1>
                <p>Default Props Set To - App Name - {this.props.app_name}</p>
                <p>Default Props Set To - Mode - {this.props.mode}</p>
                <button onClick={this.changeVisibilityStatus}>{this.state.isVisible ? "Hide Details" : "Show Hidden Details"}</button>
                { this.state.isVisible && <p>Yeyyyy!!!!! You're Seeing Hidden Data on this page</p> }
            </div>
        )
    }
}

Visibility.defaultProps = {
    app_name: 'Visibility App',
    mode: 'development'
}

const domElement = document.getElementById('app');

ReactDOM.render(<Visibility />, domElement);