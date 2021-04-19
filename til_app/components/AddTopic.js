import React from 'react';

class AddTopic extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newItem = document.getElementById('newTopic').value;
        document.getElementById('newTopic').value = '';
        this.props.handleAdd(newItem);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" id="newTopic" placeholder="write new topic here.."></input>
                    <input type="submit" value="Add To List"></input>
                </form>
            </div>
        );
    }
}

export { AddTopic as default }