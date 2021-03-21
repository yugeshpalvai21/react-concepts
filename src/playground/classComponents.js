import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is for subtitle</p>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById('app'));