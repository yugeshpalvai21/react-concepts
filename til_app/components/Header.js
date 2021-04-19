import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h4>Today I Learned</h4>
                <p>small app that stores topics that you learned everyday</p>
            </div>
        );
    }
}

export { Header as default };