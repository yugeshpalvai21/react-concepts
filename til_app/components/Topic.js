import React from 'react';

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(e) {
        this.props.handleDeleteItem(this.props.itemValue);
    }

    render() {  
        return (
            <li>
                {this.props.itemValue} &nbsp;&nbsp;&nbsp;
                <button onClick={this.handleDelete}>Delete This Item</button>
            </li>
        )
    }
}

export { Topic as default }