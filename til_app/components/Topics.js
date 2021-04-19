import React from 'react';
import Topic from './Topic.js';

class Topics extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    { this.props.topics.map((item) => <Topic key={item} itemValue={item} handleDeleteItem={this.props.handleDeleteItem}/>) }
                </ul>
            </div>
        );
    }
}

export { Topics as default }