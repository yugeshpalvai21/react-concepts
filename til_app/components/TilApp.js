import React from 'react';
import Header from './Header.js';
import AddTopic from './AddTopic.js';
import Topics from './Topics.js';

class TilApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: []
        };

        this.handleAdd = this.handleAdd.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    
    handleAdd(item) {
        this.setState((prevState) => {
            return { topics: [...prevState.topics, item]}
        });
    }

    handleDeleteItem(delItem) {
        console.log("you're trying to delete - ", delItem);
        this.setState((prevState) => {
            return { topics: prevState.topics.filter((item) => item != delItem ) }
        });
    }
    
    render() {
        return (
            <div>
                <Header />
                <AddTopic handleAdd={this.handleAdd}/>
                <Topics topics={this.state.topics} handleDeleteItem={this.handleDeleteItem} />
            </div>
        );
    }
}

export { TilApp as default };