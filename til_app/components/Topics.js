import React from 'react';
import Topic from './Topic.js';

const Topics = (props) => {
    return (
        <div>
            <ul>
                { props.topics.map((item) => <Topic key={item} itemValue={item} handleDeleteItem={props.handleDeleteItem}/>) }
            </ul>
        </div>
    );
}

export { Topics as default }