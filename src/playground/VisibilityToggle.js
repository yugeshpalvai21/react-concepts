import React from 'react';
import ReactDOM from 'react-dom';

class VisibiltyToggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
        this.changeVisibility = this.changeVisibility.bind(this);
    }

    changeVisibility() {
        this.setState((prevState) => {
            return {
                isVisible: !prevState.isVisible
            }
        });
    }

    render() {
        return (
            <div>
                <h1 align="center">Visibility App</h1>
                <hr/>
                <button onClick={this.changeVisibility}>
                    { this.state.isVisible ? 'Hide Details': 'Show Details' }
                </button>
                { this.state.isVisible && <p>Showing This Paragraph Because You Clicked Show Button </p> }
            </div>
        )
    }
}

ReactDOM.render(<VisibiltyToggle />, document.getElementById('app'));